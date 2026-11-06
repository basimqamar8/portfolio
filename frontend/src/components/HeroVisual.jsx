import React, { useRef, useState } from 'react';
import { MapPin } from 'lucide-react';

/**
 * HeroVisual Component
 * Minimalist, elegant portrait presentation of Basim Qamar.
 * Features an architectural dark-matte frame with interactive 3D spatial tilt.
 */
export default function HeroVisual() {
  const cardRef = useRef(null);
  const [tiltStyle, setTiltStyle] = useState({});

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const normX = (x - centerX) / centerX;
    const normY = (y - centerY) / centerY;

    // Elegant subtle 3D tilt: max 6 degrees
    const rotX = -normY * 6;
    const rotY = normX * 6;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.015, 1.015, 1.015)`,
      transition: 'transform 0.08s ease-out',
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    });
  };

  return (
    <div
      className="hero-portrait-container"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cardRef}
        className="hero-portrait-card card-3d-depth"
        style={tiltStyle}
      >
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
