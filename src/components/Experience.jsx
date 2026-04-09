import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { experience } from '../data/content';

export default function Experience() {
  return (
    <Section id="experience" label="// EXPERIENCE" title="Career Timeline">
      <div className="timeline">
        {/* Animated timeline line */}
        <motion.div 
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            left: '7px',
            top: '8px',
            bottom: '8px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent), var(--border-subtle))',
            transformOrigin: 'top'
          }}
        />

        {experience.map((exp, i) => (
          <motion.div 
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
          >
            <div className={`timeline-dot ${exp.current ? 'current' : ''}`}></div>
            <div className="timeline-duration">{exp.duration}</div>
            
            <div className="card timeline-card">
              <h3 className="timeline-role">{exp.role}</h3>
              <div className="timeline-company">{exp.company}</div>
              
              <ul className="timeline-highlights">
                {exp.highlights.map((highlight, j) => (
                  <li key={j}>{highlight}</li>
                ))}
              </ul>
              
              <div className="tags-row">
                {exp.tags.map((tag, j) => (
                  <span key={j} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
