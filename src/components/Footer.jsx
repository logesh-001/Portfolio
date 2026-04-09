import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="footer container">
      <p className="footer-text">
        Built with React · Designed with intention<br />
        &copy; {year} <span className="accent-text">Logeshwaran Shanmugam</span>. All rights reserved.
      </p>
    </footer>
  );
}
