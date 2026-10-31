// src/components/CustomCursor.tsx
import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useCursor } from '../context/CursorContext';

export const CustomCursor: React.FC = () => {
  const { cursorType, cursorText } = useCursor();
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // High-performance spring interpolation
  const springConfig = { damping: 28, stiffness: 380, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect mobile / touch or reduced motion
    const touch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion || window.innerWidth < 1024) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, mouseX, mouseY]);

  if (isTouchDevice || !isVisible || cursorType === 'none') {
    return null;
  }

  const isProject = cursorType === 'project';
  const isEmail = cursorType === 'email';
  const isLink = cursorType === 'link';

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isProject || isEmail ? 1 : isLink ? 1.6 : 1,
          width: isProject ? 110 : isEmail ? 80 : isLink ? 36 : 10,
          height: isProject ? 36 : isEmail ? 32 : isLink ? 36 : 10,
          borderRadius: isProject || isEmail ? 20 : 999,
          backgroundColor: isProject
            ? '#2251FF'
            : isEmail
            ? '#121211'
            : isLink
            ? 'transparent'
            : '#121211',
          borderWidth: isLink ? 1.5 : 0,
          borderColor: '#2251FF',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="flex items-center justify-center text-center text-white pointer-events-none select-none shadow-sm"
      >
        {(isProject || isEmail) && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[10px] font-mono tracking-widest uppercase font-semibold text-white px-2 whitespace-nowrap"
          >
            {cursorText || (isProject ? 'VIEW' : 'EMAIL')}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};

export default CustomCursor;

