// src/components/SectionHeading.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
  badge?: string;
  align?: 'left' | 'center' | 'between';
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  badge,
  align = 'left',
  children,
}) => {
  return (
    <div className={`space-y-4 mb-12 sm:mb-16 ${align === 'center' ? 'text-center max-w-3xl mx-auto' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5 }}
        className={`flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <span className="text-accent font-semibold">{label}</span>
        <span className="text-border">/</span>
        <span>PORTFOLIO</span>
        {badge && (
          <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-accent/10 text-accent font-semibold">
            {badge}
          </span>
        )}
      </motion.div>

      <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6`}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground uppercase text-balance"
        >
          {title}
        </motion.h2>

        {children && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="self-start md:self-end"
          >
            {children}
          </motion.div>
        )}
      </div>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;

