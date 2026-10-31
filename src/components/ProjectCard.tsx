// src/components/ProjectCard.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { useCursor } from '../context/CursorContext';
import ProjectMockup from './ProjectMockups';

interface ProjectCardProps {
  project: Project;
  layoutVariant?: 'full' | 'asymmetric' | 'floating' | 'bento' | 'standard';
  onSelect: (project: Project) => void;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  layoutVariant = 'standard',
  onSelect,
  index,
}) => {
  const { setCursor, resetCursor } = useCursor();
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursor('project', 'VIEW');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    resetCursor();
  };

  // 1. FULL WIDTH HERO FEATURE (Project 01 - JioSphere)
  if (layoutVariant === 'full') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer space-y-6 pt-10 pb-16 border-b border-border"
      >
        {/* Editorial Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 py-3 border-b border-border/80 text-xs font-mono uppercase tracking-wider text-muted">
          <div className="flex items-center gap-4">
            <span className="font-bold text-foreground text-sm">{project.index}</span>
            <span className="text-border">/</span>
            <span className="font-semibold text-foreground">{project.title}</span>
            <span className="hidden sm:inline-block text-accent">· {project.category}</span>
          </div>

          <div className="flex items-center gap-6">
            <span>Client: {project.client}</span>
            <span>·</span>
            <span>{project.year}</span>
            <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-foreground group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300">
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </div>

        {/* Large Visual Showcase with slight parallax & hover scale */}
        <div className="relative w-full overflow-hidden bg-surface rounded-lg p-2 sm:p-4 border border-border/60 transition-colors duration-500 group-hover:border-accent/40">
          <motion.div
            animate={{ scale: isHovered ? 1.02 : 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectMockup type={project.mockupType} isHovered={isHovered} />
          </motion.div>
        </div>

        {/* Bottom Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2 items-baseline">
          <div className="md:col-span-8">
            <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors duration-300">
              {project.subtitle}
            </h3>
            <p className="mt-2 text-sm sm:text-base text-muted leading-relaxed max-w-2xl">
              {project.shortDescription}
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex flex-wrap gap-1.5 md:justify-end text-xs font-mono">
              {project.technologies.slice(0, 3).map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded bg-surface border border-border text-foreground/80">
                  {tech}
                </span>
              ))}
            </div>

            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold group-hover:underline">
              <span>View Case Study</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </motion.article>
    );
  }

  // 2. ASYMMETRIC TWO-COLUMN (Project 02 - InTurn)
  if (layoutVariant === 'asymmetric') {
    return (
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: index * 0.08 }}
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group cursor-pointer grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 py-14 border-b border-border items-center"
      >
        <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
          <div className="flex items-center gap-3 text-xs font-mono uppercase text-muted tracking-wider">
            <span className="font-bold text-foreground text-sm">{project.index}</span>
            <span>/</span>
            <span className="text-accent font-semibold">{project.category}</span>
            <span>·</span>
            <span>{project.year}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-foreground uppercase group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-sm sm:text-base text-muted leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 text-xs font-mono pt-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded bg-surface border border-border text-foreground/80">
                {tech}
              </span>
            ))}
          </div>

          <div className="pt-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground font-semibold group-hover:text-accent transition-colors">
              <span>View Project Details</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="relative overflow-hidden bg-surface rounded-lg p-2 sm:p-4 border border-border/60 group-hover:border-accent/40 transition-colors">
            <motion.div
              animate={{ scale: isHovered ? 1.02 : 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectMockup type={project.mockupType} isHovered={isHovered} />
            </motion.div>
          </div>
        </div>
      </motion.article>
    );
  }

  // 3. FLOATING METADATA / BENTO STYLE (Default & Fallback)
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group cursor-pointer space-y-5 py-12 border-b border-border"
    >
      <div className="flex items-baseline justify-between py-2 border-b border-border text-xs font-mono uppercase tracking-wider text-muted">
        <div className="flex items-center gap-3">
          <span className="font-bold text-foreground text-sm">{project.index}</span>
          <span>/</span>
          <span className="font-semibold text-foreground">{project.title}</span>
          <span className="text-accent">· {project.category}</span>
        </div>
        <div className="flex items-center gap-3">
          <span>{project.year}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
        </div>
      </div>

      <div className="relative w-full overflow-hidden bg-surface rounded-lg p-2 sm:p-4 border border-border/60 group-hover:border-accent/40 transition-colors">
        <motion.div
          animate={{ scale: isHovered ? 1.02 : 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <ProjectMockup type={project.mockupType} isHovered={isHovered} />
        </motion.div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3 pt-1">
        <div>
          <h4 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-foreground group-hover:text-accent transition-colors">
            {project.subtitle}
          </h4>
          <p className="text-xs sm:text-sm text-muted mt-1 max-w-xl leading-relaxed">
            {project.shortDescription}
          </p>
        </div>

        <span className="font-mono text-xs uppercase text-accent font-semibold whitespace-nowrap self-start sm:self-auto group-hover:underline">
          View Case Study →
        </span>
      </div>
    </motion.article>
  );
};

export default ProjectCard;

