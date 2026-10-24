"""Contact submission endpoints."""
import logging
from datetime import datetime, timedelta
from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session
from sqlalchemy import func
from app.database import get_db
from app.models import ContactSubmission
from app.schemas import ContactCreate, ContactResponse
from app.config import settings

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api", tags=["Contact"])


@router.post(
    "/contact",
    response_model=ContactResponse,
    status_code=status.HTTP_201_CREATED,
    summary="Submit contact message",
    description="Validates and persists a visitor contact message into the database."
)
def submit_contact_form(
    payload: ContactCreate,
    request: Request,
    db: Session = Depends(get_db)
) -> ContactResponse:
    # 1. Honeypot check: If the hidden 'website' field is populated, silently reject / reject
    if payload.website:
        logger.warning("Spam honeypot triggered by client.")
        # Return generic error to discourage bots
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Submission could not be processed."
        )

    # 2. Extract client IP address for basic abuse prevention
    client_ip = request.client.host if request.client else None
    forwarded_for = request.headers.get("x-forwarded-for")
    if forwarded_for:
        client_ip = forwarded_for.split(",")[0].strip()

    # 3. Rate limiting / abuse mitigation (max N submissions per hour per IP)
    one_hour_ago = datetime.utcnow() - timedelta(hours=1)
    if client_ip:
        recent_count = db.query(func.count(ContactSubmission.id)).filter(
            ContactSubmission.ip_address == client_ip,
            ContactSubmission.created_at >= one_hour_ago
        ).scalar()

        if recent_count and recent_count >= settings.MAX_SUBMISSIONS_PER_HOUR:
            logger.warning(f"Rate limit exceeded for IP: {client_ip}")
            raise HTTPException(
                status_code=status.HTTP_429_TOO_MANY_REQUESTS,
                detail="Too many contact submissions from your address. Please try again later."
            )

    # 4. Create and persist submission
    try:
        new_submission = ContactSubmission(
            full_name=payload.full_name,
            email=payload.email,
            subject=payload.subject,
            message=payload.message,
            ip_address=client_ip,
            created_at=datetime.utcnow()
        )
        db.add(new_submission)
        db.commit()
        db.refresh(new_submission)

        logger.info(f"Successfully saved contact submission id={new_submission.id} from {payload.email}")

        return ContactResponse(
            success=True,
            message="Thank you! Your message has been received and saved successfully. Basim will get back to you shortly.",
            submission_id=new_submission.id,
            received_at=new_submission.created_at
        )

    except HTTPException:
        raise
    except Exception as exc:
        db.rollback()
        # Log internal error without exposing sensitive details to the caller
        logger.error(f"Failed to persist contact submission: {str(exc)}", exc_info=True)
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail="An error occurred while saving your message. Please try again or reach out directly via email."
        )
