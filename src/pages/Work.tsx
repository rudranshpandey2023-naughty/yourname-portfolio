// src/pages/Work.tsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import { projects, projectCategories } from '../data/projects';
import { Project, ProjectCategory } from '../types';

export const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'ALL') return true;
    return project.category === activeCategory;
  });

  return (
    <div className="pt-28 sm:pt-36 space-y-16 sm:space-y-24">
      {/* 1. Header Section */}
      <section className="px-6 sm:px-10">
        <div className="max-w-editorial mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted"
          >
            <span className="text-accent font-bold">03</span>
            <span>/</span>
            <span>PORTFOLIO ARCHIVE</span>
            <span>·</span>
            <span>2024 — 2026</span>
          </motion.div>

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 pb-6 border-b border-border">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-foreground leading-[0.98]"
            >
              SELECTED WORK
            </motion.h1>

            <span className="font-mono text-xs uppercase tracking-wider text-muted">
              ({filteredProjects.length} of {projects.length} Projects)
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-muted max-w-3xl leading-relaxed"
          >
            A collection of digital products, interfaces, websites, and experiments exploring the intersection of design and technology.
          </motion.p>

          {/* Minimal Filter Navigation */}
          <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-widest">
            {projectCategories.map((cat) => {
              const isSelected = activeCategory === cat.value;
              const count = cat.value === 'ALL'
                ? projects.length
                : projects.filter(p => p.category === cat.value).length;

              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setActiveCategory(cat.value)}
                  className={`relative py-1.5 px-3 transition-colors duration-200 cursor-pointer focus:outline-none rounded-none border ${
                    isSelected
                      ? 'border-accent bg-accent/5 text-accent font-bold'
                      : 'border-border text-muted hover:text-foreground hover:border-foreground'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span className="ml-1.5 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Editorial Project Showcase */}
      <section className="px-6 sm:px-10 pb-20">
        <div className="max-w-editorial mx-auto space-y-6">
          <motion.div layout className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                // Editorial layout assignment based on project index
                let variant: 'full' | 'asymmetric' | 'standard' = 'standard';
                if (project.index === '01') variant = 'full';
                else if (project.index === '02') variant = 'asymmetric';

                return (
                  <motion.div
                    layout
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45 }}
                  >
                    <ProjectCard
                      project={project}
                      layoutVariant={variant}
                      onSelect={setSelectedProject}
                      index={idx}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* Contact Teaser */}
          <div className="pt-20 border-t border-border flex flex-col sm:flex-row items-baseline justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-1">Inquiries</span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground">
                Interested in starting a project?
              </h3>
              <p className="text-xs sm:text-sm text-muted mt-1">
                Reach out directly for freelance contracts, full-time product roles, or design advisory.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold hover:underline"
            >
              <span>Go to Contact Page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        allProjects={projects}
      />
    </div>
  );
};

export default Work;

