// src/types/index.ts

export type ProjectCategory = 'ALL' | 'UI/UX' | 'WEB' | 'PRODUCT' | 'FRONTEND' | 'EXPERIMENTS';

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: 'UI/UX' | 'WEB' | 'PRODUCT' | 'FRONTEND' | 'EXPERIMENTS';
  year: string;
  role: string;
  client: string;
  shortDescription: string;
  overview: string;
  problem: string;
  process: string[];
  userFlow: string[];
  wireframes: string;
  visualDesign: string;
  interaction: string;
  development: string;
  result: string;
  technologies: string[];
  reflection: string;
  deliverables: string[];
  mockupType: 'browser' | 'mobile' | 'platform' | 'logistics' | 'sustainable';
  featured?: boolean;
}

export interface Experience {
  year: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  tags: string[];
}

export interface CapabilityCategory {
  title: string;
  subtitle: string;
  description: string;
  items: string[];
}

export interface ApproachPrinciple {
  number: string;
  title: string;
  description: string;
  details: string;
}

export interface SocialLink {
  name: string;
  handle: string;
  url: string;
  platform: string;
}

