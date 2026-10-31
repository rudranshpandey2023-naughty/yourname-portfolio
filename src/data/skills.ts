// src/data/skills.ts
import { CapabilityCategory, ApproachPrinciple } from '../types';

export const capabilities: CapabilityCategory[] = [
  {
    title: 'UI/UX DESIGN',
    subtitle: 'Crafting intuitive digital interfaces',
    description: 'Transforming complex digital requirements into structured, visually engaging interfaces that serve both user needs and business goals.',
    items: [
      'User flows',
      'Wireframes',
      'Information architecture',
      'Interface design',
      'Prototyping',
      'Design systems'
    ]
  },
  {
    title: 'PRODUCT DESIGN',
    subtitle: 'End-to-end product thinking',
    description: 'Looking beyond aesthetics to design complete user journeys, cohesive component patterns, and scalable product architecture.',
    items: [
      'User journeys',
      'Interaction design',
      'Product thinking',
      'UX optimization',
      'Responsive systems'
    ]
  },
  {
    title: 'FRONTEND DEVELOPMENT',
    subtitle: 'Bringing interfaces to life with code',
    description: 'Engineering resilient, accessible, and high-performance web applications using modern component-driven frontend architecture.',
    items: [
      'HTML / Semantic markup',
      'Modern CSS',
      'JavaScript (ESNext)',
      'TypeScript',
      'React ecosystem',
      'Tailwind CSS'
    ]
  },
  {
    title: 'CREATIVE DEVELOPMENT',
    subtitle: 'Elevating the digital experience',
    description: 'Infusing digital products with tactile micro-interactions, smooth scroll physics, and thoughtful motion design that feels natural.',
    items: [
      'Motion design',
      'Micro-interactions',
      'Interactive websites',
      'Scroll experiences',
      'Creative interfaces'
    ]
  }
];

export const marqueeTools: string[] = [
  'FIGMA',
  'REACT',
  'TYPESCRIPT',
  'JAVASCRIPT',
  'TAILWIND',
  'GIT',
  'GITHUB',
  'FRAMER',
  'FIGJAM',
  'VS CODE',
];

export const approachPrinciples: ApproachPrinciple[] = [
  {
    number: '01',
    title: 'UNDERSTAND',
    description: 'Start with the problem, users, and context.',
    details: 'Before opening Figma or writing a single line of code, I examine the underlying problem, user friction points, and constraints. Deep context informs every design decision.'
  },
  {
    number: '02',
    title: 'SIMPLIFY',
    description: 'Turn complexity into clear experiences.',
    details: 'Good design removes the unnecessary so the necessary may speak. I deconstruct convoluted workflows into clear, progressive steps that feel effortless.'
  },
  {
    number: '03',
    title: 'DESIGN',
    description: 'Create purposeful interfaces and interactions.',
    details: 'Crafting interfaces with rigorous typographic scale, rhythmic spacing, intuitive visual hierarchy, and purposeful micro-interactions.'
  },
  {
    number: '04',
    title: 'BUILD',
    description: 'Turn the design into a functional digital product.',
    details: 'Bridging the gap between concept and code. Clean, modular, and performant frontend implementation ensures that the intended experience lives in production.'
  }
];

