"""Health check endpoint."""
from datetime import datetime
from fastapi import APIRouter
from app.config import settings
from app.schemas import HealthResponse

router = APIRouter(prefix="/api", tags=["Health"])


@router.get(
    "/health",
    response_model=HealthResponse,
    summary="Health check",
    description="Check the server availability and environment status."
)
def get_health() -> HealthResponse:
    return HealthResponse(
        status="ok",
        app=settings.APP_NAME,
        environment=settings.ENVIRONMENT,
        timestamp=datetime.utcnow()
    )
