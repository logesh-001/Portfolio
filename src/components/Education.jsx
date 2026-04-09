import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { education } from '../data/content';

export default function Education() {
  return (
    <Section id="education" label="// EDUCATION" title="Academic Background">
      <motion.div 
        className="card education-card"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="education-icon">🎓</div>
        <h3 className="education-degree">{education.degree}</h3>
        <div className="education-college">{education.college}</div>
        <div className="education-meta">
          {education.year} &nbsp;·&nbsp; GPA: {education.gpa}
        </div>
        
        <ul className="education-achievements" style={{ display: 'inline-block', textAlign: 'left', marginTop: '1rem' }}>
          {education.achievements.map((ach, i) => (
            <li key={i} style={{ marginBottom: '0.5rem' }}>• {ach}</li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
