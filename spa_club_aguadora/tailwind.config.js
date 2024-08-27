/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: {
          200:"#c0dfe1",
          300:"#94c8cc",
          400:"#67acb3",
          500:"#458c95",
          600:"#3c747e",
          700:"#365f68",
          800:"#325158",
          900:"#2e444b",
          950:"#1a2c32"
        },
        secondary: "#fefefe",
      }
    },
  },
  plugins: [],
}