"""SQLAlchemy database models."""
from datetime import datetime
from sqlalchemy import Column, Integer, String, Text, DateTime, func
from app.database import Base


class ContactSubmission(Base):
    """Database model for storing contact form submissions."""
    __tablename__ = "contact_submissions"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    full_name = Column(String(100), nullable=False)
    email = Column(String(255), nullable=False, index=True)
    subject = Column(String(150), nullable=False)
    message = Column(Text, nullable=False)
    ip_address = Column(String(45), nullable=True)
    created_at = Column(DateTime, default=datetime.utcnow, nullable=False)

    def __repr__(self):
        return f"<ContactSubmission id={self.id} name='{self.full_name}' email='{self.email}'>"
