/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      dark: {
        element: 'hsl(209, 23%, 22%)',
        background: 'hsl(207, 26%, 17%)',
        text: 'hsl(0, 0%, 100%)',
      },
      light: {
        element: 'hsl(0, 0%, 100%)',
        background: 'hsl(0, 0%, 98%)',
        text: 'hsl(200, 15%, 8%)'
      },
    },
    extend: {},
  },
  plugins: [

  ],
}
