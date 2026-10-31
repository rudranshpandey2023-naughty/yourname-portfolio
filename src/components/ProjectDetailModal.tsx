// src/components/ProjectDetailModal.tsx
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, Check, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Project } from '../types';
import ProjectMockup from './ProjectMockups';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  allProjects: Project[];
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  isOpen,
  onClose,
  onSelectProject,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#121211]/80 backdrop-blur-sm cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl max-h-[92vh] bg-[#F5F4EF] rounded-none overflow-y-auto z-10 border border-[#E5E3DC] shadow-2xl flex flex-col"
          >
            {/* Sticky Header */}
            <div className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#F5F4EF]/95 backdrop-blur-md border-b border-[#E5E3DC]">
              <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-muted">
                <span className="text-foreground font-bold">{project.index}</span>
                <span>/</span>
                <span className="text-foreground font-medium">{project.title}</span>
                <span className="hidden sm:inline-block">·</span>
                <span className="hidden sm:inline-block text-accent font-semibold">{project.category}</span>
              </div>

              <button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider text-foreground hover:bg-[#EBE9E2] transition-colors focus:outline-none"
                aria-label="Close project modal"
              >
                <span>Close</span>
                <X className="w-4 h-4 text-muted" />
              </button>
            </div>

            {/* Case Study Body */}
            <div className="p-6 sm:p-10 md:p-14 space-y-16">
              {/* Header Title Section */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono uppercase text-muted tracking-wider">
                  <span>Client: {project.client}</span>
                  <span>·</span>
                  <span>Year: {project.year}</span>
                  <span>·</span>
                  <span>Role: {project.role}</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground uppercase leading-tight">
                  {project.title}
                </h1>

                <p className="text-lg sm:text-xl text-muted font-normal leading-relaxed max-w-3xl">
                  {project.shortDescription}
                </p>
              </div>

              {/* Large Visual Showcase */}
              <div className="w-full">
                <ProjectMockup type={project.mockupType} />
              </div>

              {/* 1. Overview & The Problem */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-[#E5E3DC]">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
                    01 / CONTEXT
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                    Overview & Challenge
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-6 text-muted text-base leading-relaxed">
                  <p className="text-foreground text-lg leading-relaxed font-medium">
                    {project.overview}
                  </p>
                  <div className="p-6 rounded-lg bg-[#EBE9E2]/70 border border-[#E5E3DC] space-y-2">
                    <span className="text-xs font-mono uppercase text-foreground font-bold tracking-wider block">
                      The Core Problem
                    </span>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Process & User Flow */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-[#E5E3DC]">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
                    02 / PROCESS
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                    Approach & Flow
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-8">
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase text-foreground font-bold tracking-wider">
                      Iterative Process Milestones
                    </h4>
                    <ul className="space-y-2 text-sm text-muted">
                      {project.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-accent font-mono text-xs mt-0.5 font-bold">0{idx + 1}</span>
                          <span className="text-foreground/90">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-[#E5E3DC]/60">
                    <h4 className="text-xs font-mono uppercase text-foreground font-bold tracking-wider">
                      Core User Journey
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                      {project.userFlow.map((flow, idx) => (
                        <div key={idx} className="p-3.5 rounded bg-white border border-[#E5E3DC] space-y-1">
                          <span className="text-accent font-bold block">STEP {idx + 1}</span>
                          <p className="text-foreground font-sans text-xs">{flow}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Wireframes, Visual Design, Interaction */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-[#E5E3DC]">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
                    03 / EXECUTION
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                    Interface & Interaction
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-6 text-sm text-muted leading-relaxed">
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase text-foreground font-bold">Structural Wireframing</h4>
                    <p>{project.wireframes}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase text-foreground font-bold">Visual Design Philosophy</h4>
                    <p>{project.visualDesign}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase text-foreground font-bold">Interaction & Micro-Motion</h4>
                    <p>{project.interaction}</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase text-foreground font-bold">Frontend Development</h4>
                    <p>{project.development}</p>
                  </div>
                </div>
              </div>

              {/* 4. Results & Technologies */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-10 border-t border-[#E5E3DC]">
                <div className="md:col-span-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block mb-2">
                    04 / OUTCOME
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-foreground">
                    Result & Stack
                  </h3>
                </div>

                <div className="md:col-span-8 space-y-6">
                  <p className="text-base text-foreground/90 leading-relaxed font-medium">
                    {project.result}
                  </p>

                  <div className="space-y-2.5">
                    <span className="text-xs font-mono uppercase text-muted tracking-wider block">
                      Technologies & Tools
                    </span>
                    <div className="flex flex-wrap gap-2 text-xs font-mono">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white border border-[#E5E3DC] text-foreground font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-lg bg-[#EBE9E2]/60 border border-[#E5E3DC] space-y-2 mt-4">
                    <span className="text-xs font-mono uppercase text-accent font-bold tracking-wider block">
                      Personal Reflection
                    </span>
                    <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                      "{project.reflection}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal Footer / Navigation to Next Project */}
              <div className="pt-10 border-t border-[#E5E3DC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={onClose}
                  className="text-xs font-mono uppercase tracking-wider text-muted hover:text-foreground transition-colors"
                >
                  ← Return to Work
                </button>

                <button
                  onClick={() => onSelectProject(nextProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background text-xs font-mono uppercase tracking-wider hover:bg-accent transition-colors"
                >
                  <span>Next: {nextProject.title} ({nextProject.index})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectDetailModal;

