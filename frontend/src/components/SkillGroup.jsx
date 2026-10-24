import React from 'react';
import { CheckCircle2, Code2, Cpu, Database, Eye, Globe } from 'lucide-react';

/**
 * SkillGroup Component
 * Displays organized, transparent skill groups without misleading percentage bars.
 * Explicitly distinguishes documented project experience from general proficiency.
 */
export default function SkillGroup({ category, icon: Icon, skills, description }) {
  return (
    <div
      className="skill-group-card"
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-card)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.75rem',
        transition: 'all var(--transition-normal)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: 'rgba(0, 242, 254, 0.08)',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
          }}
        >
          {Icon ? <Icon size={20} /> : <Code2 size={20} />}
        </div>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)' }}>
          {category}
        </h3>
      </div>

      {description && (
        <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
          {description}
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem', marginTop: 'auto' }}>
        {skills.map((skill, index) => {
          const isDocumented = skill.documented;
          return (
            <div
              key={index}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                fontSize: '0.85rem',
                fontWeight: 500,
                backgroundColor: isDocumented ? 'rgba(0, 242, 254, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                border: isDocumented
                  ? '1px solid rgba(0, 242, 254, 0.25)'
                  : '1px solid var(--border-subtle)',
                color: isDocumented ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'all var(--transition-fast)',
              }}
              title={isDocumented ? 'Documented area of project responsibility' : 'Skill & technical exposure'}
            >
              {isDocumented && (
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-cyan)',
                  }}
                />
              )}
              <span>{skill.name}</span>
              {skill.note && (
                <span
                  className="font-mono"
                  style={{
                    fontSize: '0.7rem',
                    color: isDocumented ? 'var(--accent-cyan)' : 'var(--text-muted)',
                    marginLeft: '0.15rem',
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
