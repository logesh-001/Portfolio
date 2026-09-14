import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/content';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent('Project / Opportunity Inquiry')}`;
  const mailtoUrl = `mailto:${personalInfo.email}?subject=Project%20Inquiry`;

  return (
    <section id="contact" className="section container">
      <motion.div 
        className="contact-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="section-label" style={{ marginBottom: '1.5rem' }}>// CONTACT</div>
        
        <h2 className="contact-heading">
          Let's Build Something<br />
          <span className="accent-text">Intelligent Together.</span>
        </h2>
        
        <p className="contact-subtitle">
          Whether you have a project in mind, need an AI infrastructure expert, 
          or just want to chat about the future of LLMs, I'm always open to discussing new opportunities.
        </p>

        {/* Email Pill with 1-Click Copy */}
        <div className="contact-pill-wrapper">
          <div className="contact-email-pill">
            <span className="email-icon">✉️</span>
            <span className="email-address">{personalInfo.email}</span>
            <button
              type="button"
              className="copy-pill-btn"
              onClick={handleCopyEmail}
              aria-label="Copy email address"
            >
              {copied ? '✓ Copied!' : 'Copy'}
            </button>
          </div>
          {personalInfo.location && (
            <div className="contact-location-meta">
              📍 {personalInfo.location} {personalInfo.phone && `· 📞 ${personalInfo.phone}`}
            </div>
          )}
        </div>
        
        <div className="contact-cta">
          <a 
            href={gmailComposeUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ padding: '0.9rem 2.5rem', fontSize: '1.05rem' }}
          >
            Send via Gmail &rarr;
          </a>
          <a 
            href={mailtoUrl} 
            className="btn btn-ghost"
            style={{ padding: '0.9rem 2rem', fontSize: '1rem' }}
          >
            Default Mail App ↗
          </a>
        </div>
        
        <div className="social-links">
          <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={personalInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <button 
            type="button" 
            onClick={handleCopyEmail}
            className="social-link" 
            aria-label="Copy Email"
            title="Copy Email Address"
            style={{ cursor: 'pointer', background: 'var(--bg-surface)' }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
