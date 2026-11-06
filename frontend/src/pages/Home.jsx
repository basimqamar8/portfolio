import React from 'react';
import { ArrowRight, Mail, GraduationCap, Cpu, Award } from 'lucide-react';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import HeroVisual from '../components/HeroVisual';
import ProjectCard from '../components/ProjectCard';
import ExperienceCard from '../components/ExperienceCard';
import '../styles/Home.css';

export default function Home() {
  return (
    <div className="home-page">
      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          {/* Left Column: Introduction & Primary Actions */}
          <div className="hero-content">
            <div className="hero-eyebrow">
              <span className="badge badge-minimal font-mono">
                Final-Semester CS Student &bull; University of South Asia
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm Basim Qamar.
            </h1>

            <p className="hero-subtitle">
              Aspiring AI Engineer | Computer Science Student
            </p>

            <p className="hero-description">
              I'm a final-semester Computer Science student at the University of South Asia,
              passionate about Artificial Intelligence, Machine Learning, and building
              intelligent applications that solve real-world problems.
            </p>

            {/* Quick Highlights Bar */}
            <div className="hero-quick-stats font-mono">
              <span className="quick-stat-badge">
                <GraduationCap size={13} color="var(--text-muted)" />
                BSCS &bull; Univ. of South Asia
              </span>
              <span className="quick-stat-badge">
                <Cpu size={13} color="var(--text-muted)" />
                AgroVision App Developer
              </span>
              <span className="quick-stat-badge">
                <Award size={13} color="var(--award-gold)" />
                DeveloperHub Corp Intern
              </span>
            </div>

            <div className="hero-actions">
              <Button
                to="/about#agrovision"
                variant="primary"
                size="md"
                icon={ArrowRight}
                iconPosition="right"
              >
                Explore My Work
              </Button>

              <Button
                to="/contact"
                variant="secondary"
                size="md"
                icon={Mail}
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Right Column: Basim's Minimalist Portrait Presentation */}
          <div className="hero-visual-wrapper">
            <HeroVisual />
          </div>
        </div>
      </section>

      {/* 2. Selected Work Preview — AgroVision */}
      <section className="home-section section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Featured Project"
            title="AgroVision Platform"
            subtitle="An AI-powered agricultural system integrating smartphone crop disease detection, Grad-CAM explainability, and Digital Twin farm monitoring."
          />

          <ProjectCard
            title="AgroVision"
            subtitle="AI-Powered Pest Detection & Digital Twin Farm Monitoring"
            description="AgroVision is an AI-powered agricultural platform designed to help farmers identify crop pests and diseases from smartphone images and monitor the historical health of farm plots through a Digital Twin system. The platform combines computer vision, explainable AI visualizations, farm monitoring, weather information, live video, chatbot guidance, and reporting functionality in a single web-based system."
            tags={[
              "YOLOv8 Localization",
              "EfficientNetB0 Classifier",
              "Grad-CAM Heatmaps",
              "React Native 0.76.7",
              "Expo SDK 52",
              "Three.js Digital Twin",
              "FastAPI / Python",
              "PostgreSQL (Neon)"
            ]}
            githubUrl="https://github.com/basimqamar8/AgroVision"
            demoUrl="https://agrovision-bice.vercel.app/"
            detailsUrl="/about#agrovision"
          />
        </div>
      </section>

      {/* 3. Internship Highlight — DeveloperHub Corporation */}
      <section className="home-section section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'rgba(255, 255, 255, 0.005)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Industry Experience"
            title="Internship Recognition"
            subtitle="Verified six-week professional program in Data Science & Analytics with performance distinction."
          />

          <div style={{ maxWidth: '880px' }}>
            <ExperienceCard />
          </div>
        </div>
      </section>
    </div>
  );
}
