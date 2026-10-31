// src/pages/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, ArrowUpRight, Mail, Sparkles, Send } from 'lucide-react';
import MagneticButton from '../components/MagneticButton';
import { personalInfo, socialLinks } from '../data/experience';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'UI/UX Design',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    /**
     * NOTE FOR PRODUCTION INTEGRATION:
     * To connect with Formspree, EmailJS, or custom API:
     * fetch("https://formspree.io/f/YOUR_FORM_ID", { method: "POST", body: JSON.stringify(formData) })
     */
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', projectType: 'UI/UX Design', message: '' });
    }, 700);
  };

  return (
    <div className="pt-28 sm:pt-36 space-y-24 sm:space-y-32">
      {/* 1. Header Section */}
      <section className="px-6 sm:px-10">
        <div className="max-w-editorial mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-muted"
          >
            <span className="text-accent font-bold">04</span>
            <span>/</span>
            <span>COLLABORATION & INQUIRIES</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight uppercase text-foreground leading-[0.98] text-balance max-w-5xl"
          >
            LET'S MAKE SOMETHING
            <br />
            <span className="text-foreground/75">MEANINGFUL.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-xl text-muted max-w-2xl leading-relaxed"
          >
            Have an idea, project, collaboration, or opportunity in mind? I'd love to hear about it.
          </motion.p>
        </div>
      </section>

      {/* 2. Direct Email Banner */}
      <section className="px-6 sm:px-10 border-t border-border pt-16">
        <div className="max-w-editorial mx-auto space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-muted block">
            Direct Email Transmission
          </span>

          <div className="flex flex-wrap items-baseline gap-4 sm:gap-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground hover:text-accent transition-colors duration-200"
            >
              {personalInfo.email}
            </a>

            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-mono uppercase tracking-wider bg-surface border border-border text-foreground hover:border-foreground transition-colors cursor-pointer focus:outline-none"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span className="text-accent font-semibold">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-muted" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Contact Form & Channel Grid */}
      <section className="px-6 sm:px-10 border-t border-border pt-16 pb-20">
        <div className="max-w-editorial mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-foreground">
                Send a Message
              </h2>
              <p className="text-xs font-mono text-muted uppercase">
                Expected reply time: within 24–48 hours
              </p>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-none bg-surface border border-accent/40 space-y-4"
              >
                <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-foreground">
                  MESSAGE SENT.
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  THANK YOU — I'LL GET BACK TO YOU SOON.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="mt-2 text-xs font-mono uppercase tracking-wider text-accent font-semibold hover:underline"
                >
                  Send another message →
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Jane Doe"
                    className="w-full bg-transparent py-3 border-b border-border focus:border-accent text-foreground text-sm font-sans placeholder:text-muted/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="jane@company.com"
                    className="w-full bg-transparent py-3 border-b border-border focus:border-accent text-foreground text-sm font-sans placeholder:text-muted/40 focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Project Type / Scope
                  </label>
                  <select
                    id="projectType"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-transparent py-3 border-b border-border focus:border-accent text-foreground text-sm font-sans focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="UI/UX Design" className="bg-[#F5F4EF] text-foreground">UI/UX Design & Architecture</option>
                    <option value="Frontend Engineering" className="bg-[#F5F4EF] text-foreground">Frontend Engineering (React / TS)</option>
                    <option value="Design Systems" className="bg-[#F5F4EF] text-foreground">Design Systems & Component Kit</option>
                    <option value="Full-Time Role" className="bg-[#F5F4EF] text-foreground">Full-Time Product Role</option>
                    <option value="Other Collaboration" className="bg-[#F5F4EF] text-foreground">Advisory or Other Collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs font-mono uppercase tracking-widest text-muted">
                    Message / Project Brief
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your product goals, scope, and timeline..."
                    className="w-full bg-transparent py-3 border-b border-border focus:border-accent text-foreground text-sm font-sans placeholder:text-muted/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <MagneticButton strength={0.25}>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 bg-foreground text-background text-xs font-mono uppercase tracking-widest hover:bg-accent transition-colors font-semibold inline-flex items-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
                    >
                      <span>{isSubmitting ? 'TRANSMITTING...' : 'SEND MESSAGE →'}</span>
                    </button>
                  </MagneticButton>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Channels & Availability Details */}
          <div className="lg:col-span-5 space-y-10">
            {/* Social Directory */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-muted block">
                Verified Social Channels
              </span>

              <div className="divide-y divide-border border-y border-border text-sm">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-4 group hover:text-accent transition-colors"
                  >
                    <span className="font-semibold uppercase text-foreground group-hover:text-accent">
                      {social.name}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-muted group-hover:text-accent">
                      <span>/{social.handle}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability & Location Card */}
            <div className="p-8 bg-surface border border-border space-y-4 text-xs font-mono text-muted">
              <span className="text-foreground font-bold uppercase tracking-wider block">
                Logistics & Availability
              </span>
              <div className="space-y-2">
                <p><strong className="text-foreground">Base:</strong> {personalInfo.location}</p>
                <p><strong className="text-foreground">Timezone:</strong> IST (UTC+5:30) · Global Collaboration</p>
                <p><strong className="text-foreground">Working Style:</strong> Async-friendly, high communication cadence</p>
                <p><strong className="text-foreground">Status:</strong> Open to product companies, design studios, and freelance contracts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

