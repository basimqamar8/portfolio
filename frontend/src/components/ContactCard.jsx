import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Copy, Check } from 'lucide-react';

/**
 * ContactCard Component
 * Versatile dark card supporting both prominent channels (Email, Phone)
 * and compact profile links (LinkedIn, GitHub, Web Platforms).
 */
export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  description,
  copyable = false,
  copyText = '',
  variant = 'prominent', // 'prominent' | 'compact'
  badgeText = '',
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy = copyText || value;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Compact variant for 2x2 profile link grid
  if (variant === 'compact') {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className="contact-card-compact card-3d-depth"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem 1.15rem',
          backgroundColor: '#0a0a0a',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '10px',
          textDecoration: 'none',
          color: 'inherit',
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              flexShrink: 0,
            }}
          >
            {Icon && <Icon size={18} />}
          </div>
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
              }}
            >
              {label}
            </span>
            <span
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: '#ffffff',
                display: 'block',
              }}
            >
              {value}
            </span>
          </div>
        </div>

        <div
          style={{
            color: 'var(--text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            borderRadius: '6px',
            backgroundColor: '#121212',
            border: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          {external ? <ExternalLink size={13} /> : <ArrowUpRight size={13} />}
        </div>
      </a>
    );
  }

  // Prominent variant for primary direct channels (Email, Phone)
  return (
    <div
      className="contact-card-prominent card-3d-depth"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0c0c0c',
        border: '1px solid rgba(255, 255, 255, 0.09)',
        borderRadius: '14px',
        padding: '1.45rem',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#141414',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            {Icon && <Icon size={20} />}
          </div>
          <div>
            <span
              className="font-mono"
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'block',
              }}
            >
              {label}
            </span>
            {badgeText && (
              <span
                style={{
                  display: 'inline-block',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  color: '#4ade80',
                  backgroundColor: 'rgba(74, 222, 128, 0.08)',
                  padding: '0.1rem 0.4rem',
                  borderRadius: '4px',
                  border: '1px solid rgba(74, 222, 128, 0.2)',
                  marginTop: '0.15rem',
                }}
              >
                {badgeText}
              </span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          {copyable && (
            <button
              type="button"
              onClick={handleCopy}
              title="Copy to clipboard"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: copied ? 'rgba(34, 197, 94, 0.14)' : '#141414',
                border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.35)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: copied ? '#4ade80' : 'var(--text-secondary)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {copied ? <Check size={12} color="#4ade80" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          )}

          <a
            href={href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#ffffff',
              color: '#000000',
              textDecoration: 'none',
              transition: 'all var(--transition-fast)',
            }}
            title="Open link"
          >
            {external ? <ExternalLink size={14} /> : <ArrowUpRight size={14} />}
          </a>
        </div>
      </div>

      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <h4
          style={{
            fontSize: '1.08rem',
            fontWeight: 700,
            color: '#ffffff',
            wordBreak: 'break-word',
            marginBottom: description ? '0.2rem' : '0',
            letterSpacing: '-0.01em',
          }}
        >
          {value}
        </h4>
        {description && (
          <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            {description}
          </p>
        )}
      </a>
    </div>
  );
}
