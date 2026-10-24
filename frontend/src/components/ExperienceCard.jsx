import React, { useState } from 'react';
import { Building2, Calendar, Award, ExternalLink, ShieldCheck, ZoomIn, Sparkles } from 'lucide-react';
import Button from './Button';
import CertificateModal from './CertificateModal';

/**
 * ExperienceCard Component
 * Displays verified internship details for DevelopersHub Corporation
 * with an interactive preview of the actual Certificate of Achievement.
 */
export default function ExperienceCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="experience-card hover-glow"
        style={{
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-card)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.25rem',
          transition: 'all var(--transition-normal)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          
          {/* Left / Info Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan font-mono">Professional Internship</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  color: '#fbbf24',
                  backgroundColor: 'rgba(251, 191, 36, 0.1)',
                  padding: '0.25rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(251, 191, 36, 0.25)',
                }}
              >
                <Award size={13} />
                Best Award Emblem
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              Data Science &amp; Analytics Intern
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-cyan)', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.85rem' }}>
              <Building2 size={16} />
              <span>DevelopersHub Corporation</span>
            </div>

            <div
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              <Calendar size={14} color="var(--accent-cyan)" />
              <span>11 May 2026 – 22 June 2026 (6 Weeks)</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Completed a six-week internship program in Data Science &amp; Analytics at DevelopersHub Corporation.
              The certificate recognizes my completion of the program and highlights my performance during the internship.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setIsModalOpen(true)}
                icon={ZoomIn}
                iconPosition="left"
              >
                View Certificate of Achievement
              </Button>
            </div>
          </div>

          {/* Right / Certificate Thumbnail Preview Column */}
          <div
            onClick={() => setIsModalOpen(true)}
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              backgroundColor: '#05070d',
              cursor: 'pointer',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
              transition: 'all var(--transition-normal)',
            }}
            className="certificate-preview-thumb group"
          >
            <div style={{ position: 'relative', width: '100%', height: '220px', overflow: 'hidden' }}>
              <img
                src="/assets/developerhub-certificate.png"
                alt="DevelopersHub Corporation Certificate Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transition: 'transform 0.5s ease',
                  display: 'block',
                }}
              />
              
              {/* Subtle Overlay with Enlarge Cue */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(7, 9, 14, 0.2) 0%, rgba(7, 9, 14, 0.85) 100%)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  padding: '1rem',
                  gap: '0.4rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.85rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(0, 242, 254, 0.15)',
                    border: '1px solid var(--accent-cyan)',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(6px)',
                  }}
                >
                  <ZoomIn size={14} color="var(--accent-cyan)" />
                  <span>Click to Enlarge Certificate</span>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '0.65rem 1rem',
                backgroundColor: 'rgba(7, 9, 14, 0.95)',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
              }}
              className="font-mono"
            >
              <span style={{ color: 'var(--text-muted)' }}>ID: DHC-2362</span>
              <span style={{ color: '#fbbf24', fontWeight: 600 }}>Best Award Distinction</span>
            </div>
          </div>

        </div>
      </div>

      <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
