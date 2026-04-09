import React, { useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function AnimatedCounter({ value, duration = 1.5, className }) {
  const [count, setCount] = useState('0');
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Extract number and suffix (like "10+" -> 10 and "+")
  const numValue = parseInt(value.replace(/[^0-9]/g, ''), 10) || 0;
  const suffix = value.replace(/[0-9]/g, '');

  useEffect(() => {
    if (isInView) {
      if (numValue === 0) {
        setCount(value);
        return;
      }
      
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        // easeOutQuart
        const ease = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(ease * numValue);
        
        setCount(`${currentCount}${suffix}`);
        
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setCount(value); // Ensure exactly target format at end
        }
      };
      
      requestAnimationFrame(step);
    }
  }, [isInView, value, numValue, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
}
