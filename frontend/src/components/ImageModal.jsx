import React, { useEffect } from 'react';
import { X } from 'lucide-react';

/**
 * ImageModal Component
 * Accessible, clean lightbox for previewing project screenshots and diagrams in high resolution.
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
        backgroundColor: 'rgba(5, 7, 12, 0.88)',
        backdropFilter: 'blur(8px)',
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
          maxHeight: '90vh',
          backgroundColor: 'var(--bg-card)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--border-card)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: 'var(--shadow-lg)',
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
            background: 'rgba(0, 0, 0, 0.6)',
            border: '1px solid var(--border-subtle)',
            color: '#ffffff',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
          }}
        >
          <X size={20} />
        </button>

        <div style={{ overflow: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#05070a' }}>
          <img
            src={src}
            alt={alt || 'Enlarged preview'}
            style={{
              maxWidth: '100%',
              maxHeight: '75vh',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </div>

        {caption && (
          <div style={{ padding: '1rem 1.5rem', borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-card)' }}>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{caption}</p>
          </div>
        )}
      </div>
    </div>
  );
}
