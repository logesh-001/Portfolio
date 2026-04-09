import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';
import ParticleCanvas from './ParticleCanvas';
import cyberImage from '../data/image/Cyber_image.png';

export default function Hero() {
  const [typingText, setTypingText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ['LLMs', 'RAG', 'AI agents'];
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    let timer;
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      timer = setTimeout(() => {
        setTypingText(currentWord.substring(0, typingText.length - 1));
        if (typingText.length === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setTypingText(currentWord.substring(0, typingText.length + 1));
        if (typingText.length === currentWord.length) {
          timer = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [typingText, isDeleting, wordIndex, words]);

  return (
    <section id="hero" className="hero container">
      <ParticleCanvas />
      <div className="hero-content" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="hero-text"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="hero-label">// AI ENGINEER</div>
          <h1 className="hero-name">
            Hi, I'm <br />
            Logeshwaran<br />
            Shanmugam<span className="dot">.</span>
          </h1>
          <p className="hero-tagline">
            Building intelligent systems with <br/>
            <span style={{ color: 'var(--accent)', fontWeight: 600 }}>{typingText}</span>
            <span className="cursor" style={{ visibility: isDeleting ? 'hidden' : 'visible' }}>|</span>
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View Projects &rarr;</a>
            <a href="#contact" className="btn btn-ghost">Get in Touch</a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          <motion.img 
            src={cyberImage} 
            alt="Logeshwaran Shanmugam — AI Engineer" 
            className="hero-image"
            animate={{ y: [0, -25, 0] }}
            transition={{ 
              y: { repeat: Infinity, duration: 5, ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </div>
      
      <div className="scroll-indicator">
        Scroll
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
}
