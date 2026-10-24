import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import Button from './Button';
import '../styles/Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar-wrapper ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <Link to="/" className="navbar-logo" aria-label="Basim Qamar Portfolio Home">
          <span className="logo-symbol">BQ</span>
          <span className="logo-text">Basim Qamar</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className="navbar-links">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="navbar-actions">
          <Button
            to="/contact"
            variant="primary"
            size="sm"
            className="btn-contact-nav"
            icon={ArrowUpRight}
            iconPosition="right"
          >
            Contact Me
          </Button>

          <button
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-overlay ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <div className="mobile-menu-actions">
          <Button
            to="/contact"
            variant="primary"
            size="md"
            icon={ArrowUpRight}
            iconPosition="right"
            style={{ width: '100%' }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  );
}
