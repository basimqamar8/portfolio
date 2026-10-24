import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight, Copy, Check } from 'lucide-react';

/**
 * ContactCard Component
 * Interactive cards for direct contact channels (Phone, Email, LinkedIn, GitHub).
 * Supports direct web compose (e.g. Gmail), telephone links, and one-click clipboard copying.
 */
export default function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external = false,
  description,
  accentColor = "var(--accent-cyan)",
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
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        transition: 'all var(--transition-normal)',
      }}
      className="contact-card hover-lift"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: accentColor,
            transition: 'all var(--transition-normal)',
          }}
          className="contact-card-icon"
        >
          {Icon && <Icon size={22} />}
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
                padding: '0.3rem 0.65rem',
                borderRadius: '6px',
                backgroundColor: copied ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                border: `1px solid ${copied ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-subtle)'}`,
                color: copied ? 'var(--success)' : 'var(--text-muted)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all var(--transition-fast)',
              }}
            >
              {copied ? <Check size={13} color="var(--success)" /> : <Copy size={13} />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
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
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              color: 'var(--text-muted)',
              border: '1px solid var(--border-subtle)',
              transition: 'all var(--transition-fast)',
            }}
            title="Open link"
          >
            {external ? <ExternalLink size={15} /> : <ArrowUpRight size={15} />}
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
            fontSize: '0.78rem',
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
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-primary)',
            wordBreak: 'break-word',
            marginBottom: description ? '0.25rem' : '0',
          }}
        >
          {value}
        </h4>
        {description && (
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            {description}
          </p>
        )}
      </a>
    </div>
  );
}
