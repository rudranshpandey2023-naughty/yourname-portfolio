// src/components/Marquee.tsx
import React from 'react';
import { marqueeTools } from '../data/skills';

interface MarqueeProps {
  speed?: string;
  className?: string;
}

export const Marquee: React.FC<MarqueeProps> = ({ className = '' }) => {
  const tools = [...marqueeTools, ...marqueeTools, ...marqueeTools];

  return (
    <div className={`overflow-hidden border-y border-border py-4 bg-surface/40 select-none group ${className}`}>
      <div className="flex w-max items-center animate-marquee group-hover:[animation-play-state:paused] text-xs font-mono tracking-widest uppercase text-muted">
        {tools.map((tool, idx) => (
          <span key={idx} className="flex items-center gap-6 px-6">
            <span className="hover:text-foreground transition-colors font-medium text-foreground/80">{tool}</span>
            <span className="text-accent/60 text-[10px]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

