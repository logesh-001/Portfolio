import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import { projects } from '../data/content';

export default function Projects() {
  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <Section id="projects" label="// PROJECTS" title="What I've Built">
      {/* Featured Project */}
      {featured && (
        <motion.div 
          className="card project-featured"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="project-visual">
            <span style={{ fontSize: '5rem', filter: 'drop-shadow(0 0 20px rgba(0,255,178,0.3))' }}>
              {featured.icon}
            </span>
          </div>
          <div className="project-featured-info">
            <h3 className="project-name">{featured.name}</h3>
            <div className="project-story">{featured.story}</div>
            <p className="project-desc">{featured.description}</p>
            <div className="tags-row">
              {featured.tags.map((tag, i) => (
                <span key={i} className="tag highlighted">{tag}</span>
              ))}
            </div>
          </div>
        </motion.div>
      )}

      {/* Grid Projects */}
      <div className="projects-grid">
        {others.map((project, i) => (
          <motion.div 
            key={i}
            className="card project-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
          >
            <div className="project-icon">{project.icon}</div>
            <h3 className="project-name">{project.name}</h3>
            <div className="project-story">{project.story}</div>
            <p className="project-desc">{project.description}</p>
            <div className="tags-row">
              {project.tags.map((tag, j) => (
                <span key={j} className="tag">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
