import React, { useState } from 'react';
import { Github, ArrowRight, Scan, Layers, Smartphone, Globe } from 'lucide-react';
import Button from './Button';

/**
 * ProjectCard Component
 * Refined, professional project showcase for AgroVision.
 * Features clean segment switcher tabs and verified project metadata.
 */
export default function ProjectCard({
  title = "AgroVision",
  subtitle = "AI-Powered Pest Detection & Digital Twin Farm Monitoring",
  description = "AgroVision is an AI-powered agricultural platform designed to help farmers identify crop pests and diseases from smartphone images and monitor the historical health of farm plots through a Digital Twin system. The platform combines computer vision, explainable AI visualizations, farm monitoring, weather information, live video, chatbot guidance, and reporting functionality in a single web-based system.",
  tags = [
    "YOLOv8 Localization",
    "EfficientNetB0 Classifier",
    "Grad-CAM Heatmaps",
    "React Native 0.76.7",
    "Expo SDK 52",
    "Three.js Digital Twin",
    "FastAPI / Python",
    "PostgreSQL (Neon)"
  ],
  githubUrl = "https://github.com/basimqamar8/AgroVision",
  demoUrl = "https://agrovision-bice.vercel.app/",
  detailsUrl = "/about#agrovision"
}) {
  const screens = [
    {
      id: 'leaf',
      label: 'Disease Detection',
      icon: Scan,
      src: '/assets/agrovision/leaf detection.jpeg',
      badge: 'YOLOv8 + EfficientNetB0',
      caption: 'Smartphone-based leaf disease localization & classification'
    },
    {
      id: 'twin',
      label: '3D Digital Twin',
      icon: Layers,
      src: '/assets/agrovision/Digital Twin.jpeg',
      badge: 'Three.js 3D Engine',
      caption: 'Interactive spatial plot map & longitudinal disease tracking'
    },
    {
      id: 'mobile',
      label: 'Mobile Application',
      icon: Smartphone,
      src: '/assets/agrovision/Dashboard.jpeg',
      badge: 'React Native 0.76.7',
      caption: 'Field-tested farmer dashboard built with Expo SDK 52'
    }
  ];

  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const activeScreen = screens[activeScreenIndex];

  return (
    <div
      className="project-card"
      style={{
        backgroundColor: '#0c0c0c',
        border: '1px solid rgba(255, 255, 255, 0.09)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'all var(--transition-normal)',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'stretch' }}>
        
        {/* Left Column: Clean Interactive Showcase */}
        <div
          style={{
            position: 'relative',
            minHeight: '380px',
            backgroundColor: '#070707',
            borderRight: '1px solid rgba(255, 255, 255, 0.07)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top segment control tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.85rem 1rem',
              backgroundColor: '#0a0a0a',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
              zIndex: 10,
              gap: '0.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '0.35rem', overflowX: 'auto' }}>
              {screens.map((s, idx) => {
                const Icon = s.icon;
                const isActive = idx === activeScreenIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveScreenIndex(idx)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isActive ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid transparent',
                      backgroundColor: isActive ? '#1c1c1c' : 'transparent',
                      color: isActive ? '#ffffff' : 'var(--text-muted)',
                      transition: 'all var(--transition-fast)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <Icon size={13} />
                    <span>{s.label}</span>
                  </button>
                );
              })}
            </div>

            <span className="badge badge-minimal font-mono" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>
              {activeScreen.badge}
            </span>
          </div>

          {/* Visual Container */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: '#050505',
              padding: '1.25rem',
            }}
          >
            <img
              key={activeScreen.src}
              src={activeScreen.src}
              alt={activeScreen.caption}
              style={{
                maxWidth: '100%',
                maxHeight: '340px',
                objectFit: 'contain',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'block',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7)',
                transition: 'opacity 0.25s ease',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            {/* Bottom Caption Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '14px',
                right: '14px',
                padding: '0.4rem 0.75rem',
                backgroundColor: 'rgba(10, 10, 10, 0.92)',
                backdropFilter: 'blur(8px)',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                fontSize: '0.74rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                zIndex: 8,
              }}
            >
              {activeScreen.caption}
            </div>
          </div>
        </div>

        {/* Right Column: Project Details Content */}
        <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-minimal font-mono" style={{ fontSize: '0.72rem' }}>
                Capstone 2 &bull; BSCS 2023–2027
              </span>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  transition: 'all var(--transition-fast)',
                }}
                className="live-platform-pill"
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--status-active)' }}></span>
                <span>Live Deployed Platform</span>
              </a>
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem', letterSpacing: '-0.02em' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1.25rem', fontWeight: 500 }}>
              {subtitle}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              {description}
            </p>

            {/* Technologies */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono"
                  style={{
                    fontSize: '0.76rem',
                    padding: '0.25rem 0.6rem',
                    backgroundColor: '#121212',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--text-secondary)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Action Buttons: Live Demo, Details, GitHub */}
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.07)' }}>
            <Button
              href={demoUrl}
              variant="primary"
              size="sm"
              external={true}
              icon={Globe}
              iconPosition="left"
            >
              Launch Live Platform
            </Button>

            <Button
              to={detailsUrl}
              variant="secondary"
              size="sm"
              icon={ArrowRight}
              iconPosition="right"
            >
              Project Details
            </Button>

            <Button
              href={githubUrl}
              variant="outline"
              size="sm"
              external={true}
              icon={Github}
            >
              View GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
