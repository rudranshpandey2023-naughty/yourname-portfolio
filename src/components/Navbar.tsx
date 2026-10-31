// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useCursor } from '../context/CursorContext';
import { personalInfo } from '../data/experience';

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/about', label: 'ABOUT' },
  { path: '/work', label: 'WORK' },
  { path: '/contact', label: 'CONTACT' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { setCursor, resetCursor } = useCursor();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'py-3.5 bg-[#F5F4EF]/85 backdrop-blur-md border-b border-[#E5E3DC] shadow-xs'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-editorial mx-auto px-6 sm:px-10 flex items-center justify-between">
          {/* Brand / Name */}
          <NavLink
            to="/"
            onMouseEnter={() => setCursor('link')}
            onMouseLeave={resetCursor}
            className="group flex items-baseline gap-3 focus:outline-none"
          >
            <span className="font-display text-lg sm:text-xl font-black tracking-tighter uppercase text-foreground">
              RUDRANSH
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-muted hidden md:inline-block">
              / UI/UX + FRONTEND
            </span>
          </NavLink>

          {/* Desktop Navigation & Status */}
          <div className="hidden md:flex items-center gap-8">
            {/* Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border text-[11px] font-mono uppercase text-muted tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            {/* Links */}
            <nav className="flex items-center gap-7 text-xs font-mono tracking-widest uppercase">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onMouseEnter={() => setCursor('link')}
                  onMouseLeave={resetCursor}
                  className={({ isActive }) =>
                    `relative py-1 transition-colors duration-200 ${
                      isActive
                        ? 'text-foreground font-bold'
                        : 'text-muted hover:text-foreground'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span>{link.label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent"
                          transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setIsMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-md border border-border bg-surface text-foreground focus:outline-none"
          >
            {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F4EF] pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-8">
              <div className="flex items-center gap-2 pb-4 border-b border-border text-xs font-mono uppercase tracking-widest text-muted">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span>Available for opportunities</span>
              </div>

              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsMobileOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between py-3 border-b border-border font-display text-3xl font-bold tracking-tight uppercase ${
                          isActive ? 'text-accent' : 'text-foreground'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <span className="text-xs font-mono text-muted">0{idx + 1}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-border space-y-3 text-xs font-mono text-muted">
              <p className="text-foreground font-semibold uppercase">{personalInfo.name}</p>
              <p>{personalInfo.email}</p>
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://linkedin.com/in/rudranshpandey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href="https://github.com/rudranshpandey2023-naughty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

