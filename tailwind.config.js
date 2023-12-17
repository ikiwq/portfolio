/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionDuration:{
        '400': '400ms',
        '600': '600ms'
      },
      inset: {
        '15%': '15%'
      }
    },
    fontFamily: {
      handwrite: 'Satisfy',
      Bebas: ['Bebas Neue', "cursive"],
      Source: ['Source Code Pro', 'monospace'],
      RobotoCondensed: ['Roboto Condensed', 'sans-serif']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ]
}