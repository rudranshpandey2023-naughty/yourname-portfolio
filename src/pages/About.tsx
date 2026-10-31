// src/pages/About.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles, MapPin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import Approach from '../components/Approach';
import Capabilities from '../components/Capabilities';
import ExperienceTimeline from '../components/ExperienceTimeline';
import Marquee from '../components/Marquee';
import MagneticButton from '../components/MagneticButton';
import { personalInfo } from '../data/experience';

export const About: React.FC = () => {
  return (
    <div className="pt-28 sm:pt-36 space-y-24 sm:space-y-32">
      {/* 1. Page Hero */}
      <section className="px-6 sm:px-10">
        <div className="max-w-editorial mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted"
          >
            <span className="text-accent font-bold">02</span>
            <span>/</span>
            <span>ABOUT THE PRACTICE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-foreground leading-[0.98]"
          >
            DESIGNER.
            <br />
            DEVELOPER.
            <br />
            <span className="text-foreground/75">PROBLEM SOLVER.</span>
          </motion.h1>
        </div>
      </section>

      {/* 2. Biography & Perspective */}
      <section className="px-6 sm:px-10 border-t border-border pt-16 sm:pt-24">
        <div className="max-w-editorial mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Fast Facts & Core Stance */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-none bg-surface border border-border space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-semibold block">
                Profile Snapshot
              </span>
              <div className="space-y-4 text-sm font-mono text-muted">
                <div className="flex justify-between border-b border-border/80 pb-2">
                  <span>Name</span>
                  <span className="text-foreground font-semibold">{personalInfo.name}</span>
                </div>
                <div className="flex justify-between border-b border-border/80 pb-2">
                  <span>Role</span>
                  <span className="text-foreground font-semibold">UI/UX & Frontend</span>
                </div>
                <div className="flex justify-between border-b border-border/80 pb-2">
                  <span>Base</span>
                  <span className="text-foreground font-semibold">{personalInfo.location}</span>
                </div>
                <div className="flex justify-between border-b border-border/80 pb-2">
                  <span>Status</span>
                  <span className="text-[#10B981] font-semibold">● Available for Work</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="w-full py-3 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors block text-center font-semibold"
                >
                  Contact Directly
                </a>
              </div>
            </div>

            {/* Quick Principles */}
            <div className="p-6 border-l-2 border-accent space-y-2 text-xs font-mono text-muted">
              <span className="text-foreground font-bold uppercase tracking-wider block">Core Belief</span>
              <p className="leading-relaxed">
                "Understanding how an interface is built fundamentally changes how one designs systems, interactions, and tactile experiences."
              </p>
            </div>
          </div>

          {/* Right Column: Full Narrative Biography */}
          <div className="lg:col-span-7 space-y-8 text-base sm:text-lg text-muted leading-relaxed font-normal">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-foreground text-xl sm:text-2xl font-medium leading-snug tracking-tight"
            >
              I'm a UI/UX Designer and Frontend Developer focused on creating digital experiences that are intuitive, visually engaging, and built with purpose.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My approach sits at the intersection of design and technology. I care about how a product looks, but more importantly, how it feels to use and how effectively it solves a real problem.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I enjoy working across the product experience — understanding a problem, shaping user flows, designing interfaces, creating interactions, and translating those ideas into responsive frontend experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              I believe good design should not stop at the Figma file. Understanding how an interface is built helps me design better systems, interactions, and experiences.
            </motion.p>

            <div className="pt-6 flex items-center gap-4">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold hover:underline"
              >
                <span>View Portfolio Projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Approach Principles */}
      <Approach />

      {/* 4. Capabilities (What I Do) */}
      <Capabilities />

      {/* 5. Tool Tape */}
      <Marquee />

      {/* 6. Experience History */}
      <ExperienceTimeline />

      {/* 7. Next Step Navigation */}
      <section className="px-6 sm:px-10 border-t border-border py-20 bg-surface/30">
        <div className="max-w-editorial mx-auto flex flex-col sm:flex-row items-baseline justify-between gap-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-muted block mb-2">Next Chapter</span>
            <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-foreground">
              Explore Selected Case Studies
            </h3>
          </div>

          <MagneticButton strength={0.25}>
            <Link
              to="/work"
              className="px-7 py-3.5 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors font-semibold inline-flex items-center gap-2"
            >
              <span>Go to Work (05)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};

export default About;

