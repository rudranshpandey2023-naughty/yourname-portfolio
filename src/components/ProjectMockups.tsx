// src/components/ProjectMockups.tsx
import React from 'react';
import { Compass, Search, Shield, ArrowUpRight, CheckCircle2, Package, MapPin, Truck, Leaf, Activity, Sparkles, Layers } from 'lucide-react';

interface MockupProps {
  type: 'browser' | 'platform' | 'mobile' | 'logistics' | 'sustainable';
  className?: string;
  isHovered?: boolean;
}

export const ProjectMockup: React.FC<MockupProps> = ({ type, className = '', isHovered = false }) => {
  switch (type) {
    case 'browser':
      return (
        <div className={`relative w-full aspect-[16/10] bg-[#161618] rounded-lg overflow-hidden border border-[#2D2D30] shadow-2xl flex flex-col ${className}`}>
          {/* Browser Chrome Header */}
          <div className="h-10 bg-[#1F1F23] border-b border-[#2C2C30] px-4 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
            </div>

            {/* URL Pill */}
            <div className="flex-1 max-w-md h-6 bg-[#161618] rounded-full border border-[#34343A] px-3 flex items-center gap-2 text-[11px] font-mono text-[#8E8E93]">
              <Compass className="w-3 h-3 text-[#2251FF]" />
              <span className="text-[#E0E0E2]">jiosphere.internal/explore</span>
              <span className="text-[#555] ml-auto">⌘K</span>
            </div>

            <div className="flex items-center gap-2 text-[#8E8E93]">
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#27272A] text-[#2251FF] font-semibold">READER</span>
            </div>
          </div>

          {/* Tab Strip */}
          <div className="h-9 bg-[#18181B] border-b border-[#2C2C30] px-3 flex items-center gap-1.5 text-xs">
            <div className="h-7 px-3 bg-[#242428] rounded-t-md border-t-2 border-[#2251FF] text-white flex items-center gap-2 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2251FF]" />
              <span>Spatial Reading Engine</span>
            </div>
            <div className="h-7 px-3 text-[#777] rounded-t-md hover:bg-[#202024] flex items-center gap-2 transition-colors">
              <span>Ergonomic Tabs (04)</span>
            </div>
          </div>

          {/* Browser Content Area */}
          <div className="flex-1 p-6 sm:p-8 bg-gradient-to-br from-[#121214] to-[#18181C] text-[#E0E0E2] flex flex-col justify-between overflow-hidden">
            <div className="space-y-4 max-w-xl">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#2251FF]/20 text-[#2251FF] border border-[#2251FF]/40 font-bold uppercase tracking-wider">
                  Reliance Jio · Browser Core
                </span>
                <span className="text-xs text-[#666]">v4.2.0-spatial</span>
              </div>
              <h4 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Distraction-Free Spatial Web Navigation.
              </h4>
              <p className="text-xs sm:text-sm text-[#888890] leading-relaxed">
                Bottom-docked tab architecture engineered for modern handheld ergonomics, delivering zero visual clutter and intuitive reading modes.
              </p>
            </div>

            {/* Bottom Ergonomic Dock Preview */}
            <div className="pt-4 border-t border-[#2A2A30] flex items-center justify-between text-xs">
              <div className="flex items-center gap-4 text-[#AAA]">
                <div className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#27C93F]" />
                  <span className="font-mono text-[11px]">Zero-Tracking Active</span>
                </div>
                <div className="hidden sm:flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#2251FF]" />
                  <span className="font-mono text-[11px]">Instant Cache: 12ms</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 rounded bg-[#2251FF] text-white text-[11px] font-mono uppercase tracking-wider font-semibold">
                  Active Redesign
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case 'platform':
      return (
        <div className={`relative w-full aspect-[16/10] bg-[#FAF9F5] rounded-lg overflow-hidden border border-[#E5E3DC] shadow-xl flex flex-col p-6 sm:p-8 justify-between ${className}`}>
          <div className="flex items-center justify-between border-b border-[#E5E3DC] pb-4">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-md bg-[#2251FF] text-white flex items-center justify-center font-bold text-xs">
                In
              </span>
              <div>
                <h5 className="font-display text-sm font-bold text-[#121211]">InTurn Platform</h5>
                <p className="text-[10px] font-mono text-muted uppercase">Career Matching Engine</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-[#2251FF]/10 text-[#2251FF] border border-[#2251FF]/20">
                ● 98% MATCH ACCURACY
              </span>
            </div>
          </div>

          {/* Interactive Cards preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-auto py-2">
            <div className="p-4 rounded-lg bg-white border border-[#E5E3DC] space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-muted">DESIGN ENGINEERING</span>
                <span className="text-[#2251FF] font-semibold text-xs">96% fit</span>
              </div>
              <h6 className="font-display text-base font-bold text-[#121211]">Product Design Fellow</h6>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-[#F5F4EF] text-[10px] font-mono text-[#555]">Figma</span>
                <span className="px-2 py-0.5 rounded bg-[#F5F4EF] text-[10px] font-mono text-[#555]">React</span>
                <span className="px-2 py-0.5 rounded bg-[#F5F4EF] text-[10px] font-mono text-[#555]">Motion</span>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white border border-[#E5E3DC] space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-muted">INTERFACE SYSTEMS</span>
                <span className="text-[#2251FF] font-semibold text-xs">94% fit</span>
              </div>
              <h6 className="font-display text-base font-bold text-[#121211]">UI/UX Systems Lead</h6>
              <div className="flex flex-wrap gap-1.5 pt-1">
                <span className="px-2 py-0.5 rounded bg-[#F5F4EF] text-[10px] font-mono text-[#555]">Design Systems</span>
                <span className="px-2 py-0.5 rounded bg-[#F5F4EF] text-[10px] font-mono text-[#555]">Tailwind</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E5E3DC] flex items-center justify-between text-xs font-mono text-muted">
            <span>Direct Mentor Flow · Verified Review</span>
            <span className="text-foreground font-semibold flex items-center gap-1">
              Explore Matches <ArrowUpRight className="w-3.5 h-3.5 text-[#2251FF]" />
            </span>
          </div>
        </div>
      );

    case 'mobile':
      return (
        <div className={`relative w-full aspect-[16/10] bg-[#18181B] rounded-lg overflow-hidden border border-[#27272A] shadow-2xl flex items-center justify-center p-6 sm:p-8 ${className}`}>
          {/* Centered Phone Canvas Mockup */}
          <div className="w-full max-w-xs bg-[#09090B] rounded-2xl border-2 border-[#3F3F46] p-4 shadow-2xl space-y-3.5">
            <div className="flex items-center justify-between border-b border-[#27272A] pb-2 text-[11px] text-[#A1A1AA]">
              <span className="font-mono font-bold text-white">Altru.app</span>
              <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-[#2251FF] text-white">LIVE</span>
            </div>

            <div className="space-y-1">
              <span className="text-[10px] font-mono text-[#A1A1AA] uppercase">On-Demand Dispatch</span>
              <h5 className="font-display text-lg font-bold text-white">Service in 15 Minutes</h5>
            </div>

            {/* Quick service selector */}
            <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono text-[#D4D4D8]">
              <div className="p-2 rounded bg-[#18181B] border border-[#27272A]">
                <Layers className="w-4 h-4 text-[#2251FF] mx-auto mb-1" />
                <span>Technical</span>
              </div>
              <div className="p-2 rounded bg-[#2251FF]/20 border border-[#2251FF] text-white">
                <Sparkles className="w-4 h-4 text-[#2251FF] mx-auto mb-1" />
                <span>Home Care</span>
              </div>
              <div className="p-2 rounded bg-[#18181B] border border-[#27272A]">
                <MapPin className="w-4 h-4 text-[#2251FF] mx-auto mb-1" />
                <span>Urgent</span>
              </div>
            </div>

            {/* Active Provider Card */}
            <div className="p-2.5 rounded bg-[#18181B] border border-[#27272A] flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-[#27272A] flex items-center justify-center text-[10px] font-bold text-white">
                  RP
                </div>
                <div>
                  <div className="text-white font-medium text-[11px]">Certified Specialist</div>
                  <div className="text-[10px] text-[#A1A1AA]">Arriving in 8 mins</div>
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#2251FF] font-bold">₹499</span>
            </div>
          </div>
        </div>
      );

    case 'logistics':
      return (
        <div className={`relative w-full aspect-[16/10] bg-[#101012] rounded-lg overflow-hidden border border-[#242428] shadow-2xl p-6 sm:p-8 flex flex-col justify-between ${className}`}>
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#242428] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#2251FF] flex items-center justify-center text-white font-bold">
                <Truck className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-display text-sm font-bold text-white">Speedline Dispatch OS</h5>
                <p className="text-[10px] font-mono text-[#777]">Fleet Logistics & Tracking</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30">
                1,420 Active Runs
              </span>
            </div>
          </div>

          {/* Analytical Bento Grid */}
          <div className="grid grid-cols-3 gap-3 my-auto py-2">
            <div className="p-3.5 rounded bg-[#18181C] border border-[#27272D] space-y-1">
              <span className="text-[10px] font-mono text-[#888] uppercase">On-Time SLA</span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">99.4%</div>
              <span className="text-[10px] text-[#22C55E] font-mono">+1.2% this week</span>
            </div>

            <div className="p-3.5 rounded bg-[#18181C] border border-[#27272D] space-y-1">
              <span className="text-[10px] font-mono text-[#888] uppercase">Fleet Latency</span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">18.2m</div>
              <span className="text-[10px] text-[#2251FF] font-mono">Real-time GPS</span>
            </div>

            <div className="p-3.5 rounded bg-[#18181C] border border-[#27272D] space-y-1">
              <span className="text-[10px] font-mono text-[#888] uppercase">Waybill Dispatch</span>
              <div className="font-display text-xl sm:text-2xl font-bold text-white">0.02s</div>
              <span className="text-[10px] text-[#888] font-mono">Instant manifest</span>
            </div>
          </div>

          <div className="pt-3 border-t border-[#242428] flex items-center justify-between text-xs font-mono text-[#888]">
            <span className="flex items-center gap-1.5">
              <Package className="w-3.5 h-3.5 text-[#2251FF]" /> Multi-Hub Distribution Architecture
            </span>
            <span className="text-white font-medium">Operator Suite →</span>
          </div>
        </div>
      );

    case 'sustainable':
      return (
        <div className={`relative w-full aspect-[16/10] bg-[#FAF9F5] rounded-lg overflow-hidden border border-[#E5E3DC] shadow-xl p-6 sm:p-8 flex flex-col justify-between ${className}`}>
          <div className="flex items-center justify-between border-b border-[#E5E3DC] pb-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#10B981]/15 text-[#10B981] flex items-center justify-center font-bold">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <h5 className="font-display text-sm font-bold text-[#121211]">EcoSwitch Initiative</h5>
                <p className="text-[10px] font-mono text-muted">Pocket-Friendly Sustainable Habits</p>
              </div>
            </div>

            <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-[#10B981]/15 text-[#047857] border border-[#10B981]/30">
              -420 KG CO₂ / YEAR
            </span>
          </div>

          {/* Interactive habit swap card */}
          <div className="p-4 rounded-xl bg-white border border-[#E5E3DC] space-y-3 shadow-sm my-auto">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted uppercase">Smart Routine Swap</span>
              <span className="text-[#047857] font-semibold">Saved ₹12,400</span>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <h6 className="font-display text-base font-bold text-[#121211]">Single-Use → Reusable Core</h6>
                <p className="text-xs text-muted">Daily micro-swaps tracked with instant visual delta</p>
              </div>
              <div className="w-10 h-10 rounded-lg bg-[#FAF9F5] border border-[#E5E3DC] flex items-center justify-center font-mono text-xs font-bold text-[#2251FF]">
                94%
              </div>
            </div>

            <div className="w-full bg-[#EFECE6] h-2 rounded-full overflow-hidden">
              <div className="bg-[#10B981] h-full w-[82%]" />
            </div>
          </div>

          <div className="pt-3 border-t border-[#E5E3DC] flex items-center justify-between text-xs font-mono text-muted">
            <span>Pragmatic Environmental Habit Design</span>
            <span className="text-foreground font-semibold flex items-center gap-1">
              Explore Model <ArrowUpRight className="w-3.5 h-3.5 text-[#2251FF]" />
            </span>
          </div>
        </div>
      );

    default:
      return null;
  }
};

export default ProjectMockup;

