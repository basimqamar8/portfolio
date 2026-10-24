"""Application settings and environment configuration."""
import os
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    ENVIRONMENT: str = "development"
    APP_NAME: str = "Basim Qamar Portfolio API"
    DEBUG: bool = False
    DATABASE_URL: str = "sqlite:///./portfolio.db"
    ALLOWED_ORIGINS: str = "http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000"
    MAX_SUBMISSIONS_PER_HOUR: int = 20

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )

    @property
    def cors_origins(self) -> List[str]:
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]


settings = Settings()
