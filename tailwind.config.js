/** @type {import('tailwindcss').Config} */
const colors =require('tailwindcss/colors')

module.exports = {
  content: ["./pages/**/*.{html,js,jsx,tsx}", "./components/**/*.{html,js,jsx,tsx}"],
  theme: {
    screens: {
      'mmsm': '380px',
      'msm': '435px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
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
        '75':'#4CA7CE',
        '100': '#376D97',
        '200': '#28506E',
        '300': '#193245',
        '400': '#0A141C',
      },
    }
  },
  plugins: [],
}
