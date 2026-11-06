import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Send, CheckCircle2, AlertCircle, RefreshCw, ExternalLink } from 'lucide-react';
import Button from './Button';

/**
 * ContactForm Component
 * Integrated with Formspree (Form ID: xyeeazgj) for real-time email delivery
 * straight to Basim Qamar's personal inbox (basimqamar8@gmail.com).
 */
export default function ContactForm() {
  const [state, handleFormspreeSubmit, resetFormspree] = useForm('xyeeazgj');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Client-side field validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        if (value.trim().length > 100) return 'Full name must not exceed 100 characters.';
        return '';

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address.';
        if (value.trim().length > 255) return 'Email must not exceed 255 characters.';
        return '';

      case 'subject':
        if (!value.trim()) return 'Subject is required.';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters.';
        if (value.trim().length > 150) return 'Subject must not exceed 150 characters.';
        return '';

      case 'message':
        if (!value.trim()) return 'Message is required.';
        if (value.trim().length < 10) return 'Message must be at least 10 characters long.';
        if (value.trim().length > 5000) return 'Message must not exceed 5000 characters.';
        return '';

      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formErrors = {
      name: validateField('name', formData.name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some((err) => Boolean(err));
    if (hasErrors) return;

    // Submit directly through Formspree
    await handleFormspreeSubmit(e);
  };

  const handleReset = () => {
    resetFormspree();
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div
      className="contact-form-container card-3d-depth"
      style={{
        backgroundColor: '#0c0c0c',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        padding: '2.5rem',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem', letterSpacing: '-0.02em' }}>
          Send a Direct Message
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          Delivered directly to Basim's inbox at <span style={{ color: '#ffffff', fontWeight: 600 }}>basimqamar8@gmail.com</span>.
        </p>
      </div>

      {/* Success Notification Alert */}
      {state.succeeded ? (
        <div
          role="alert"
          style={{
            backgroundColor: 'rgba(34, 197, 94, 0.08)',
            border: '1px solid rgba(34, 197, 94, 0.25)',
            borderRadius: '10px',
            padding: '1.75rem',
            marginBottom: '1rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <CheckCircle2 color="var(--status-active)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#4ade80', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.35rem' }}>
                Message Successfully Delivered!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                Thank you! Your message was sent via Formspree and has arrived in Basim's Gmail inbox. You can expect a response shortly.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button variant="secondary" size="sm" onClick={handleReset} icon={RefreshCw}>
                  Send Another Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <form onSubmit={onSubmit} noValidate>
          {/* Honeypot Spam Field for Formspree */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: 'none' }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Formspree Subject Meta */}
          <input
            type="hidden"
            name="_subject"
            value={formData.subject ? `Portfolio Message: ${formData.subject}` : 'New Portfolio Contact Submission'}
          />

          {/* Formspree Reply-To Meta */}
          <input
            type="hidden"
            name="_replyto"
            value={formData.email}
          />

          {/* Error Alert from Formspree if any */}
          {state.errors && state.errors.getFormErrors().length > 0 && (
            <div
              role="alert"
              style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '10px',
                padding: '1.25rem',
                marginBottom: '1.75rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.85rem' }}>
                <AlertCircle color="var(--error)" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <h4 style={{ color: '#f87171', fontWeight: 700, fontSize: '0.92rem', marginBottom: '0.2rem' }}>
                    Submission Notice
                  </h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                    Could not complete delivery. You can send this message directly to Basim via Gmail below:
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem', paddingLeft: '2rem' }}>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=basimqamar8@gmail.com&su=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`From: ${formData.name || 'Visitor'} (${formData.email || 'N/A'})\n\n${formData.message || ''}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '6px',
                    backgroundColor: '#ffffff',
                    color: '#000000',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                  }}
                >
                  <span>Send Directly via Gmail</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          )}

          {/* Name & Email Fields Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.45rem',
                }}
              >
                Full Name <span style={{ color: 'var(--text-muted)' }}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Sarah Jenkins"
                maxLength={100}
                disabled={state.submitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#080808',
                  border: `1px solid ${errors.name ? 'var(--error)' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  transition: 'border-color var(--transition-fast)',
                }}
              />
              {errors.name && (
                <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                  {errors.name}
                </span>
              )}
              <ValidationError prefix="Name" field="name" errors={state.errors} style={{ color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }} />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.45rem',
                }}
              >
                Email Address <span style={{ color: 'var(--text-muted)' }}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. sarah@example.com"
                maxLength={255}
                disabled={state.submitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  backgroundColor: '#080808',
                  border: `1px solid ${errors.email ? 'var(--error)' : 'rgba(255, 255, 255, 0.1)'}`,
                  color: '#ffffff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.92rem',
                  transition: 'border-color var(--transition-fast)',
                }}
              />
              {errors.email && (
                <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                  {errors.email}
                </span>
              )}
              <ValidationError prefix="Email" field="email" errors={state.errors} style={{ color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }} />
            </div>
          </div>

          {/* Subject Field */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label
              htmlFor="subject"
              style={{
                display: 'block',
                fontSize: '0.86rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.45rem',
              }}
            >
              Subject <span style={{ color: 'var(--text-muted)' }}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. AI Engineering Opportunity"
              maxLength={150}
              disabled={state.submitting}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#080808',
                border: `1px solid ${errors.subject ? 'var(--error)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                transition: 'border-color var(--transition-fast)',
              }}
            />
            {errors.subject && (
              <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                {errors.subject}
              </span>
            )}
            <ValidationError prefix="Subject" field="subject" errors={state.errors} style={{ color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }} />
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: '0.86rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                Message <span style={{ color: 'var(--text-muted)' }}>*</span>
              </label>
              <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                {formData.message.length} / 5000
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Write your inquiry or opportunity details here..."
              maxLength={5000}
              disabled={state.submitting}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: '8px',
                backgroundColor: '#080808',
                border: `1px solid ${errors.message ? 'var(--error)' : 'rgba(255, 255, 255, 0.1)'}`,
                color: '#ffffff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                resize: 'vertical',
                transition: 'border-color var(--transition-fast)',
              }}
            />
            {errors.message && (
              <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }}>
                {errors.message}
              </span>
            )}
            <ValidationError prefix="Message" field="message" errors={state.errors} style={{ color: 'var(--error)', fontSize: '0.78rem', marginTop: '0.35rem' }} />
          </div>

          {/* Form Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p className="font-mono" style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>
              Direct email delivery &bull; Formspree secure
            </p>

            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={state.submitting}
              disabled={state.submitting}
              icon={Send}
              iconPosition="right"
            >
              {state.submitting ? 'Delivering...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
