import React from 'react';

/**
 * SectionHeading Component
 * Provides consistent typography, subtitle, and eyebrow badge for major sections.
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
        marginBottom: '2.75rem',
        textAlign: isCenter ? 'center' : 'left',
      }}
    >
      {eyebrow && (
        <div style={{ marginBottom: '0.75rem' }}>
          <span className="badge badge-cyan" style={{ textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: '0.75rem' }}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
          fontWeight: 800,
          color: 'var(--text-primary)',
          letterSpacing: '-0.025em',
          lineHeight: 1.2,
          marginBottom: subtitle ? '0.85rem' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            maxWidth: isCenter ? '680px' : '720px',
            marginLeft: isCenter ? 'auto' : '0',
            marginRight: isCenter ? 'auto' : '0',
            fontSize: '1.05rem',
            color: 'var(--text-secondary)',
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
