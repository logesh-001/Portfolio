import React from 'react';
import { motion } from 'framer-motion';

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section container">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="section-label">{label}</div>
        <h2 className="section-title">{title}</h2>
      </motion.div>
      {children}
    </section>
  );
}
