/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'mmsm': '360px',
      'msm': '435px',
      'smm20': '620px',
      'sm': '640px',
      'sm10': '650px',
      'md': '768px',
      'mlg': '800px',
      'lg': '1024px',
      'mxl': '1335px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      keyframes: {
        ring: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' }
        }
      },
      animation: {
        ring: 'ring .5s ease-in-out',
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui',],
      'serif': ['ui-serif', 'Georgia',],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
      'questrial': ['"Questrial"',],
    },
    colors: {
      ...colors,
      "delete-red": "#d72222",
      'ek-blue': {
        DEFAULT: '#3F7CAC',
        '50': '#3F7CAC',
        '75': '#4CA7CE',
        '100': '#376D97',
        '200': '#28506E',
        '300': '#193245',
        '400': '#0A141C',
      },
    }
  },
  plugins: [],
}
