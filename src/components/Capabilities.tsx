// src/components/Capabilities.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { capabilities } from '../data/skills';
import { ArrowUpRight } from 'lucide-react';
import SectionHeading from './SectionHeading';

export const Capabilities: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="py-20 px-6 sm:px-10 border-t border-border">
      <div className="max-w-editorial mx-auto space-y-12">
        <SectionHeading
          label="03 / CAPABILITIES"
          title="WHAT I DO"
          subtitle="A multidisciplinary approach spanning user research, interface architecture, and clean production frontend code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((cat, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`p-7 rounded-none border transition-all duration-300 flex flex-col justify-between space-y-8 ${
                  isHovered
                    ? 'bg-surface border-accent shadow-md -translate-y-1'
                    : 'bg-[#FAF9F5] border-border'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-mono text-muted">
                    <span className="text-accent font-bold">0{idx + 1}</span>
                    <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5 text-accent' : 'text-muted'}`} />
                  </div>

                  <div className="space-y-1.5">
                    <h3 className="font-display text-xl font-bold tracking-tight uppercase text-foreground">
                      {cat.title}
                    </h3>
                    <p className="text-xs font-mono text-muted uppercase">
                      {cat.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-border/70 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted block">
                    Core Skills
                  </span>
                  <ul className="space-y-1.5 text-xs text-foreground font-mono">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;

