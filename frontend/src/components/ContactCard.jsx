import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Copy, Check } from 'lucide-react';

/**
 * ContactCard Component
 * Minimalist dark cards for direct contact channels (Phone, Email, LinkedIn, GitHub).
 * Supports direct web compose (e.g. Gmail), telephone links, and one-click clipboard copying.
 */
export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  description,
  copyable = false,
  copyText = "",
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

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#0c0c0c',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        padding: '1.75rem',
        transition: 'all var(--transition-normal)',
      }}
      className="contact-card hover-lift"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            backgroundColor: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            transition: 'all var(--transition-normal)',
          }}
          className="contact-card-icon"
        >
          {Icon && <Icon size={20} />}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          {copyable && (
            <button
              type="button"
              onClick={handleCopy}
              title="Copy to clipboard"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.25rem 0.6rem',
                borderRadius: '6px',
                backgroundColor: copied ? 'rgba(34, 197, 94, 0.12)' : '#141414',
                border: `1px solid ${copied ? 'rgba(34, 197, 94, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: copied ? 'var(--status-active)' : 'var(--text-muted)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {copied ? <Check size={12} color="var(--status-active)" /> : <Copy size={12} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          )}

          <a
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: '#141414',
              color: 'var(--text-muted)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
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
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            display: 'block',
            marginBottom: '0.35rem',
          }}
        >
          {label}
        </span>
        <h4
          style={{
            fontSize: '1.05rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            wordBreak: 'break-word',
            marginBottom: description ? '0.25rem' : '0',
            letterSpacing: '-0.01em',
          }}
        >
          {value}
        </h4>
        {description && (
          <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
            {description}
          </p>
        )}
      </a>
    </div>
  );
}
