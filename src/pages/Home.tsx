// src/pages/Home.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import ProjectDetailModal from '../components/ProjectDetailModal';
import Approach from '../components/Approach';
import Capabilities from '../components/Capabilities';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import { projects } from '../data/projects';
import { Project } from '../types';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Feature first 3 projects on the home page
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="space-y-24 sm:space-y-32">
      {/* 1. Editorial Hero */}
      <Hero />

      {/* 2. Large Editorial Intro Statement */}
      <section className="py-20 px-6 sm:px-10 border-t border-border">
        <div className="max-w-editorial mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 items-baseline">
          <div className="md:col-span-3">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
              01 / INTRO
            </span>
            <span className="text-xs font-mono uppercase text-muted tracking-wider mt-1 block">
              DESIGN PHILOSOPHY
            </span>
          </div>

          <div className="md:col-span-9 space-y-8">
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight uppercase text-foreground leading-[1.05] text-balance"
            >
              I CARE ABOUT HOW DIGITAL PRODUCTS LOOK, FEEL, AND WORK.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-6 border-t border-border text-muted"
            >
              <div className="sm:col-span-8">
                <p className="text-base sm:text-lg leading-relaxed font-normal">
                  My work sits between design and technology. I explore how thoughtful UX, strong visual systems, and clean frontend development can come together to create experiences that are useful, intuitive, and memorable.
                </p>
              </div>

              <div className="sm:col-span-4 flex sm:justify-end items-baseline">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-foreground font-semibold hover:text-accent transition-colors group"
                >
                  <span>Read Full Background</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Featured Selected Work */}
      <section className="py-20 px-6 sm:px-10 border-t border-border">
        <div className="max-w-editorial mx-auto space-y-12">
          <SectionHeading
            label="02 / SELECTED WORK"
            title="FEATURED PROJECTS"
            subtitle="Commercial redesigns, product architectures, and frontend applications."
          >
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold hover:underline"
            >
              <span>Explore All (05) Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </SectionHeading>

          {/* Project List with Editorial Layout Variations */}
          <div className="space-y-6">
            <ProjectCard
              project={featuredProjects[0]}
              layoutVariant="full"
              onSelect={setSelectedProject}
              index={0}
            />

            <ProjectCard
              project={featuredProjects[1]}
              layoutVariant="asymmetric"
              onSelect={setSelectedProject}
              index={1}
            />

            <ProjectCard
              project={featuredProjects[2]}
              layoutVariant="standard"
              onSelect={setSelectedProject}
              index={2}
            />
          </div>

          <div className="pt-8 text-center">
            <MagneticButton strength={0.3}>
              <Link
                to="/work"
                className="px-8 py-4 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors font-semibold inline-flex items-center gap-2 shadow-sm"
              >
                <span>Browse Complete Work Archive (05)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* 4. Marquee of Tools */}
      <Marquee />

      {/* 5. Design Approach */}
      <Approach />

      {/* 6. Capabilities */}
      <Capabilities />

      {/* 7. Bottom Call to Action Teaser */}
      <section className="py-24 px-6 sm:px-10 border-t border-border bg-surface/30">
        <div className="max-w-editorial mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
              05 / COLLABORATION
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight uppercase text-foreground leading-tight">
              Have a project or collaboration in mind?
            </h2>
            <p className="text-sm sm:text-base text-muted leading-relaxed">
              Available for select opportunities, design systems, and frontend engineering roles.
            </p>
          </div>

          <MagneticButton strength={0.3}>
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-white text-xs font-mono uppercase tracking-widest hover:bg-accent-hover transition-colors font-semibold inline-flex items-center gap-2 shadow-md whitespace-nowrap self-start md:self-auto"
            >
              <span>Get in Touch →</span>
            </Link>
          </MagneticButton>
        </div>
      </section>

      {/* Project Case Study Modal */}
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

export default Home;

