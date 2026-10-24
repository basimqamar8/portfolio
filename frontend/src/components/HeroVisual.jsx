import React, { useEffect, useRef } from 'react';
import { Sparkles, Cpu, Layers, Award, Terminal } from 'lucide-react';

/**
 * HeroVisual Component
 * Showcases Basim Qamar's portrait with interactive canvas particle depth,
 * rotating ambient aura, and floating animated badges.
 */
export default function HeroVisual() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    const nodes = [];
    const nodeCount = 24;
    const maxDistance = 95;

    const resize = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        radius: Math.random() * 2 + 1,
        isHub: i % 6 === 0,
        pulsePhase: Math.random() * Math.PI * 2,
      });
    }

    let mouse = { x: -1000, y: -1000 };
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let step = 0;

    const render = () => {
      step += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle orbital guides
      const centerX = width * 0.5;
      const centerY = height * 0.5;

      ctx.save();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.07)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(centerX, centerY, Math.min(width, height) * 0.42, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.strokeStyle = node.isHub || other.isHub
              ? `rgba(0, 242, 254, ${alpha * 1.4})`
              : `rgba(139, 92, 246, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        }

        // Draw particle
        ctx.beginPath();
        const pulse = Math.sin(step + node.pulsePhase) * 0.5;
        const r = node.radius + pulse;

        if (node.isHub) {
          ctx.fillStyle = 'rgba(0, 242, 254, 0.9)';
          ctx.arc(node.x, node.y, r * 1.2, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = 'rgba(196, 181, 253, 0.6)';
          ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="hero-visual-showcase">
      {/* Background Interactive Neural Canvas */}
      <div className="hero-canvas-backdrop">
        <canvas ref={canvasRef} className="hero-canvas-el" />
      </div>

      {/* Main Glassmorphism Portrait Frame */}
      <div className="hero-portrait-frame">
        {/* Animated Cyber Ring / Gradient Border */}
        <div className="hero-portrait-glow-ring"></div>

        <div className="hero-portrait-inner">
          <div className="hero-portrait-header font-mono">
            <div className="header-status-dot">
              <span className="dot-live"></span>
              <span>Basim Qamar // AI Engineer</span>
            </div>
            <span className="header-tag">BSCS Final Sem</span>
          </div>

          <div className="hero-image-wrapper">
            <img
              src="/assets/basim.jpeg"
              alt="Basim Qamar"
              className="hero-portrait-img"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            {/* Subtle Gradient Vignette Overlay */}
            <div className="hero-image-overlay"></div>
          </div>

          <div className="hero-portrait-footer font-mono">
            <div className="footer-meta-item">
              <span className="meta-label">University</span>
              <span className="meta-val">Univ. of South Asia</span>
            </div>
            <div className="footer-meta-item">
              <span className="meta-label">Capstone</span>
              <span className="meta-val text-cyan">AgroVision</span>
            </div>
          </div>
        </div>

        {/* Floating Animated Badges */}
        {/* Badge 1: Top Right */}
        <div className="floating-badge badge-top-right">
          <div className="badge-icon-box cyan">
            <Cpu size={15} />
          </div>
          <div className="badge-text-box">
            <span className="badge-title">AI &amp; Computer Vision</span>
            <span className="badge-sub font-mono">YOLOv8 + EfficientNet</span>
          </div>
        </div>

        {/* Badge 2: Bottom Left */}
        <div className="floating-badge badge-bottom-left">
          <div className="badge-icon-box violet">
            <Layers size={15} />
          </div>
          <div className="badge-text-box">
            <span className="badge-title">Digital Twin 3D</span>
            <span className="badge-sub font-mono">React Native + Three.js</span>
          </div>
        </div>

        {/* Badge 3: Bottom Right Pill */}
        <div className="floating-pill-stat">
          <span className="pill-pulse-dot"></span>
          <span>FastAPI + PostgreSQL</span>
        </div>
      </div>
    </div>
  );
}
