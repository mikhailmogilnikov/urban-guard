/* eslint-disable import/no-import-module-exports */
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
    extend: {
      screens: {
        xl2: '1720px',
      },
      animation: {
        borderPulseRed: 'borderPulseRed 4s linear infinite',
        borderPulseYellow: 'borderPulseYellow 4s linear infinite',
      },
      keyframes: {
        borderPulseRed: {
          '0%': { borderColor: 'rgba(255, 255, 255, 0.2)' },
          '50%': { borderColor: 'rgba(255, 0, 0, 0.4)' },
          '100%': { borderColor: 'rgba(255, 255, 255, 0.2)' },
        },
        borderPulseYellow: {
          '0%': { borderColor: 'rgba(255, 255, 255, 0.2)' },
          '50%': { borderColor: 'rgba(255, 196, 0, 0.4)' },
          '100%': { borderColor: 'rgba(255, 255, 255, 0.2)' },
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#FF6100',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: 'hsl(0, 74.69%, 52.58%)',
              foreground: '#ffffff',
            },
            focus: '#FF6100',
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: '#DB4600',
              foreground: '#000000',
            },
            danger: {
              DEFAULT: '#df2a2a',
              foreground: '#000000',
            },
            success: {
              DEFAULT: 'rgb(58, 171, 64)',
              foreground: '#000000',
            },
            focus: '#DB4600',
          },
        },
      },
    }),
  ],
};
