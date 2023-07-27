/** @type {import('tailwindcss').Config} */
// import img from './src/assests/images/projects/category-page.png'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Poppins'],
        'secondary': ['Roboto']
      },
      colors: {
        body: "#0C0C0C",
        primary:"#4bffa5",
        secondary:"#9D9D9D"
      },
    },
  },
  plugins: [],
}