import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import morning from '../assets/images/morning.png';
import night from '../assets/images/night.png';

export const ImageComponent = () => {
  const [isMorning, setIsMorning] = useState(true);

  // Preload images once
  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    img1.src = morning;
    img2.src = night;
  }, []);

  // Automatically switch to night after 3 seconds
  useEffect(() => {
    if (isMorning) {
      const timer = setTimeout(() => {
        setIsMorning(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isMorning]);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'black', // Prevent white flashes during transition
      }}
    >
      {/* Morning image */}
      <motion.img
        src={morning}
        alt="Morning"
        initial={false}
        animate={{
          opacity: isMorning ? 1 : 0,
          filter: isMorning ? 'blur(0px)' : 'blur(4px)',
        }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: isMorning ? 2 : 1,
        }}
      />

      {/* Night image */}
      <motion.img
        src={night}
        alt="Night"
        initial={false}
        animate={{
          opacity: isMorning ? 0 : 1,
          filter: isMorning ? 'blur(2px)' : 'blur(0px)',
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: isMorning ? 1 : 2,
        }}
      />

      {/* Toggle Button (optional if auto only) */}
      <button
        onClick={() => setIsMorning(prev => !prev)}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '12px 24px',
          fontSize: '16px',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          border: '1px solid #ccc',
          cursor: 'pointer',
          zIndex: 3,
        }}
      >
        Toggle Time
      </button>
    </div>
  );
};
