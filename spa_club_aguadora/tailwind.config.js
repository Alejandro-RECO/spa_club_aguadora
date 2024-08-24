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
          400: "#67acb3",
          700:"#365f68",
          950:"#1a2c32"
        },
        secondary: "#fefefe",
      }
    },
  },
  plugins: [],
}