"""FastAPI application entrypoint for Basim Qamar Portfolio."""
import logging
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from app.config import settings
from app.database import engine, Base
from app.routes import health, contact

# Configure structured logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s"
)
logger = logging.getLogger("portfolio_app")


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Lifecycle event handler: create database tables on startup."""
    logger.info("Initializing database tables...")
    try:
        Base.metadata.create_all(bind=engine)
        logger.info("Database tables initialized successfully.")
    except Exception as e:
        logger.error(f"Error creating database tables: {e}", exc_info=True)
    yield
    logger.info("Shutting down portfolio API service.")


app = FastAPI(
    title=settings.APP_NAME,
    description="Production-grade API backend for Basim Qamar's personal portfolio website.",
    version="1.0.0",
    docs_url="/docs",
    redoc_url="/redoc",
    lifespan=lifespan
)

# Configure CORS
origins = settings.cors_origins
logger.info(f"Configuring CORS with allowed origins: {origins}")

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# Register route modules
app.include_router(health.router)
app.include_router(contact.router)


@app.get("/", tags=["Root"])
def root_summary():
    """Root info endpoint."""
    return JSONResponse(
        content={
            "name": settings.APP_NAME,
            "version": "1.0.0",
            "developer": "Basim Qamar",
            "status": "operational",
            "documentation": "/docs",
            "health_check": "/api/health"
        }
    )
