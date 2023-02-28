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
      darkblue: 'hsl(209, 23%, 22%)', // (Dark Mode Elements)
      verydarkblue: 'hsl(207, 26%, 17%)', // (Dark Mode Background)
      verydarkblue2: 'hsl(200, 15%, 8%)', // (Light Mode Text)
      darkgray: 'hsl(0, 0%, 52%)', // (Light Mode Input)
      verylightgray: 'hsl(0, 0%, 98%)', // (Very Light Gray)
      white1: 'hsl(0, 0%, 100%)' // (Dark mode text and light mode elements)
    },
    extend: {},
  },
  plugins: [

  ],
}
