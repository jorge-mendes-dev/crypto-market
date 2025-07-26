// tailwind.config.js
/** @type {import('tailwindcss').Config} */

import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {},
      animation: {
        vote: 'vote 1s ease-in-out',
      },
    },
  },
  plugins: [],
} satisfies Config;
