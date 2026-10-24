"""Automated tests for FastAPI endpoints: Health & Contact persistence."""
import pytest
from fastapi.testclient import TestClient
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from app.main import app
from app.database import Base, get_db
from app.models import ContactSubmission

# In-memory SQLite database specifically for test isolation
SQLALCHEMY_DATABASE_URL = "sqlite:///:memory:"

engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
    poolclass=StaticPool,
)
TestingSessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


@pytest.fixture(scope="function")
def db_session():
    """Create a fresh database schema for each test."""
    Base.metadata.create_all(bind=engine)
    session = TestingSessionLocal()
    try:
        yield session
    finally:
        session.close()
        Base.metadata.drop_all(bind=engine)


@pytest.fixture(scope="function")
def client(db_session):
    """TestClient that uses the isolated test database session."""
    def override_get_db():
        try:
            yield db_session
        finally:
            pass

    app.dependency_overrides[get_db] = override_get_db
    with TestClient(app) as test_client:
        yield test_client
    app.dependency_overrides.clear()


def test_health_check(client):
    """Verify that GET /api/health returns 200 with ok status."""
    response = client.get("/api/health")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "ok"
    assert "Basim Qamar" in data["app"]
    assert "timestamp" in data


def test_root_endpoint(client):
    """Verify that GET / returns 200 with service information."""
    response = client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["status"] == "operational"
    assert data["developer"] == "Basim Qamar"


def test_contact_submission_success(client, db_session):
    """Verify that valid contact submission is persisted in database and returns 201."""
    payload = {
        "full_name": "Dr. Sarah Khan",
        "email": "sarah.khan@example.org",
        "subject": "AgroVision AI Model Discussion",
        "message": "Hello Basim, I reviewed your work on YOLOv8 and EfficientNetB0 for crop disease detection and would like to connect."
    }

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 201
    data = response.json()
    assert data["success"] is True
    assert "Thank you" in data["message"]
    assert data["submission_id"] > 0

    # Verify directly from database
    db_record = db_session.query(ContactSubmission).filter_by(id=data["submission_id"]).first()
    assert db_record is not None
    assert db_record.full_name == "Dr. Sarah Khan"
    assert db_record.email == "sarah.khan@example.org"
    assert db_record.subject == "AgroVision AI Model Discussion"
    assert db_record.message == payload["message"]


def test_contact_submission_invalid_email(client):
    """Verify that malformed email address is rejected with 422."""
    payload = {
        "full_name": "John Doe",
        "email": "not-an-email",
        "subject": "Hello Basim",
        "message": "This should fail because the email has no domain."
    }

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422


def test_contact_submission_missing_fields(client):
    """Verify that payload with missing fields is rejected with 422."""
    payload = {
        "full_name": "John Doe"
        # missing email, subject, message
    }

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422


def test_contact_submission_honeypot_trap(client):
    """Verify that automated bots populating the hidden website field are rejected with 400."""
    payload = {
        "full_name": "Spam Bot",
        "email": "bot@spammer.com",
        "subject": "Buy cheap stuff",
        "message": "Spam content message text here.",
        "website": "http://spamsite.xyz"  # Honeypot filled
    }

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 400
    assert "Submission could not be processed" in response.json()["detail"]


def test_contact_submission_empty_strings(client):
    """Verify that whitespace-only strings fail validation with 422."""
    payload = {
        "full_name": "   ",
        "email": "user@example.com",
        "subject": "Valid Subject",
        "message": "Valid message with more than 10 characters."
    }

    response = client.post("/api/contact", json=payload)
    assert response.status_code == 422
