from datetime import datetime, date
from typing import Optional
from fastapi import APIRouter, Depends, Query, HTTPException
from sqlalchemy import select, func, or_
from sqlalchemy.ext.asyncio import AsyncSession
from pydantic import BaseModel

from db.database import get_db
from db.models import PaymentTransaction
from fastapi import Request


from db.database import get_db


router = APIRouter(prefix="/api/transactions", tags=["transactions"])


class TransactionOut(BaseModel):
    id: int
    date: str
    phone: str
    amount: float
    mpesaCode: str
    status: str

    class Config:
        from_attributes = True


class TransactionUpdate(BaseModel):
    date: Optional[str] = None
    phone: Optional[str] = None
    amount: Optional[float] = None
    mpesaCode: Optional[str] = None
    status: Optional[str] = None


class TransactionCreate(BaseModel):
    date: str
    phone: str
    amount: float
    mpesaCode: str
    status: str = "pending"


class StatsResponse(BaseModel):
    todayRevenue: float
    monthlyRevenue: float
    transactionsToday: int
    totalCustomers: int
    avgTransaction: float
    successRate: float
    pendingPayments: int


@router.get("", response_model=list[TransactionOut])
async def get_transactions(
    status: str | None = Query(None),
    search: str | None = Query(None),
    date: str | None = Query(None),
    db: AsyncSession = Depends(get_db),
):
    query = select(PaymentTransaction).order_by(PaymentTransaction.id.desc())

    if status and status != "all":
        query = query.where(PaymentTransaction.status == status)

    if date:
        query = query.where(PaymentTransaction.date == date)

    if search:
        search_term = f"%{search}%"
        query = query.where(
            or_(
                PaymentTransaction.phone.ilike(search_term),
                PaymentTransaction.mpesa_code.ilike(search_term),
                PaymentTransaction.amount.cast(str).ilike(search_term),
            )
        )

    result = await db.execute(query)
    rows = result.scalars().all()

    return [
        TransactionOut(
            id=t.id,
            date=t.date,
            phone=t.phone,
            amount=t.amount,
            mpesaCode=t.mpesa_code,
            status=t.status,
        )
        for t in rows
    ]


@router.post("", response_model=TransactionOut, status_code=201)
async def create_transaction(
    body: TransactionCreate,
    db: AsyncSession = Depends(get_db),
):
    # Check for duplicate M-Pesa code
    existing = await db.execute(
        select(PaymentTransaction).where(
            PaymentTransaction.mpesa_code == body.mpesaCode
        )
    )
    if existing.scalar_one_or_none():
        raise HTTPException(
            status_code=409,
            detail="A transaction with this M-Pesa code already exists",
        )

    txn = PaymentTransaction(
        date=body.date,
        phone=body.phone,
        amount=body.amount,
        mpesa_code=body.mpesaCode,
        status=body.status,
    )
    db.add(txn)
    await db.commit()
    await db.refresh(txn)

    return TransactionOut(
        id=txn.id,
        date=txn.date,
        phone=txn.phone,
        amount=txn.amount,
        mpesaCode=txn.mpesa_code,
        status=txn.status,
    )


@router.get("/stats", response_model=StatsResponse)
async def get_stats(db: AsyncSession = Depends(get_db)):
    today_str = datetime.utcnow().strftime("%Y-%m-%d")
    # Get first day of current month
    first_of_month = datetime.utcnow().replace(day=1).strftime("%Y-%m-%d")

    # Today's revenue
    result = await db.execute(
        select(func.coalesce(func.sum(PaymentTransaction.amount), 0)).where(
            PaymentTransaction.date == today_str,
            PaymentTransaction.status == "completed",
        )
    )
    today_revenue = result.scalar()

    # Monthly revenue
    result = await db.execute(
        select(func.coalesce(func.sum(PaymentTransaction.amount), 0)).where(
            PaymentTransaction.date >= first_of_month,
            PaymentTransaction.status == "completed",
        )
    )
    monthly_revenue = result.scalar()

    # Transactions today
    result = await db.execute(
        select(func.count(PaymentTransaction.id)).where(
            PaymentTransaction.date == today_str
        )
    )
    transactions_today = result.scalar()

    # Total unique customers (unique phone numbers)
    result = await db.execute(
        select(func.count(func.distinct(PaymentTransaction.phone)))
    )
    total_customers = result.scalar()

    # Average transaction
    result = await db.execute(
        select(func.coalesce(func.avg(PaymentTransaction.amount), 0)).where(
            PaymentTransaction.status == "completed"
        )
    )
    avg_transaction = result.scalar()

    # Total and completed for success rate
    result = await db.execute(select(func.count(PaymentTransaction.id)))
    total = result.scalar()

    result = await db.execute(
        select(func.count(PaymentTransaction.id)).where(
            PaymentTransaction.status == "completed"
        )
    )
    completed = result.scalar()

    success_rate = (completed / total * 100) if total > 0 else 0

    # Pending payments
    result = await db.execute(
        select(func.count(PaymentTransaction.id)).where(
            PaymentTransaction.status == "pending"
        )
    )
    pending = result.scalar()

    return StatsResponse(
        todayRevenue=today_revenue,
        monthlyRevenue=monthly_revenue,
        transactionsToday=transactions_today,
        totalCustomers=total_customers,
        avgTransaction=round(avg_transaction, 0),
        successRate=round(success_rate, 1),
        pendingPayments=pending,
    )


@router.put("/{transaction_id}", response_model=TransactionOut)
async def update_transaction(
    transaction_id: int,
    body: TransactionUpdate,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(PaymentTransaction).where(PaymentTransaction.id == transaction_id)
    )
    txn = result.scalar_one_or_none()
    if not txn:
        raise HTTPException(status_code=404, detail="Transaction not found")

    if body.date is not None:
        txn.date = body.date
    if body.phone is not None:
        txn.phone = body.phone
    if body.amount is not None:
        txn.amount = body.amount
    if body.mpesaCode is not None:
        txn.mpesa_code = body.mpesaCode
    if body.status is not None:
        txn.status = body.status

    await db.commit()
    await db.refresh(txn)

    return TransactionOut(
        id=txn.id,
        date=txn.date,
        phone=txn.phone,
        amount=txn.amount,
        mpesaCode=txn.mpesa_code,
        status=txn.status,
    )


@router.delete("/{transaction_id}")
async def delete_transaction(
    transaction_id: int,
    db: AsyncSession = Depends(get_db),
):
    result = await db.execute(
        select(PaymentTransaction).where(PaymentTransaction.id == transaction_id)
    )
    txn = result.scalar_one_or_none()
    if not txn:
        raise HTTPException(status_code=404, detail="Transaction not found")

    await db.delete(txn)
    await db.commit()
    return {"message": "Transaction deleted successfully"}


# mpesa confirmation endpoint
@router.post("/confirmation")
async def mpesa_confirmation(
    request: Request,
    db: AsyncSession = Depends(get_db)
):
    data = await request.json()
    print("Payment received:", data)

    mpesa_code = data.get("TransID")
    phone = data.get("MSISDN")
    amount = float(data.get("TransAmount"))

    today = datetime.utcnow().strftime("%Y-%m-%d")

    # Check duplicate transaction
    result = await db.execute(
        select(PaymentTransaction).where(
            PaymentTransaction.mpesa_code == mpesa_code
        )
    )

    existing = result.scalar_one_or_none()

    if existing:
        # Update existing transaction
        existing.status = "completed"
        await db.commit()

    else:
        # Create new transaction
        txn = PaymentTransaction(
            date=today,
            phone=phone,
            amount=amount,
            mpesa_code=mpesa_code,
            status="completed"
        )

        db.add(txn)
        await db.commit()

    return {
        "ResultCode": 0,
        "ResultDesc": "Accepted"
    }

# mpesa validation endpoint
@router.post("/validation")
async def mpesa_validation(request: Request):
    data = await request.json()
    print("Validation Request Received:", data)

    return {
        "ResultCode": 0,
        "ResultDesc": "Accepted"
    }