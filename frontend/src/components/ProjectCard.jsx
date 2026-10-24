import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Github, ArrowRight, Scan, Layers, Smartphone, ExternalLink, Globe } from 'lucide-react';
import Button from './Button';

/**
 * ProjectCard Component
 * High-tech animated project showcase for AgroVision.
 * Features an interactive screen switcher, an AI scanning beam animation,
 * and direct links to the Live Deployed Platform & GitHub repository.
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
      label: 'AI Leaf Detection',
      icon: Scan,
      src: '/assets/agrovision/leaf detection.jpeg',
      badge: 'YOLOv8 + EfficientNetB0',
      caption: 'Smartphone-based leaf disease localization & classification'
    },
    {
      id: 'twin',
      label: 'Digital Twin 3D',
      icon: Layers,
      src: '/assets/agrovision/Digital Twin.jpeg',
      badge: 'Three.js 3D Engine',
      caption: 'Interactive spatial plot map & longitudinal disease tracking'
    },
    {
      id: 'mobile',
      label: 'Mobile Cockpit',
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
      className="project-card hover-glow"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        transition: 'all var(--transition-normal)',
        boxShadow: 'var(--shadow-lg), 0 0 30px rgba(0, 242, 254, 0.08)',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', alignItems: 'stretch' }}>
        
        {/* Left Column: Interactive AI Scanning Showcase */}
        <div
          style={{
            position: 'relative',
            minHeight: '380px',
            backgroundColor: '#05070d',
            borderRight: '1px solid var(--border-subtle)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Top screen switcher tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem 1rem',
              backgroundColor: 'rgba(7, 9, 14, 0.9)',
              borderBottom: '1px solid var(--border-subtle)',
              zIndex: 10,
              gap: '0.4rem',
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
                      gap: '0.35rem',
                      padding: '0.35rem 0.65rem',
                      borderRadius: '6px',
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      cursor: 'pointer',
                      border: isActive ? '1px solid var(--accent-cyan)' : '1px solid transparent',
                      backgroundColor: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
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

            <span className="badge badge-cyan font-mono" style={{ fontSize: '0.68rem', padding: '0.2rem 0.5rem' }}>
              {activeScreen.badge}
            </span>
          </div>

          {/* Visual Container with Scanning Laser Animation */}
          <div
            style={{
              position: 'relative',
              flex: 1,
              minHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              background: '#04060a',
            }}
          >
            <img
              key={activeScreen.src}
              src={activeScreen.src}
              alt={activeScreen.caption}
              style={{
                width: '100%',
                height: '100%',
                maxHeight: '360px',
                objectFit: 'contain',
                display: 'block',
                transition: 'opacity 0.3s ease',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />

            {/* AI Scanning Beam Line */}
            {activeScreen.id === 'leaf' && (
              <>
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    width: '100%',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent 0%, rgba(0, 242, 254, 0.9) 50%, transparent 100%)',
                    boxShadow: '0 0 12px var(--accent-cyan), 0 0 24px var(--accent-cyan)',
                    animation: 'aiScan 3s ease-in-out infinite',
                    pointerEvents: 'none',
                    zIndex: 5,
                  }}
                />
                
                {/* Floating YOLOv8 Detection Reticle Box */}
                <div
                  style={{
                    position: 'absolute',
                    top: '28%',
                    left: '26%',
                    width: '48%',
                    height: '42%',
                    border: '1.5px dashed rgba(0, 242, 254, 0.75)',
                    borderRadius: '8px',
                    boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)',
                    pointerEvents: 'none',
                    zIndex: 6,
                    animation: 'reticlePulse 4s ease-in-out infinite',
                  }}
                >
                  <span
                    className="font-mono"
                    style={{
                      position: 'absolute',
                      top: '-18px',
                      left: '4px',
                      backgroundColor: 'rgba(0, 242, 254, 0.95)',
                      color: '#05070d',
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '0.1rem 0.4rem',
                      borderRadius: '3px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
                    }}
                  >
                    YOLOv8 // Early Blight 94.2%
                  </span>
                </div>
              </>
            )}

            {/* Bottom Caption Pill */}
            <div
              style={{
                position: 'absolute',
                bottom: '10px',
                left: '12px',
                right: '12px',
                padding: '0.4rem 0.75rem',
                backgroundColor: 'rgba(7, 9, 14, 0.88)',
                backdropFilter: 'blur(8px)',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.75rem',
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
        <div style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan font-mono" style={{ fontSize: '0.72rem' }}>
                Capstone 2 &bull; BSCS 2023–2027
              </span>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#34d399',
                  textDecoration: 'none',
                }}
              >
                <span className="status-pulse" style={{ width: '6px', height: '6px' }}></span>
                <span>Live Deployed Platform</span>
              </a>
            </div>

            <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
              {title}
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '1rem', fontWeight: 500 }}>
              {subtitle}
            </p>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {description}
            </p>

            {/* Technologies */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', marginBottom: '2rem' }}>
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-mono"
                  style={{
                    fontSize: '0.78rem',
                    padding: '0.25rem 0.6rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)',
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
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
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
