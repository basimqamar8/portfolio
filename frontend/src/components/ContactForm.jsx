import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';
import Button from './Button';
import { submitContact } from '../services/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    subject: '',
    message: '',
    website: '', // Honeypot field (hidden from humans)
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState({
    status: 'idle', // 'idle' | 'loading' | 'success' | 'error'
    message: '',
    submissionId: null,
  });

  // Client-side field validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'full_name':
        if (!value.trim()) return 'Full name is required.';
        if (value.trim().length < 2) return 'Full name must be at least 2 characters.';
        if (value.trim().length > 100) return 'Full name must not exceed 100 characters.';
        return '';

      case 'email':
        if (!value.trim()) return 'Email address is required.';
        const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address (e.g. name@domain.com).';
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

    // Real-time error clearance
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const fieldError = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: fieldError }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Validate all fields
    const formErrors = {
      full_name: validateField('full_name', formData.full_name),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message),
    };

    setErrors(formErrors);

    const hasErrors = Object.values(formErrors).some((err) => Boolean(err));
    if (hasErrors) {
      return;
    }

    // 2. Prevent accidental repeated clicks
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSubmissionState({ status: 'loading', message: '', submissionId: null });

    try {
      // 3. Make real POST request to FastAPI backend
      const response = await submitContact(formData);

      // 4. Update success status strictly after backend confirmation
      setSubmissionState({
        status: 'success',
        message: response.message || 'Your message was successfully persisted to the database!',
        submissionId: response.submission_id,
      });

      // Clear inputs upon confirmed persistence
      setFormData({
        full_name: '',
        email: '',
        subject: '',
        message: '',
        website: '',
      });
      setErrors({});
    } catch (err) {
      setSubmissionState({
        status: 'error',
        message: err.message || 'Failed to submit message. Please ensure the backend server is running.',
        submissionId: null,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmissionState({ status: 'idle', message: '', submissionId: null });
    setErrors({});
  };

  return (
    <div
      className="contact-form-container"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '2.5rem',
        boxShadow: 'var(--shadow-md)',
      }}
    >
      <div style={{ marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
          Send a Direct Message
        </h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
          Submissions are validated, securely processed, and persisted to the SQLite/PostgreSQL database backend.
        </p>
      </div>

      {/* Success Notification Alert */}
      {submissionState.status === 'success' && (
        <div
          role="alert"
          style={{
            backgroundColor: 'var(--success-bg)',
            border: '1px solid rgba(16, 185, 129, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
            <CheckCircle2 color="var(--success)" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ flex: 1 }}>
              <h4 style={{ color: '#34d399', fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem' }}>
                Message Successfully Persisted!
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                {submissionState.message}
              </p>
              {submissionState.submissionId && (
                <span
                  className="font-mono"
                  style={{
                    display: 'inline-block',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    backgroundColor: 'rgba(0, 0, 0, 0.25)',
                    padding: '0.25rem 0.6rem',
                    borderRadius: '4px',
                  }}
                >
                  Database Record ID: #{submissionState.submissionId}
                </span>
              )}
            </div>
          </div>
          <div style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outline" size="sm" onClick={handleReset} icon={RefreshCw}>
              Send Another Inquiry
            </Button>
          </div>
        </div>
      )}

      {/* Error Alert */}
      {submissionState.status === 'error' && (
        <div
          role="alert"
          style={{
            backgroundColor: 'var(--error-bg)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: 'var(--radius-md)',
            padding: '1.25rem',
            marginBottom: '1.75rem',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.75rem',
          }}
        >
          <AlertCircle color="var(--error)" size={22} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <h4 style={{ color: '#f87171', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
              Submission Error
            </h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
              {submissionState.message}
            </p>
          </div>
        </div>
      )}

      {submissionState.status !== 'success' && (
        <form onSubmit={handleSubmit} noValidate>
          {/* Honeypot Spam Field (Hidden from real users, caught if bots fill it) */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website">Leave this field blank</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website}
              onChange={handleChange}
            />
          </div>

          {/* Full Name & Email Fields Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
            {/* Full Name */}
            <div>
              <label
                htmlFor="full_name"
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.45rem',
                }}
              >
                Full Name <span style={{ color: 'var(--accent-cyan)' }}>*</span>
              </label>
              <input
                type="text"
                id="full_name"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="e.g. Sarah Jenkins"
                maxLength={100}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: `1px solid ${errors.full_name ? 'var(--error)' : 'var(--border-subtle)'}`,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  transition: 'border-color var(--transition-fast)',
                }}
              />
              {errors.full_name && (
                <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                  {errors.full_name}
                </span>
              )}
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '0.45rem',
                }}
              >
                Email Address <span style={{ color: 'var(--accent-cyan)' }}>*</span>
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
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  border: `1px solid ${errors.email ? 'var(--error)' : 'var(--border-subtle)'}`,
                  color: 'var(--text-primary)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.95rem',
                  transition: 'border-color var(--transition-fast)',
                }}
              />
              {errors.email && (
                <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Subject Field */}
          <div style={{ marginBottom: '1.25rem' }}>
            <label
              htmlFor="subject"
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginBottom: '0.45rem',
              }}
            >
              Subject <span style={{ color: 'var(--accent-cyan)' }}>*</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="e.g. AI Engineering Opportunity / AgroVision Feedback"
              maxLength={150}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: `1px solid ${errors.subject ? 'var(--error)' : 'var(--border-subtle)'}`,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                transition: 'border-color var(--transition-fast)',
              }}
            />
            {errors.subject && (
              <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                {errors.subject}
              </span>
            )}
          </div>

          {/* Message Field */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.45rem' }}>
              <label
                htmlFor="message"
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                }}
              >
                Message <span style={{ color: 'var(--accent-cyan)' }}>*</span>
              </label>
              <span className="font-mono" style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
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
              placeholder="Please write your inquiry or opportunity details here..."
              maxLength={5000}
              disabled={isSubmitting}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                border: `1px solid ${errors.message ? 'var(--error)' : 'var(--border-subtle)'}`,
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
                resize: 'vertical',
                transition: 'border-color var(--transition-fast)',
              }}
            />
            {errors.message && (
              <span style={{ display: 'block', color: 'var(--error)', fontSize: '0.8rem', marginTop: '0.35rem' }}>
                {errors.message}
              </span>
            )}
          </div>

          {/* Form Actions */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <p className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              Protected with rate-limiting &amp; spam mitigation.
            </p>

            <Button
              type="submit"
              variant="primary"
              size="md"
              loading={isSubmitting}
              disabled={isSubmitting}
              icon={Send}
              iconPosition="right"
            >
              {isSubmitting ? 'Sending to Database...' : 'Send Message'}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
