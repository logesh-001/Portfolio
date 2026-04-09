import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { skills } from '../data/content';

export default function Skills() {
  return (
    <Section id="skills" label="// SKILLS" title="Tech Stack">
      <div className="skills-grid">
        {skills.map((category, i) => (
          <motion.div 
            key={i}
            className="card skill-category"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <h3 className="skill-category-title">{category.category}</h3>
            <ul className="skill-list">
              {category.items.map((item, j) => {
                const isHighlighted = category.highlighted?.includes(item);
                return (
                  <motion.li 
                    key={j} 
                    className={`skill-item ${isHighlighted ? 'highlighted' : ''}`}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: (i * 0.1) + (j * 0.05) }}
                  >
                    {item}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
      <motion.div 
        style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8 }}
      >
        ★ = Vector Database
      </motion.div>
    </Section>
  );
}
