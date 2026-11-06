import React, { useEffect } from 'react';
import { X, Award, Building, Calendar, Sparkles } from 'lucide-react';

/**
 * CertificateModal Component
 * Accessible, high-resolution click-to-enlarge lightbox for the DevelopersHub Corporation Certificate of Achievement.
 * Minimalist, dark-matte frame with refined typography.
 */
export default function CertificateModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="modal-overlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.92)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '880px',
          width: '100%',
          maxHeight: '92vh',
          backgroundColor: '#0c0c0c',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9)',
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            backgroundColor: '#080808',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.76rem',
                fontWeight: 600,
                color: '#e5c07b',
                backgroundColor: 'rgba(229, 192, 123, 0.08)',
                padding: '0.2rem 0.65rem',
                borderRadius: '6px',
                border: '1px solid rgba(229, 192, 123, 0.25)',
              }}
            >
              <Award size={13} />
              Best Award Emblem
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)' }}>
              Certificate of Achievement &bull; DevelopersHub Corporation
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--text-secondary)',
              cursor: 'pointer',
              borderRadius: '6px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all var(--transition-fast)',
            }}
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate High-Res Image View */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            backgroundColor: '#040404',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
        >
          <img
            src="/assets/developerhub-certificate.png"
            alt="DevelopersHub Corporation Certificate of Achievement — Basim Qamar"
            style={{
              maxWidth: '100%',
              maxHeight: '68vh',
              objectFit: 'contain',
              borderRadius: '8px',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.7)',
              display: 'block',
            }}
          />
        </div>

        {/* Footer Meta Details */}
        <div
          style={{
            padding: '1rem 1.5rem',
            backgroundColor: '#080808',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            Program: Data Science &amp; Analytics &bull; Dates: 11 May 2026 – 22 June 2026
          </div>

          <button
            type="button"
            className="btn btn-secondary btn-sm"
            onClick={onClose}
          >
            Close View
          </button>
        </div>
      </div>
    </div>
  );
}
