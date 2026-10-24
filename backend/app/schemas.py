"""Pydantic schemas for request validation and response serialization."""
from datetime import datetime
from typing import Optional
import re
from pydantic import BaseModel, Field, field_validator


class ContactCreate(BaseModel):
    """Schema for incoming contact form submission."""
    full_name: str = Field(
        ...,
        min_length=2,
        max_length=100,
        description="Sender's full name",
        examples=["Jane Doe"]
    )
    email: str = Field(
        ...,
        min_length=5,
        max_length=255,
        description="Sender's valid email address",
        examples=["jane.doe@example.com"]
    )
    subject: str = Field(
        ...,
        min_length=3,
        max_length=150,
        description="Subject of the inquiry",
        examples=["Collaboration Opportunity on Computer Vision"]
    )
    message: str = Field(
        ...,
        min_length=10,
        max_length=5000,
        description="Message content",
        examples=["Hello Basim, I came across your AgroVision project and would love to discuss a potential AI engineering role."]
    )
    # Honeypot field for spam prevention; must remain empty
    website: Optional[str] = Field(
        default=None,
        max_length=100,
        description="Spam trap field. Must be left blank by human users."
    )

    @field_validator("full_name", "subject", "message", mode="before")
    @classmethod
    def strip_text(cls, v: str) -> str:
        if isinstance(v, str):
            cleaned = v.strip()
            if not cleaned:
                raise ValueError("Field cannot be empty or only whitespace.")
            return cleaned
        return v

    @field_validator("email")
    @classmethod
    def validate_email_format(cls, v: str) -> str:
        cleaned = v.strip().lower()
        # RFC 5322 compatible practical regex
        email_regex = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
        if not re.match(email_regex, cleaned):
            raise ValueError("Please provide a valid email address.")
        return cleaned


class ContactResponse(BaseModel):
    """Schema for successful contact submission response."""
    success: bool
    message: str
    submission_id: int
    received_at: datetime


class HealthResponse(BaseModel):
    """Schema for API health status check."""
    status: str
    app: str
    environment: str
    timestamp: datetime
