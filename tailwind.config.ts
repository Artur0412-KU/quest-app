import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': {'max': '1024px'},
        'max-sm': {'max': '550px'}
      }
    },
  },
  daisyui: {
    themes: ['retro'],
  },

  plugins: [
      require('daisyui'),
  ],
} satisfies Config;
