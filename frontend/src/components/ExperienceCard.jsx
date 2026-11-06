import React, { useState } from 'react';
import { Building2, Calendar, Award, ZoomIn } from 'lucide-react';
import Button from './Button';
import CertificateModal from './CertificateModal';

/**
 * ExperienceCard Component
 * Displays verified internship details for DevelopersHub Corporation
 * with an interactive preview of the Certificate of Achievement.
 */
export default function ExperienceCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="experience-card"
        style={{
          backgroundColor: '#0c0c0c',
          border: '1px solid rgba(255, 255, 255, 0.09)',
          borderRadius: '16px',
          padding: '2.25rem',
          transition: 'all var(--transition-normal)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.25rem', alignItems: 'center' }}>
          
          {/* Left / Info Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
              <span className="badge badge-minimal font-mono">Professional Internship</span>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  fontSize: '0.76rem',
                  fontWeight: 600,
                  color: '#e5c07b',
                  backgroundColor: 'rgba(229, 192, 123, 0.08)',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid rgba(229, 192, 123, 0.2)',
                }}
              >
                <Award size={13} />
                Best Award Distinction
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
              Data Science &amp; Analytics Intern
            </h3>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#ffffff', fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.85rem' }}>
              <Building2 size={15} color="var(--text-muted)" />
              <span>DevelopersHub Corporation</span>
            </div>

            <div
              className="font-mono"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.45rem',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                padding: '0.3rem 0.7rem',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1.25rem',
              }}
            >
              <Calendar size={13} />
              <span>11 May 2026 – 22 June 2026 (6 Weeks)</span>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
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
              borderRadius: '10px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backgroundColor: '#070707',
              cursor: 'pointer',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6)',
              transition: 'all var(--transition-normal)',
            }}
            className="certificate-preview-thumb hover-lift"
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
                  transition: 'transform 0.4s ease',
                  display: 'block',
                }}
              />
              
              {/* Subtle Minimal Overlay with Enlarge Cue */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flexDirection: 'column',
                  padding: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: '#161616',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    color: '#ffffff',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                  }}
                >
                  <ZoomIn size={13} />
                  <span>Click to Enlarge</span>
                </div>
              </div>
            </div>

            <div
              style={{
                padding: '0.65rem 1rem',
                backgroundColor: '#0a0a0a',
                borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.74rem',
              }}
              className="font-mono"
            >
              <span style={{ color: 'var(--text-muted)' }}>ID: DHC-2362</span>
              <span style={{ color: '#e5c07b', fontWeight: 600 }}>Best Award Emblem</span>
            </div>
          </div>

        </div>
      </div>

      <CertificateModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
