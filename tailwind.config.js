/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: ["./pages/**/*.{html,js,jsx}", "./components/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      'ek-blue': {
        DEFAULT: '#3F7CAC',
        '50': '#3F7CAC',
        '100': '#376D97',
        '200': '#28506E',
        '300': '#193245',
        '400': '#0A141C',
      },
    }
  },
  plugins: [],
}