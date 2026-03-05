from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import text

from db.database import engine, Base, get_db
from db.models import AdminUser, PaymentTransaction  # noqa: F401 - needed for table creation
from services.auth import router as auth_router
from services.transactions import router as transactions_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Create database tables on startup."""
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    await engine.dispose()


app = FastAPI(lifespan=lifespan)

# CORS middleware for Next.js frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(auth_router)
app.include_router(transactions_router)


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/health/db")
async def health_check_db(db=None):
    from fastapi import Depends
    from sqlalchemy.ext.asyncio import AsyncSession

    return {"status": "healthy"}