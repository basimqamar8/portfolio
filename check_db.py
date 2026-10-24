"""Utility script to inspect the portfolio SQLite database."""
import sqlite3
import os
from datetime import datetime

DB_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), "portfolio.db")

def check_database():
    if not os.path.exists(DB_PATH):
        print(f"[!] Database file not found at: {DB_PATH}")
        print("    Submit a contact form from http://localhost:5173 to create records.")
        return

    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()

    try:
        cursor.execute("SELECT name FROM sqlite_master WHERE type='table';")
        tables = [t[0] for t in cursor.fetchall()]
        print("=" * 70)
        print(f"DATABASE: {DB_PATH}")
        print(f"TABLES FOUND: {', '.join(tables)}")
        print("=" * 70)

        if "contact_submissions" in tables:
            cursor.execute("SELECT id, full_name, email, subject, message, created_at FROM contact_submissions ORDER BY id DESC")
            rows = cursor.fetchall()
            
            print(f"\nTOTAL CONTACT SUBMISSIONS: {len(rows)}\n")
            if not rows:
                print("No submissions recorded yet.")
            else:
                for row in rows:
                    sub_id, name, email, subject, msg, created = row
                    print(f"--- [ID #{sub_id}] Received: {created} ---")
                    print(f"  Name:    {name}")
                    print(f"  Email:   {email}")
                    print(f"  Subject: {subject}")
                    print(f"  Message: {msg}")
                    print("-" * 70)
    except Exception as e:
        print(f"[Error querying database]: {e}")
    finally:
        conn.close()

if __name__ == "__main__":
    check_database()
