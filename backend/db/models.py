from datetime import datetime
from sqlalchemy import Column, Integer, String, Float, DateTime
from db.database import Base


class AdminUser(Base):
    __tablename__ = "admin_users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    password_hash = Column(String, nullable=False)
    name = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class PaymentTransaction(Base):
    __tablename__ = "payment_transactions"

    id = Column(Integer, primary_key=True, index=True)
    date = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    amount = Column(Float, nullable=False)
    mpesa_code = Column(String, unique=True, nullable=False)
    status = Column(String, nullable=False, default="pending")  # completed, pending, failed
    created_at = Column(DateTime, default=datetime.utcnow)
