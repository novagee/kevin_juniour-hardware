import asyncio
import traceback
import bcrypt
from datetime import datetime

from db.database import engine, AsyncSessionLocal, Base
from db.models import AdminUser, PaymentTransaction
from sqlalchemy import select


def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


async def seed():
    try:
        # Drop all tables and recreate to match the new schema
        async with engine.begin() as conn:
            await conn.run_sync(Base.metadata.drop_all)
            await conn.run_sync(Base.metadata.create_all)
        print("Tables recreated successfully")

        async with AsyncSessionLocal() as session:
            # Create admin user
            admin = AdminUser(
                email="admin@junior.com",
                password_hash=hash_password("junior@8718"),
                name="New Junior",
            )
            session.add(admin)
            print("Created admin user: admin@junior.com / junior@8718")

            # Create sample transactions
            today = datetime.utcnow().strftime("%Y-%m-%d")
            transactions = [
                PaymentTransaction(date=today, phone="+254701234567", amount=5000, mpesa_code="MFL5XY9A1", status="completed"),
                PaymentTransaction(date=today, phone="+254712345678", amount=10000, mpesa_code="MFL5XY9A2", status="completed"),
                PaymentTransaction(date=today, phone="+254723456789", amount=7500, mpesa_code="MFL5XY9A3", status="pending"),
                PaymentTransaction(date=today, phone="+254734567890", amount=3000, mpesa_code="MFL5XY9A4", status="completed"),
                PaymentTransaction(date=today, phone="+254745678901", amount=12000, mpesa_code="MFL5XY9A5", status="completed"),
                PaymentTransaction(date=today, phone="+254756789012", amount=8500, mpesa_code="MFL5XY9A6", status="completed"),
                PaymentTransaction(date=today, phone="+254767890123", amount=4500, mpesa_code="MFL5XY9A7", status="completed"),
                PaymentTransaction(date=today, phone="+254778901234", amount=15000, mpesa_code="MFL5XY9A8", status="completed"),
                PaymentTransaction(date="2026-03-04", phone="+254789012345", amount=6000, mpesa_code="MFL5XY9A9", status="completed"),
                PaymentTransaction(date="2026-03-04", phone="+254790123456", amount=9500, mpesa_code="MFL5XY9B0", status="failed"),
                PaymentTransaction(date="2026-03-03", phone="+254701234567", amount=20000, mpesa_code="MFL5XY9B1", status="completed"),
                PaymentTransaction(date="2026-03-03", phone="+254712345678", amount=2500, mpesa_code="MFL5XY9B2", status="completed"),
            ]
            session.add_all(transactions)
            print(f"Created {len(transactions)} sample transactions")

            await session.commit()
            print("Seeding complete!")

    except Exception as e:
        traceback.print_exc()
        with open("seed_error.log", "w") as f:
            traceback.print_exc(file=f)

    await engine.dispose()


if __name__ == "__main__":
    asyncio.run(seed())
