/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F4EF',
        foreground: '#121211',
        muted: '#767571',
        border: '#E5E3DC',
        surface: '#EBE9E2',
        'surface-light': '#FAF9F6',
        accent: {
          DEFAULT: '#2251FF',
          hover: '#183FD8',
          light: '#EEF2FF',
          subtle: 'rgba(34, 81, 255, 0.08)',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3.2rem, 8vw, 8.5rem)',
        'display-lg': 'clamp(2.5rem, 5.5vw, 5.8rem)',
        'display-md': 'clamp(2rem, 4vw, 4rem)',
        'display-sm': 'clamp(1.5rem, 2.5vw, 2.4rem)',
      },
      letterSpacing: {
        'editorial': '-0.035em',
        'tightest': '-0.04em',
        'superwide': '0.12em',
      },
      maxWidth: {
        'editorial': '1440px',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
};
