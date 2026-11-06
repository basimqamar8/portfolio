import React from 'react';
import { MapPin } from 'lucide-react';

/**
 * HeroVisual Component
 * Minimalist, elegant portrait presentation of Basim Qamar.
 * Features an architectural dark-matte frame with hairline border and refined metadata.
 */
export default function HeroVisual() {
  return (
    <div className="hero-portrait-container">
      <div className="hero-portrait-card">
        {/* Top Minimal Header */}
        <div className="hero-portrait-header">
          <div className="header-identity">
            <span className="portrait-monogram font-mono">BQ</span>
            <span className="portrait-name">Basim Qamar</span>
          </div>
          <div className="portrait-location font-mono">
            <span className="status-live-dot" title="Active"></span>
            <MapPin size={12} className="loc-icon" />
            <span>Lahore, PK</span>
          </div>
        </div>

        {/* Portrait Image Container */}
        <div className="hero-portrait-image-wrapper">
          <img
            src="/assets/basim.jpeg"
            alt="Basim Qamar — Aspiring AI Engineer"
            className="hero-portrait-photo"
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
          <div className="hero-portrait-shade"></div>
        </div>

        {/* Bottom Minimal Footer Meta */}
        <div className="hero-portrait-footer font-mono">
          <div className="portrait-meta-col">
            <span className="meta-label">Education</span>
            <span className="meta-value">BS Computer Science</span>
          </div>
          <div className="portrait-meta-divider"></div>
          <div className="portrait-meta-col text-right">
            <span className="meta-label">Institution</span>
            <span className="meta-value">Univ. of South Asia</span>
          </div>
        </div>
      </div>
    </div>
  );
}
