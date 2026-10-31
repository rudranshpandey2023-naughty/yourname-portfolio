// src/components/ExperienceTimeline.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experience';
import SectionHeading from './SectionHeading';
import { MapPin } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section className="py-20 px-6 sm:px-10 border-t border-border">
      <div className="max-w-editorial mx-auto space-y-12">
        <SectionHeading
          label="04 / TRAJECTORY"
          title="EXPERIENCE & ROLES"
          subtitle="Selected industry positions and product design collaborations."
        />

        <div className="divide-y divide-border border-y border-border">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + exp.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline hover:bg-surface/30 transition-colors p-4 -mx-4 rounded-none"
            >
              <div className="md:col-span-3 space-y-1">
                <span className="font-mono text-xs uppercase text-accent font-bold tracking-wider block">
                  {exp.period}
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-muted">
                  <MapPin className="w-3 h-3 text-muted" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="md:col-span-4 space-y-1">
                <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                  {exp.role}
                </h3>
                <p className="font-mono text-xs uppercase text-foreground font-semibold">
                  {exp.company}
                </p>
              </div>

              <div className="md:col-span-5 space-y-4">
                <p className="text-sm text-muted leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-1 text-xs font-mono">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded bg-surface border border-border text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;

