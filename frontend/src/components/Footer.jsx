import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Linkedin, Github, Heart, ExternalLink, Globe } from 'lucide-react';
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          {/* Brand & Mission */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="logo-symbol">BQ</span>
              <span className="logo-text">Basim Qamar</span>
            </Link>
            <p className="footer-bio">
              Final-semester Computer Science student at University of South Asia.
              Passionate about Artificial Intelligence, Machine Learning, Computer Vision,
              and building impactful software solutions.
            </p>
            <div className="footer-status-pill">
              <span className="status-pulse"></span>
              <span>Available for AI Engineering Roles</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li className="footer-link-item">
                <Link to="/">Home</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about">About &amp; Experience</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/about#agrovision">AgroVision FYP</Link>
              </li>
              <li className="footer-link-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Verified Contact Channels */}
          <div>
            <h4 className="footer-col-title">Direct Connect</h4>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=basimqamar8@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Compose email to Basim Qamar in Gmail"
                >
                  <Mail size={16} color="var(--accent-cyan)" />
                  <span>basimqamar8@gmail.com</span>
                  <ExternalLink size={12} color="var(--text-muted)" />
                </a>
              </li>
              <li className="footer-contact-item">
                <a href="tel:+923003162564" title="Call Basim Qamar">
                  <Phone size={16} color="var(--accent-cyan)" />
                  <span>+92 3003162564</span>
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  href="https://www.linkedin.com/in/basim-qamar-12160b2a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Basim Qamar on LinkedIn"
                >
                  <Linkedin size={16} color="var(--accent-cyan)" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink size={12} color="var(--text-muted)" />
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  href="https://agrovision-bice.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="AgroVision Live Web Platform"
                >
                  <Globe size={16} color="var(--accent-cyan)" />
                  <span>AgroVision Live Platform</span>
                  <ExternalLink size={12} color="var(--text-muted)" />
                </a>
              </li>
              <li className="footer-contact-item">
                <a
                  href="https://github.com/basimqamar8/AgroVision"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="AgroVision Repository on GitHub"
                >
                  <Github size={16} color="var(--accent-cyan)" />
                  <span>AgroVision Repository</span>
                  <ExternalLink size={12} color="var(--text-muted)" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} Basim Qamar. All rights reserved.
          </p>
          <p className="footer-built-with font-mono">
            React.js &bull; Python FastAPI &bull; PostgreSQL / SQLite
          </p>
        </div>
      </div>
    </footer>
  );
}
