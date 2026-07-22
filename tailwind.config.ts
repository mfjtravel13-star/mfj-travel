import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        ebony: '#090909',
        champagne: '#f7e7bf',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
} satisfies Config;
