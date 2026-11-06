import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, Globe, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ContactCard from '../components/ContactCard';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page">
      <section className="contact-section section">
        <div className="container">
          <SectionHeading
            eyebrow="Communication Channels"
            title="Get in Touch"
            subtitle="I am actively seeking opportunities in AI Engineering, Computer Vision, and Full-Stack Development. Let's discuss collaborations, roles, or technical innovations."
          />

          <div className="contact-layout-grid">
            {/* Left Column: Direct Communication & Verified Channels */}
            <div className="contact-left-column">
              
              {/* Direct Primary Channels Header */}
              <div className="contact-group-header">
                <span className="contact-group-label font-mono">Direct Communication</span>
                <p className="contact-group-subtext">Direct telephone, email composer, and verified line.</p>
              </div>

              {/* 1. Direct Email (Prominent) */}
              <ContactCard
                icon={Mail}
                label="Direct Email"
                value="basimqamar8@gmail.com"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=basimqamar8@gmail.com"
                external={true}
                copyable={true}
                copyText="basimqamar8@gmail.com"
                description="Click arrow to open directly in Gmail web composer"
                badgeText="Primary Channel"
                variant="prominent"
              />

              {/* 2. Direct Phone (Prominent) */}
              <ContactCard
                icon={Phone}
                label="Direct Phone &amp; WhatsApp"
                value="+92 3003162564"
                href="tel:+923003162564"
                copyable={true}
                copyText="+923003162564"
                description="Click arrow to call or copy number to dial"
                badgeText="Direct Voice"
                variant="prominent"
              />

              {/* Connected Platforms & Repositories 2x2 Subgrid */}
              <div className="contact-group-header" style={{ marginTop: '0.5rem' }}>
                <span className="contact-group-label font-mono">Professional Networks &amp; Code</span>
              </div>

              <div className="contact-profiles-grid">
                {/* LinkedIn */}
                <ContactCard
                  icon={Linkedin}
                  label="LinkedIn"
                  value="Basim Qamar"
                  href="https://www.linkedin.com/in/basim-qamar-12160b2a4/"
                  external={true}
                  variant="compact"
                />

                {/* AgroVision Live Web App */}
                <ContactCard
                  icon={Globe}
                  label="Capstone"
                  value="AgroVision App"
                  href="https://agrovision-bice.vercel.app/"
                  external={true}
                  variant="compact"
                />

                {/* AgroVision GitHub */}
                <ContactCard
                  icon={Github}
                  label="AI Repo"
                  value="AgroVision Code"
                  href="https://github.com/basimqamar8/AgroVision"
                  external={true}
                  variant="compact"
                />

                {/* Portfolio GitHub */}
                <ContactCard
                  icon={Github}
                  label="Portfolio"
                  value="Website Repo"
                  href="https://github.com/basimqamar8/portfolio"
                  external={true}
                  variant="compact"
                />
              </div>

              {/* Status & Availability Overview Card */}
              <div className="contact-status-card card-3d-depth font-mono">
                <div className="status-card-row">
                  <div className="status-badge-live">
                    <span className="status-live-dot" />
                    <span>Active &bull; Available for AI Roles</span>
                  </div>
                  <div className="status-location-tag">
                    <MapPin size={12} />
                    <span>Lahore, PK (PKT)</span>
                  </div>
                </div>
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
