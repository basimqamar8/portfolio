# Basim Qamar — Premium Full-Stack Personal Portfolio

A production-grade personal portfolio website for **Basim Qamar**, final-semester Computer Science student at the University of South Asia and aspiring AI Engineer. Built with **React.js + Vite**, **Python FastAPI**, and a persistent database (**SQLite** for local development, **PostgreSQL / Neon Serverless** for production).

---

## Architecture & Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 18, Vite, React Router v6, Lucide React, HTML5 Canvas Node Visualizer, Responsive Glassmorphism CSS |
| **Backend** | Python 3.11+, FastAPI, Pydantic v2 (Validation & Schemas), SQLAlchemy 2.0 (ORM), Uvicorn ASGI Server |
| **Database** | SQLite (zero-config local persistence), PostgreSQL / Neon Serverless ready via `DATABASE_URL` |
| **Quality & Tests** | Pytest, HTTPX, FastAPI TestClient, Automated Field & Spam Validation |

---

## Project Structure

```
d:\Portfolio/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py              # FastAPI app initialization, CORS, lifespan table creation
│   │   ├── config.py            # Pydantic Settings & environment variables
│   │   ├── database.py          # SQLAlchemy engine, session maker, get_db dependency
│   │   ├── models.py            # ContactSubmission ORM database model
│   │   ├── schemas.py           # Pydantic validation schemas (ContactCreate, HealthResponse)
│   │   └── routes/
│   │       ├── __init__.py
│   │       ├── health.py        # GET /api/health endpoint
│   │       └── contact.py       # POST /api/contact persistence & rate limiting
│   ├── tests/
│   │   ├── __init__.py
│   │   └── test_api.py          # 7 automated tests (isolated SQLite in-memory DB)
│   ├── .env.example             # Backend environment template
│   ├── requirements.txt         # Pinned backend dependencies
│   └── venv/                    # Python virtual environment
├── frontend/
│   ├── public/
│   │   ├── assets/
│   │   │   ├── basim.jpeg       # Verified profile photograph
│   │   │   └── agrovision/      # Authentic FYP system screenshots
│   │   └── favicon.svg          # Portfolio brand icon
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx       # Responsive header with route indicator & mobile drawer
│   │   │   ├── Footer.jsx       # Verified contact links & copyright notice
│   │   │   ├── Button.jsx       # Polymorphic button (primary, secondary, outline, ghost)
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── HeroVisual.jsx   # Interactive AI canvas neural node graph
│   │   │   ├── ProjectCard.jsx  # Selected project showcase card
│   │   │   ├── SkillGroup.jsx   # Organized competency cards (no progress bars)
│   │   │   ├── ExperienceCard.jsx # DeveloperHub internship with modal trigger
│   │   │   ├── CertificateModal.jsx # Certificate of Achievement verification view
│   │   │   ├── ImageModal.jsx   # High-resolution screenshot lightbox
│   │   │   ├── ContactCard.jsx  # Clickable phone, mailto, LinkedIn, GitHub cards
│   │   │   └── ContactForm.jsx  # Client/server validated form with persistence alerts
│   │   ├── pages/
│   │   │   ├── Home.jsx         # Hero, selected AgroVision preview, internship highlight
│   │   │   ├── About.jsx        # Biography, education, skills, DeveloperHub, AgroVision deep dive
│   │   │   └── Contact.jsx      # Verified channels, live backend health check, contact form
│   │   ├── services/
│   │   │   └── api.js           # Centralized fetch API client with error parsing
│   │   ├── styles/
│   │   │   ├── index.css        # Design tokens, variables, typography, reset
│   │   │   ├── Navbar.css
│   │   │   ├── Footer.css
│   │   │   ├── Home.css
│   │   │   ├── About.css
│   │   │   └── Contact.css
│   │   ├── App.jsx              # Router configuration (Home, About, Contact)
│   │   └── main.jsx
│   ├── .env.example             # Frontend environment template
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── .gitignore
└── README.md
```

---

## Prerequisites

Before running the application, make sure you have installed:
- **Python**: version 3.10 or higher (`python --version`)
- **Node.js**: version 18 or higher (`node -v`)
- **npm**: version 9 or higher (`npm -v`)

---

## Quick Start (Local Development)

### 1. Backend Setup (FastAPI & Database)

Open a terminal or PowerShell in the project root:

```powershell
# Navigate to backend directory
cd backend

# Create Python virtual environment (if not already created)
python -m venv venv

# Activate virtual environment
# On Windows PowerShell:
.\venv\Scripts\Activate.ps1
# On Windows Command Prompt (CMD):
venv\Scripts\activate.bat
# On macOS / Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Create your local environment file
Copy-Item .env.example .env    # PowerShell
# or: copy .env.example .env   # Command Prompt

# Start the FastAPI server with auto-reload
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

The FastAPI backend will now be running at:
- **API Base**: `http://127.0.0.1:8000`
- **Interactive Swagger Documentation**: `http://127.0.0.1:8000/docs`
- **Health Check Endpoint**: `http://127.0.0.1:8000/api/health`

### 2. Frontend Setup (React.js + Vite)

Open a second terminal window:

```powershell
# Navigate to frontend directory
cd frontend

# Install npm dependencies
npm install

# Create your local environment file
Copy-Item .env.example .env    # PowerShell
# or: copy .env.example .env   # Command Prompt

# Start the Vite development server
npm run dev
```

The React frontend will start at:
- **Web Application**: `http://localhost:5173`

The development server automatically proxies API requests (`/api/*`) to `http://127.0.0.1:8000`.

---

## Running Backend Automated Tests

The backend includes a comprehensive test suite using `pytest` and `fastapi.testclient`:

```powershell
cd backend
.\venv\Scripts\Activate.ps1
pytest tests -v
```

### Verified Test Cases:
1. `test_health_check`: Verifies `GET /api/health` returns status `200` with status `"ok"` and app identity.
2. `test_root_endpoint`: Verifies service metadata and status.
3. `test_contact_submission_success`: Submits valid contact form data, asserts HTTP `201`, validates returned payload, and queries the database session to confirm full persistence.
4. `test_contact_submission_invalid_email`: Verifies malformed emails are rejected with HTTP `422`.
5. `test_contact_submission_missing_fields`: Verifies missing required inputs are rejected with HTTP `422`.
6. `test_contact_submission_honeypot_trap`: Verifies automated bot submissions populating the hidden `website` trap are blocked with HTTP `400`.
7. `test_contact_submission_empty_strings`: Rejects whitespace-only entries with HTTP `422`.

---

## Database Configuration

### Local Development (Default: SQLite)
No setup required. The application automatically creates `portfolio.db` inside the backend directory on startup and initializes the `contact_submissions` table.

### Production (PostgreSQL / Neon Serverless)
To connect to a managed PostgreSQL instance (e.g. Neon Serverless):
1. In `backend/.env`, set:
   ```env
   DATABASE_URL=postgresql://username:password@ep-cool-sample.us-east-2.aws.neon.tech/neondb?sslmode=require
   ```
2. Install psycopg2 or asyncpg:
   ```bash
   pip install psycopg2-binary
   ```
3. On application startup, SQLAlchemy creates the required schema automatically.

---

## Contact Form & Security Measures

- **Client-Side Validation**: Immediate feedback on email RFC format, minimum string lengths, and maximum boundary checks.
- **Backend-Side Pydantic Validation**: Strict typing, whitespace trimming, and email regex pattern enforcement.
- **Honeypot Trap**: Invisible field `website` embedded in form; if filled by an automated bot crawler, the request is rejected immediately with HTTP 400.
- **Abuse Prevention**: Built-in rate limiting restricts maximum submissions per IP address within an hourly window.
- **Data Protection**: No public endpoints exist that expose or enumerate visitor submissions. All queries use parameterized ORM statements preventing SQL injection.

---

## Production Deployment Guide

### Frontend Deployment (Vercel / Netlify / Cloudflare Pages)
1. Build the production bundle:
   ```bash
   cd frontend
   npm run build
   ```
2. The compiled assets are placed in `frontend/dist/`.
3. Set the environment variable in your hosting provider:
   ```env
   VITE_API_BASE_URL=https://your-backend-api.example.com
   ```

### Backend Deployment (Render / Railway / DigitalOcean / AWS)
1. Set the production environment variables:
   ```env
   ENVIRONMENT=production
   ALLOWED_ORIGINS=https://your-portfolio-domain.com
   DATABASE_URL=postgresql://...
   ```
2. Command to start the production server:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --port $PORT --workers 4
   ```

---

## Verified Contact Details

- **Full Name**: Basim Qamar
- **University**: University of South Asia (BSCS, Final Semester)
- **Role Goal**: AI Engineer
- **Phone**: [+92 3003162564](tel:+923003162564)
- **Email**: [basimqamar8@gmail.com](mailto:basimqamar8@gmail.com)
- **LinkedIn**: [https://www.linkedin.com/in/basim-qamar-12160b2a4/](https://www.linkedin.com/in/basim-qamar-12160b2a4/)
- **AgroVision Live Platform**: [https://agrovision-bice.vercel.app/](https://agrovision-bice.vercel.app/)
- **AgroVision Repository**: [https://github.com/basimqamar8/AgroVision](https://github.com/basimqamar8/AgroVision)
