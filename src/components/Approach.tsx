// src/components/Approach.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { approachPrinciples } from '../data/skills';
import SectionHeading from './SectionHeading';

export const Approach: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number | null>(0);

  return (
    <section className="py-20 px-6 sm:px-10 border-t border-border">
      <div className="max-w-editorial mx-auto space-y-12">
        <SectionHeading
          label="02 / PHILOSOPHY"
          title="DESIGN APPROACH"
          subtitle="Four core principles guiding every digital product from problem exploration to production code."
        />

        <div className="divide-y divide-border border-y border-border">
          {approachPrinciples.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                onMouseEnter={() => setActiveIdx(idx)}
                className={`group py-8 sm:py-10 transition-colors duration-300 cursor-pointer ${
                  isActive ? 'bg-surface/50' : 'hover:bg-surface/20'
                }`}
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  {/* Number */}
                  <div className="md:col-span-2 flex items-baseline gap-3">
                    <span className={`font-mono text-sm sm:text-base font-bold transition-transform duration-300 ${
                      isActive ? 'text-accent translate-x-1' : 'text-muted'
                    }`}>
                      {item.number}
                    </span>
                    <span className="text-border">/</span>
                  </div>

                  {/* Title & Core Statement */}
                  <div className="md:col-span-5 space-y-1">
                    <h3 className={`font-display text-2xl sm:text-3xl font-bold tracking-tight uppercase transition-all duration-300 ${
                      isActive ? 'text-accent translate-x-2' : 'text-foreground'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono text-muted uppercase tracking-wider">
                      {item.description}
                    </p>
                  </div>

                  {/* Expanded Detail Description */}
                  <div className="md:col-span-5">
                    <p className="text-sm text-muted leading-relaxed">
                      {item.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;

