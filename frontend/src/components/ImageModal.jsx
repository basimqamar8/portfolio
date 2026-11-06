import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * ImageModal Component
 * Accessible, clean lightbox for previewing project screenshots in high resolution.
 * Minimal black matte aesthetic.
 */
export default function ImageModal({ isOpen, onClose, src, alt, caption }) {
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
        backgroundColor: 'rgba(0, 0, 0, 0.94)',
        backdropFilter: 'blur(12px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          maxWidth: '920px',
          width: '100%',
          maxHeight: '90vh',
          backgroundColor: '#0c0c0c',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.12)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0, 0, 0, 0.9)',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close image preview"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'rgba(20, 20, 20, 0.8)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#ffffff',
            borderRadius: '6px',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            transition: 'all var(--transition-fast)',
          }}
        >
          <X size={18} />
        </button>

        <div style={{ overflow: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#050505', padding: '1rem' }}>
          <img
            src={src}
            alt={alt || 'Enlarged preview'}
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              display: 'block',
              borderRadius: '8px',
            }}
          />
        </div>

        {caption && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', background: '#080808' }}>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.88rem' }}>{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
