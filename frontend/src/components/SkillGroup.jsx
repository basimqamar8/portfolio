import React from 'react';
import { Code2 } from 'lucide-react';

/**
 * SkillGroup Component
 * Displays organized, transparent skill groups without misleading percentage bars.
 * Explicitly distinguishes documented project experience from general proficiency.
 * Minimal black and dark styling.
 */
export default function SkillGroup({ category, icon: Icon, skills, description }) {
  return (
    <div
      className="skill-group-card"
      style={{
        backgroundColor: '#0c0c0c',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '14px',
        padding: '1.75rem',
        transition: 'all var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.85rem' }}>
        <div
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '8px',
            backgroundColor: '#141414',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
          }}
        >
          {Icon ? <Icon size={18} /> : <Code2 size={18} />}
        </div>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
          {category}
        </h3>
      </div>

      {description && (
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {description}
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
        {skills.map((skill, index) => {
          const isDocumented = skill.documented;
          return (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.35rem 0.7rem',
                borderRadius: '6px',
                fontSize: '0.82rem',
                fontWeight: 500,
                backgroundColor: isDocumented ? '#141414' : '#0e0e0e',
                border: isDocumented
                  ? '1px solid rgba(255, 255, 255, 0.16)'
                  : '1px solid rgba(255, 255, 255, 0.06)',
                color: isDocumented ? '#ffffff' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
              title={isDocumented ? 'Documented area of project responsibility' : 'Skill & technical exposure'}
            >
              {isDocumented && (
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#ffffff',
                  }}
                />
              )}
              <span>{skill.name}</span>
              {skill.note && (
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: isDocumented ? 'var(--text-muted)' : 'var(--text-dim)',
                    marginLeft: '0.1rem',
                  }}
                >
                  ({skill.note})
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
