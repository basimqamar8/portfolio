import React, { useEffect } from 'react';
import { X, Award, ExternalLink, Calendar, Building, Sparkles } from 'lucide-react';

/**
 * CertificateModal Component
 * Accessible, high-resolution click-to-enlarge lightbox for the DevelopersHub Corporation Certificate of Achievement.
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
        backgroundColor: 'rgba(5, 7, 12, 0.92)',
        backdropFilter: 'blur(10px)',
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
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg), 0 0 40px rgba(0, 242, 254, 0.15)',
        }}
      >
        {/* Header bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(7, 9, 14, 0.95)',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#fbbf24',
                backgroundColor: 'rgba(251, 191, 36, 0.12)',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                border: '1px solid rgba(251, 191, 36, 0.3)',
              }}
            >
              <Award size={13} />
              Best Award Emblem
            </span>
            <span style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              Certificate of Achievement &bull; DevelopersHub Corporation
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid var(--border-subtle)',
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
            <X size={18} />
          </button>
        </div>

        {/* Certificate High-Res Image View */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            backgroundColor: '#05070c',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
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
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.6)',
              display: 'block',
            }}
          />
        </div>

        {/* Footer Meta Details */}
        <div
          style={{
            padding: '1rem 1.5rem',
            backgroundColor: 'rgba(7, 9, 14, 0.95)',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '0.75rem',
          }}
        >
          <div className="font-mono" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
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
