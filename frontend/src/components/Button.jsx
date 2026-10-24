import React from 'react';
import { Link } from 'react-router-dom';
import { Loader2 } from 'lucide-react';

/**
 * Reusable polymorphic Button component.
 * Supports primary, secondary, outline, and ghost variants.
 */
export default function Button({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'ghost'
  size = 'md',        // 'sm' | 'md' | 'lg'
  to,
  href,
  onClick,
  type = 'button',
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = 'left',
  className = '',
  external = false,
  ...props
}) {
  const baseClasses = `btn btn-${variant} btn-${size} ${loading ? 'btn-loading' : ''} ${className}`;

  const content = (
    <>
      {loading ? (
        <Loader2 className="btn-spinner animate-spin" size={size === 'sm' ? 14 : 18} />
      ) : (
        Icon && iconPosition === 'left' && <Icon className="btn-icon btn-icon-left" size={size === 'sm' ? 15 : 18} />
      )}
      <span className="btn-text">{children}</span>
      {!loading && Icon && iconPosition === 'right' && (
        <Icon className="btn-icon btn-icon-right" size={size === 'sm' ? 15 : 18} />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={baseClasses} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={baseClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {content}
    </button>
  );
}
