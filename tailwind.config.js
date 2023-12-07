/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary': '#001560',
      'gradient-1': '#000E3E',
      'gradient-2': '#001D82',
    },
    extend: {
      fontFamily: {
        lexend: ['"Lexend"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}