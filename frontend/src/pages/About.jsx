import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  GraduationCap,
  Code2,
  Server,
  Cpu,
  Layers,
  Database,
  Calendar,
  Building,
  CheckCircle2,
  AlertTriangle,
  Github,
  ExternalLink,
  Camera,
  CloudRain,
  MessageSquare,
  FileSpreadsheet,
  LayoutDashboard,
  Eye,
  Shield,
  Smartphone,
  Info,
  Globe
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import SkillGroup from '../components/SkillGroup';
import ExperienceCard from '../components/ExperienceCard';
import ImageModal from '../components/ImageModal';
import '../styles/About.css';

export default function About() {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const screenshots = [
    {
      src: '/assets/agrovision/Web Dashboard.jpeg',
      title: 'AgroVision Web Dashboard',
      description: 'Comprehensive farm overview displaying recent detection alerts, weather metrics, and plot status.',
    },
    {
      src: '/assets/agrovision/Digital Twin.jpeg',
      title: 'Digital Twin 3D Farm Plot',
      description: 'Three.js powered 3D interactive plot visualization tracking historical infestation and treatment history.',
    },
    {
      src: '/assets/agrovision/leaf detection.jpeg',
      title: 'AI Crop Disease Detection',
      description: 'Smartphone-based leaf disease localization using YOLOv8 bounding boxes and EfficientNetB0 classification.',
    },
    {
      src: '/assets/agrovision/Dashboard.jpeg',
      title: 'Mobile Application Interface',
      description: 'React Native 0.76.7 and Expo SDK 52 mobile app interface designed for field accessibility.',
    },
    {
      src: '/assets/agrovision/ChatBot.jpeg',
      title: 'Agricultural Advisory Chatbot',
      description: 'Retrieval-based AI assistant providing context-aware supportive farming guidance.',
    },
    {
      src: '/assets/agrovision/live stream.jpeg',
      title: 'Live Camera Monitoring',
      description: 'Remote camera stream monitoring farm plots in real-time subject to network connectivity.',
    },
    {
      src: '/assets/agrovision/Urdu Language.jpeg',
      title: 'Urdu Localization Support',
      description: 'Bilingual accessibility ensuring local farmers can interact seamlessly in Urdu.',
    },
  ];

  return (
    <div className="about-page">
      {/* 1. Biography & Education Section */}
      <section className="about-hero section">
        <div className="container">
          <SectionHeading
            eyebrow="Profile Overview"
            title="About Me"
            subtitle="Final-semester Computer Science student focused on practical AI engineering and intelligent applications."
          />

          <div className="about-intro-grid">
            {/* Left Column: Minimal Profile Card */}
            <aside className="profile-card">
              <div className="profile-img-wrap">
                <img
                  src="/assets/basim.jpeg"
                  alt="Basim Qamar"
                  className="profile-img"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `
                      <div style="width: 100%; height: 100%; border-radius: 14px; display: flex; align-items: center; justify-content: center; background: #121212; color: #ffffff; font-size: 2.2rem; font-weight: 700; font-family: monospace;">
                        BQ
                      </div>
                    `;
                  }}
                />
              </div>

              <h3 className="profile-name">Basim Qamar</h3>
              <p className="profile-role font-mono">Aspiring AI Engineer</p>

              <div className="profile-quick-details">
                <div className="quick-detail-item">
                  <GraduationCap size={15} color="var(--text-muted)" />
                  <span>BS Computer Science (Final Sem)</span>
                </div>
                <div className="quick-detail-item">
                  <Building size={15} color="var(--text-muted)" />
                  <span>University of South Asia</span>
                </div>
                <div className="quick-detail-item">
                  <Code2 size={15} color="var(--text-muted)" />
                  <span>Frontend / App Developer (FYP)</span>
                </div>
              </div>
            </aside>

            {/* Right Column: Biography & Education */}
            <div className="about-narrative">
              <div
                style={{
                  backgroundColor: '#0c0c0c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '2.25rem',
                  marginBottom: '2rem',
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                  Professional Background
                </h3>
                <p style={{ marginBottom: '1rem' }}>
                  I am a final-semester Computer Science student at the University of South Asia, Lahore,
                  driven by a strong interest in Artificial Intelligence, Machine Learning, Computer Vision,
                  and modern full-stack application development.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  My primary career goal is to become an <strong>AI Engineer</strong> who builds practical,
                  reliable, and user-centric intelligent systems that solve real-world problems. Throughout my
                  studies and project development, I have focused on translating machine learning models into
                  usable applications—bridging the gap between algorithms, server APIs, and interactive client
                  interfaces.
                </p>
                <p>
                  As the Frontend/App Developer for my capstone project, AgroVision, I engineered the cross-platform
                  mobile application using React Native and Expo, integrated Three.js for interactive Digital Twin farm
                  monitoring, structured API communication with Python FastAPI, and handled database integration with
                  PostgreSQL on Neon Serverless.
                </p>
              </div>

              {/* Education Card */}
              <div className="education-card">
                <div className="education-icon-box">
                  <GraduationCap size={24} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                      Bachelor of Science in Computer Science (BSCS)
                    </h4>
                    <span className="badge badge-minimal font-mono">Final Semester</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: '#ffffff', fontWeight: 600, marginBottom: '0.45rem' }}>
                    University of South Asia
                  </p>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    Department of Computer Science &bull; Coursework in algorithms, data structures, artificial intelligence, software engineering, and database systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Skills Section */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)', backgroundColor: 'rgba(255, 255, 255, 0.005)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Competencies"
            title="Technical Skills"
            subtitle="Organized technology groups distinguishing documented project experience from general proficiency. No progress bars."
          />

          <div className="skills-grid">
            {/* Group 1: Programming & Frontend */}
            <SkillGroup
              category="Programming & Frontend"
              icon={Code2}
              description="Languages and client architectures utilized for cross-platform applications and web interfaces."
              skills={[
                { name: 'Python', documented: true, note: 'FYP & APIs' },
                { name: 'JavaScript', documented: true, note: 'ES6+' },
                { name: 'React.js', documented: true, note: 'Web Interfaces' },
                { name: 'React Native', documented: true, note: 'v0.76.7 in FYP' },
                { name: 'Expo', documented: true, note: 'SDK 52 in FYP' },
              ]}
            />

            {/* Group 2: Backend and APIs */}
            <SkillGroup
              category="Backend & APIs"
              icon={Server}
              description="API design, request validation, authentication schemes, and server endpoint development."
              skills={[
                { name: 'FastAPI', documented: true, note: 'Python 3.11' },
                { name: 'REST API Design', documented: true, note: 'Documented FYP' },
                { name: 'Authentication', documented: true, note: 'Role-based access' },
                { name: 'API Integration', documented: true, note: 'Mobile & Web client' },
              ]}
            />

            {/* Group 3: AI and Computer Vision */}
            <SkillGroup
              category="AI & Computer Vision"
              icon={Cpu}
              description="Computer vision models and deep learning frameworks implemented across project pipelines."
              skills={[
                { name: 'Machine Learning', documented: true, note: 'Fundamentals' },
                { name: 'YOLOv8', documented: true, note: 'Disease localization' },
                { name: 'EfficientNetB0', documented: true, note: 'Leaf classifier' },
                { name: 'Model Integration', documented: true, note: 'Client/Server inference' },
                { name: 'TensorFlow / Keras', documented: true, note: 'Project exposure' },
              ]}
            />

            {/* Group 4: 3D and Visualization */}
            <SkillGroup
              category="3D & Visualization"
              icon={Layers}
              description="Interactive 3D graphics and spatial farm health status mapping."
              skills={[
                { name: 'Three.js', documented: true, note: 'Documented FYP' },
                { name: 'Digital Twin Visualization', documented: true, note: 'Plot-level 3D map' },
              ]}
            />

            {/* Group 5: Databases and Tools */}
            <SkillGroup
              category="Databases & Tools"
              icon={Database}
              description="Data persistence, version control, and development toolchain."
              skills={[
                { name: 'PostgreSQL', documented: true, note: 'Neon Serverless' },
                { name: 'SQLite', documented: true, note: 'Local fallback' },
                { name: 'Git', documented: true, note: 'Version control' },
                { name: 'GitHub', documented: true, note: 'Collaboration' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* 3. Experience Section — DeveloperHub Corporation */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Work Experience"
            title="Internship — DeveloperHub Corporation"
            subtitle="Verified six-week Data Science & Analytics program evaluated according to the issued Certificate of Achievement."
          />

          <div style={{ maxWidth: '880px' }}>
            <ExperienceCard />
          </div>
        </div>
      </section>

      {/* 4. Final Year Project — AgroVision Deep Dive */}
      <section id="agrovision" className="fyp-section section">
        <div className="container">
          <SectionHeading
            eyebrow="Capstone Project"
            title="AgroVision"
            subtitle="An AI-Powered Platform for Smartphone-Based Pest Detection and Digital Twin Farm Monitoring"
          />

          {/* Overview Banner */}
          <div className="fyp-overview-banner">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <div>
                <span className="badge badge-minimal font-mono" style={{ marginBottom: '0.4rem' }}>
                  Project Overview
                </span>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                  Platform Scope &amp; Architecture
                </h3>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Button
                  href="https://agrovision-bice.vercel.app/"
                  variant="primary"
                  size="sm"
                  external={true}
                  icon={Globe}
                >
                  Launch Live Platform
                </Button>
                <Button
                  href="https://github.com/basimqamar8/AgroVision"
                  variant="secondary"
                  size="sm"
                  external={true}
                  icon={Github}
                >
                  View GitHub
                </Button>
              </div>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              <strong>AgroVision</strong> is an AI-powered agricultural platform designed to help farmers
              identify crop pests and diseases from smartphone images and monitor the historical health of
              farm plots through a Digital Twin system. The platform combines computer vision, explainable AI
              visualizations, farm monitoring, weather information, live video, chatbot guidance, and reporting
              functionality in a single web-based system.
            </p>

            {/* Problem Being Addressed */}
            <div
              style={{
                backgroundColor: '#080808',
                borderLeft: '2px solid #ffffff',
                borderRadius: '0 8px 8px 0',
                padding: '1.25rem 1.5rem',
                marginTop: '1.25rem',
              }}
            >
              <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                Problem Being Addressed
              </h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                Traditional crop monitoring often leads to late disease detection, lack of historical records across seasons,
                and indiscriminate pesticide usage. AgroVision provides early, image-based crop disease identification and
                maintains plot-level historical records so farmers can observe changes in crop health over time and make more
                informed decisions. AgroVision is engineered as an intelligent decision-support tool; it does not replace
                professional agronomists.
              </p>
            </div>
          </div>

          {/* Key Documented Features (8 cards) */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Key Documented Features
            </h3>

            <div className="feature-cards-grid">
              {/* Feature 1 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Camera size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Crop Disease Detection
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Uses YOLOv8 for object localization with bounding boxes and EfficientNetB0 for accurate disease classification on leaf images.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Eye size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Explainable AI (Grad-CAM)
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Generates Grad-CAM heatmaps to visualize the specific image regions contributing to the neural network predictions.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Layers size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Digital Twin Farm Monitoring
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Maintains continuous plot-level records and Three.js 3D representations to track health status, disease spread, and treatment history.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <CloudRain size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Weather Integration
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Retrieves real-time atmospheric conditions and precipitation forecasts via AccuWeather API to support timely field operations.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <Camera size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Live Video Monitoring
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Provides camera-based live monitoring of farm plots, subject to local camera hardware and network connectivity.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <MessageSquare size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Agricultural Chatbot
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Offers retrieval-based agricultural information and supportive guidance in both English and Urdu for local farmers.
                </p>
              </div>

              {/* Feature 7 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <FileSpreadsheet size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  History &amp; Reports
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Stores detection logs with timestamps, model confidence scores, and GPS coordinates, exportable to CSV and PDF formats.
                </p>
              </div>

              {/* Feature 8 */}
              <div className="feature-card">
                <div className="feature-icon-wrap">
                  <LayoutDashboard size={18} />
                </div>
                <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.4rem' }}>
                  Farm Dashboard
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Unifies plot health statistics, recent scans, severe alerts, and administrative management into a centralized dashboard.
                </p>
              </div>
            </div>
          </div>

          {/* Actual Project Screenshots Showcase */}
          <div style={{ marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>
                System Screenshots &amp; Interfaces
              </h3>
              <span className="font-mono" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Click any image to enlarge
              </span>
            </div>

            <div className="screenshots-grid">
              {screenshots.map((item, index) => (
                <div
                  key={index}
                  className="screenshot-thumb-card"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="screenshot-img-box">
                    <img src={item.src} alt={item.title} />
                  </div>
                  <div className="screenshot-meta">
                    <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                      {item.title}
                    </h5>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI and Machine Learning Technologies */}
          <div
            style={{
              backgroundColor: '#0c0c0c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '2.25rem',
              marginBottom: '3rem',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem', letterSpacing: '-0.02em' }}>
              AI and Machine Learning Pipeline
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              The machine learning subsystem in AgroVision leverages a specialized dual-model architecture to handle disease identification across different agricultural visual domains:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#070707', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  YOLOv8 Localization
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Identifies and localizes relevant crop or disease regions directly on uploaded imagery with precise bounding boxes.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#070707', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  EfficientNetB0 Classifier
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Pretrained with ImageNet transfer learning to classify crop leaf diseases across tomato, potato, and pepper samples.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#070707', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  Grad-CAM Heatmaps
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Provides visual explanation heatmaps highlighting the pixel regions that contributed most significantly to the model classification.
                </p>
              </div>

              <div style={{ padding: '1.25rem', borderRadius: '10px', backgroundColor: '#070707', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <h4 style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.4rem' }}>
                  TensorFlow / Keras Stack
                </h4>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Deep learning development and inference pipeline specified in the project implementation architecture.
                </p>
              </div>
            </div>
          </div>

          {/* My Documented Team Contribution */}
          <div className="contribution-card">
            <span className="badge badge-minimal font-mono" style={{ marginBottom: '0.5rem' }}>
              Documented Responsibility
            </span>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.02em' }}>
              My Role: Frontend / App Developer
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              According to the approved Capstone documentation and FYP Final Report, my specific responsibilities encompassed:
            </p>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>React Native &amp; Expo Development:</strong> Built the cross-platform mobile client with React Native 0.76.7 and Expo SDK 52 for responsive field use.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Three.js 3D Visualization:</strong> Engineered the 3D Digital Twin farm plot visualizer to map spatial disease history.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>API Design &amp; Integration:</strong> Structured clean REST API contracts and integrated backend endpoints with client components.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>Authentication &amp; User State:</strong> Implemented role-based authentication flows and user session handling.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} color="#ffffff" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span><strong>PostgreSQL Database Integration:</strong> Configured database integration using Neon Serverless Cloud with local SQLite fallback.</span>
              </li>
            </ul>

            {/* Team Division Acknowledgement */}
            <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.25rem' }}>
              <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                AgroVision Capstone Team Division of Responsibilities
              </h5>
              <div className="team-division-grid">
                <div className="team-member-pill">
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: '#ffffff' }}>Frontend / App Developer</span>
                  <h5 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.2rem 0' }}>Basim Qamar</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>React Native 0.76.7, Expo 52, Three.js, API Design, Authentication, PostgreSQL (Neon)</p>
                </div>

                <div className="team-member-pill">
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>AI System Development</span>
                  <h5 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.2rem 0' }}>Ahmed Jamil</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Deep Learning, YOLOv8, EfficientNetB0, Model Evaluation &amp; Training</p>
                </div>

                <div className="team-member-pill">
                  <span className="font-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Backend Development</span>
                  <h5 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.2rem 0' }}>Muhammad Baqir</h5>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>JavaScript, Tailwind CSS, Chart.js, Leaflet web interface</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Technology Stack */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '1.25rem', letterSpacing: '-0.02em' }}>
              Project Technology Stack
            </h3>

            <div className="stack-group-grid">
              <div className="stack-group-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  <Smartphone size={16} />
                  <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>Mobile App</h5>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>React Native 0.76.7</li>
                  <li>Expo SDK 52</li>
                  <li>Three.js 3D Engine</li>
                </ul>
              </div>

              <div className="stack-group-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  <Code2 size={16} />
                  <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>Web Interface</h5>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>HTML5 / CSS3</li>
                  <li>JavaScript</li>
                  <li>Leaflet &amp; Chart.js</li>
                </ul>
              </div>

              <div className="stack-group-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  <Server size={16} />
                  <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>Backend &amp; APIs</h5>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>Python 3.11 / FastAPI</li>
                  <li>RESTful Endpoints</li>
                  <li>Role-Based Auth</li>
                </ul>
              </div>

              <div className="stack-group-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  <Cpu size={16} />
                  <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>AI &amp; Vision</h5>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>YOLOv8 Localization</li>
                  <li>EfficientNetB0</li>
                  <li>Grad-CAM Heatmaps</li>
                  <li>TensorFlow / Keras</li>
                </ul>
              </div>

              <div className="stack-group-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem', color: '#ffffff' }}>
                  <Database size={16} />
                  <h5 style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '0.92rem' }}>Database</h5>
                </div>
                <ul style={{ listStyle: 'none', fontSize: '0.84rem', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <li>PostgreSQL (Neon)</li>
                  <li>SQLite Local Fallback</li>
                  <li>GIS Spatial Attributes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Honest Technical Limitations & Future Work */}
          <div
            style={{
              backgroundColor: '#0c0c0c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
              <AlertTriangle size={18} color="var(--text-muted)" />
              <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
                Documented Limitations &amp; Future Scope
              </h4>
            </div>

            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              In keeping with engineering integrity and the documented final project evaluation, the platform acknowledges several real-world operating constraints and opportunities for future enhancement:
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
              <div>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Operating Limitations
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <li>&bull; Detection results can vary depending on camera lighting, image focus, disease stage, and training dataset boundaries.</li>
                  <li>&bull; The pesticide recommendation module has been designed conceptually but is not yet implemented.</li>
                  <li>&bull; The chatbot provides retrieval-based supportive information and does not replace expert agronomic diagnosis.</li>
                  <li>&bull; Live stream quality remains contingent upon remote camera hardware and cellular bandwidth in agricultural fields.</li>
                </ul>
              </div>

              <div>
                <h5 style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.35rem' }}>
                  Planned Future Enhancements
                </h5>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
                  <li>&bull; Expanding dataset diversity and validation across actual field conditions in Pakistan.</li>
                  <li>&bull; Broadening crop coverage beyond tomato, potato, and pepper to wheat, rice, and cotton.</li>
                  <li>&bull; Strengthening offline-first queuing mechanisms for low-connectivity farm plots.</li>
                  <li>&bull; Introducing multi-season predictive disease outbreak modeling inside the Digital Twin.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Screenshots */}
      <ImageModal
        isOpen={Boolean(selectedImage)}
        onClose={() => setSelectedImage(null)}
        src={selectedImage?.src}
        alt={selectedImage?.title}
        caption={selectedImage?.description}
      />
    </div>
  );
}
