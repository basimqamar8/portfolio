import React from 'react';

/**
 * SectionHeading Component
 * Provides clean, minimal typography, subtitle, and badge for major sections.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left' | 'center'
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <div
      className={`section-heading ${isCenter ? 'text-center' : ''} ${className}`}
      style={{
        marginBottom: '2.5rem',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.65rem' }}>
          <span
            className="badge badge-minimal font-mono"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '0.2rem 0.6rem',
            }}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.2vw, 2.35rem)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          lineHeight: 1.25,
          marginBottom: subtitle ? '0.75rem' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            maxWidth: isCenter ? '640px' : '680px',
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
