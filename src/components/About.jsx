import React from 'react';
import { motion } from 'framer-motion';
import Section from './Section';
import AnimatedCounter from './AnimatedCounter';
import { personalInfo, stats } from '../data/content';

export default function About() {
  const codeSnippet = `class LogeshwaranShanmugam:
    role = "AI Engineer"
    focus = ["LLMs", "RAG", "AI Agents"]
    status = "Building the future"`;

  return (
    <Section id="about" label="// ABOUT" title="Who I Am">
      <div className="about-grid">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="about-text-col"
        >
          <p className="about-text">{personalInfo.summary}</p>
          
          <div className="about-code">
            <span className="keyword">class</span> <span className="class-name">LogeshwaranShanmugam</span>:<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">role</span> = <span className="string">"AI Engineer"</span><br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">focus</span> = [<span className="string">"LLMs"</span>, <span className="string">"RAG"</span>, <span className="string">"AI Agents"</span>]<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="attr">status</span> = <span className="string">"Building the future"</span>
          </div>
        </motion.div>
        
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="card stat-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
            >
              <AnimatedCounter value={stat.value} className="stat-value" />
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
