// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/experience';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-[#F5F4EF] py-16 px-6 sm:px-10 mt-20">
      <div className="max-w-editorial mx-auto space-y-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-6 space-y-3">
            <Link to="/" className="font-display text-2xl font-bold tracking-tight uppercase text-foreground">
              {personalInfo.name}
            </Link>
            <p className="text-xs font-mono uppercase tracking-widest text-muted">
              UI/UX DESIGNER & FRONTEND DEVELOPER
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span>Available for select opportunities & collaborations</span>
            </div>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block">
              Navigation
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-foreground">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">01 / Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">02 / About</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-accent transition-colors">03 / Work</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">04 / Contact</Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-muted block">
              Network
            </span>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-foreground">
              {socialLinks.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-accent transition-colors group"
                  >
                    <span>{social.name}</span>
                    <ArrowUpRight className="w-3 h-3 text-muted group-hover:text-accent transition-colors" />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-1.5 hover:text-accent transition-colors text-muted"
                >
                  <span>{personalInfo.email}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-wider text-muted">
          <div>
            <span>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          </div>

          <div className="text-center">
            <span className="text-foreground/80 font-medium">DESIGNED & BUILT WITH INTENTION.</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-foreground hover:text-accent transition-colors focus:outline-none cursor-pointer"
            aria-label="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

