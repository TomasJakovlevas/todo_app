import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#2C3639',
        primary_2: '#121617',
        secondary: '#3F4E4F',
        secondary_l1: '#657172',
        tertiary: '#A27B5C',
        quaternary: '#DCD7C9',
        danger: '#9A3B3B',
        white: '#F1F5F9',
      },
    },
  },
  plugins: [],
};
export default config;
