import React, { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Activity, ShieldCheck, Globe } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import { checkHealth } from '../services/api';
import '../styles/Contact.css';

export default function Contact() {
  const [backendStatus, setBackendStatus] = useState('checking'); // 'checking' | 'online' | 'offline'
  const [serverInfo, setServerInfo] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Verify live backend health
    let isMounted = true;
    checkHealth()
      .then((data) => {
        if (isMounted) {
          setBackendStatus('online');
          setServerInfo(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setBackendStatus('offline');
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-section section">
        <div className="container">
          <SectionHeading
            eyebrow="Communication Channels"
            title="Get in Touch"
            subtitle="I am actively seeking opportunities in AI Engineering, Computer Vision, and Full-Stack Development. Feel free to connect directly or send a message below."
          />

          <div className="contact-layout-grid">
            {/* Left Column: Direct Contact Channels */}
            <div className="contact-cards-column">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                Direct Channels
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                Verified phone, email, and professional networks.
              </p>

              {/* 1. Phone */}
              <ContactCard
                icon={Phone}
                label="Direct Phone"
                value="+92 3003162564"
                href="tel:+923003162564"
                copyable={true}
                copyText="+923003162564"
                description="Click to call or copy number"
                accentColor="var(--accent-cyan)"
              />

              {/* 2. Email */}
              <ContactCard
                icon={Mail}
                label="Direct Email"
                value="basimqamar8@gmail.com"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=basimqamar8@gmail.com"
                external={true}
                copyable={true}
                copyText="basimqamar8@gmail.com"
                description="Opens directly in Gmail web composer"
                accentColor="var(--accent-cyan)"
              />

              {/* 3. AgroVision Live Platform */}
              <ContactCard
                icon={Globe}
                label="Live Capstone Platform"
                value="AgroVision Live Web App"
                href="https://agrovision-bice.vercel.app/"
                external={true}
                description="Explore the live running AI agricultural application"
                accentColor="#34d399"
              />

              {/* 4. LinkedIn */}
              <ContactCard
                icon={Linkedin}
                label="Professional Network"
                value="LinkedIn Profile"
                href="https://www.linkedin.com/in/basim-qamar-12160b2a4/"
                external={true}
                description="Connect with Basim Qamar"
                accentColor="#38bdf8"
              />

              {/* 4. GitHub */}
              <ContactCard
                icon={Github}
                label="Source Code &amp; Repositories"
                value="AgroVision Repository"
                href="https://github.com/basimqamar8/AgroVision"
                external={true}
                description="Browse AgroVision code &amp; commit history"
                accentColor="#c4b5fd"
              />

              {/* Live Backend Connection Indicator */}
              <div className="backend-status-pill font-mono">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                  <span className={`status-indicator-dot ${backendStatus}`}></span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    FastAPI Backend: {backendStatus === 'online' ? 'Connected & Ready' : backendStatus === 'checking' ? 'Checking connection...' : 'Offline (Local Server)'}
                  </span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  /api/contact
                </span>
              </div>
            </div>

            {/* Right Column: Functional Contact Form */}
            <div className="contact-form-column">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
