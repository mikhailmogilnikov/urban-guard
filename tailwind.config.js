import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#FF6100',
              foreground: "#000000",
            },
            focus: "#FF6100",
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#DB4600',
              foreground: "#000000",
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: "#000000",
            },
            focus: "#DB4600",
          },
        },
      },
    }),
  ],
};
