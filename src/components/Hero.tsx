// src/components/Hero.tsx
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import { useCursor } from '../context/CursorContext';

export const Hero: React.FC = () => {
  const { setCursor, resetCursor } = useCursor();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();

  // Subtle parallax on scroll
  const yHero = useTransform(scrollY, [0, 500], [0, -60]);
  const opacityHero = useTransform(scrollY, [0, 450], [1, 0.2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize between -1 and 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 sm:pt-40 pb-16 px-6 sm:px-10 overflow-hidden">
      {/* Living Interactive Grid Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-40 transition-opacity duration-700"
      >
        {/* Subtle dynamic grid lines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(229, 227, 220, 0.45) 1px, transparent 1px), linear-gradient(to bottom, rgba(229, 227, 220, 0.45) 1px, transparent 1px)`,
            backgroundSize: '4rem 4rem',
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px)`,
            transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />

        {/* Soft interactive radial glow tracking mouse */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none transition-transform duration-500 ease-out"
          style={{
            background: 'radial-gradient(circle, rgba(34, 81, 255, 0.07) 0%, rgba(34, 81, 255, 0) 70%)',
            left: `calc(50% + ${mousePos.x * 200}px - 300px)`,
            top: `calc(45% + ${mousePos.y * 150}px - 300px)`,
          }}
        />
      </div>

      {/* Main Hero Content */}
      <motion.div
        style={{ y: yHero, opacity: opacityHero }}
        className="max-w-editorial mx-auto w-full z-10 space-y-10 sm:space-y-14"
      >
        {/* 1. Top Metadata Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-widest text-muted"
        >
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span>PORTFOLIO / 2026</span>
          </div>
          <span className="text-border hidden sm:inline">/</span>
          <span>NEW DELHI, IN</span>
          <span className="text-border hidden sm:inline">/</span>
          <span className="text-accent font-medium">UI/UX + FRONTEND</span>
        </motion.div>

        {/* 2. Main Large Editorial Statement */}
        <div className="space-y-4 max-w-5xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-sm sm:text-base uppercase tracking-wider text-muted font-medium"
          >
            HI, I'M RUDRANSH.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-hero font-extrabold tracking-editorial uppercase text-foreground leading-[0.98] text-balance"
          >
            I DESIGN DIGITAL EXPERIENCES
            <br />
            <span className="text-foreground/75">AND BUILD THEM INTO REALITY.</span>
          </motion.h1>
        </div>

        {/* 3. Supporting Description & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 border-t border-border"
        >
          <div className="md:col-span-7">
            <p className="text-base sm:text-xl text-muted leading-relaxed font-normal max-w-2xl">
              I create thoughtful interfaces, intuitive product experiences, and responsive digital products — from the first idea to the final interaction.
            </p>
          </div>

          <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton strength={0.3}>
              <Link
                to="/work"
                onMouseEnter={() => setCursor('link')}
                onMouseLeave={resetCursor}
                className="px-7 py-4 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors duration-300 inline-flex items-center gap-2 shadow-sm font-semibold"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <Link
                to="/contact"
                onMouseEnter={() => setCursor('email')}
                onMouseLeave={resetCursor}
                className="px-7 py-4 bg-surface border border-border text-foreground text-xs font-mono uppercase tracking-widest hover:border-foreground hover:bg-background transition-colors duration-300 inline-flex items-center gap-2 font-medium"
              >
                <span>LET'S TALK</span>
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* 4. Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="max-w-editorial mx-auto w-full pt-12 flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted border-t border-border/40"
      >
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight * 0.85, behavior: 'smooth' })}>
          <span>SCROLL TO EXPLORE</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3.5 h-3.5 text-accent" />
          </motion.div>
        </div>

        <span className="hidden sm:inline-block text-[11px] text-muted">
          UI/UX · FRONTEND · DESIGN SYSTEMS
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;

