import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cteal: '#32949B',
        cred: '#E4959E',
        black1: '#666666/75',
        black0: '#333333',
      },
      screens: {
        xs: '375px',
        xr: '390px',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
