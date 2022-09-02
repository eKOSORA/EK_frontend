/** @type {import('tailwindcss').Config} */
const colors =require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx}", "./components/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui', ],
      'serif': ['ui-serif', 'Georgia', ],
      'mono': ['ui-monospace', 'SFMono-Regular', ],
      'display': ['Oswald', ],
      'body': ['"Open Sans"', ],
      'questrial': ['"Questrial"', ],
    },
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
