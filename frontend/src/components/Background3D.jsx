import React, { useEffect, useState } from 'react';
import '../styles/Background3D.css';

/**
 * Background3D Component
 * Renders an atmospheric 3D background featuring the user's 3D hexagonal/particle geometry.
 * Includes subtle mouse-driven 3D parallax depth for an immersive spatial feel.
 */
export default function Background3D() {
  const [offset, setOffset] = useState({ x: 0, y: 0, rotateX: 0, rotateY: 0 });

  useEffect(() => {
    let animationFrameId;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      // Normalize mouse coordinates (-1 to 1) from window center
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = (e.clientY / window.innerHeight) * 2 - 1;
      
      // Limit range to subtle professional 3D parallax
      targetX = normX * 14; // max +/- 14px
      targetY = normY * 10; // max +/- 10px
    };

    const animate = () => {
      // Smooth lerp easing
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;

      const rotY = (currentX / 14) * 1.5; // max +/- 1.5 deg
      const rotX = -(currentY / 10) * 1.5;

      setOffset({
        x: currentX,
        y: currentY,
        rotateX: rotX,
        rotateY: rotY,
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="bg-3d-viewport" aria-hidden="true">
      {/* 3D Geometry Layer with smooth depth parallax */}
      <div
        className="bg-3d-layer"
        style={{
          transform: `perspective(1200px) translate3d(${offset.x}px, ${offset.y}px, 0) rotateX(${offset.rotateX}deg) rotateY(${offset.rotateY}deg) scale(1.05)`,
        }}
      />
      {/* Ambient Radial Vignette & Depth Mask */}
      <div className="bg-3d-vignette" />
      {/* Subtle Bottom Horizon Mask to seamlessly merge with footer */}
      <div className="bg-3d-gradient-fade" />
    </div>
  );
}
