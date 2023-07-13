/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "#0C0C0C"
      },
      // transitionTimingFunction: {
      //   'in-expo': 'cubic-bezier(0.165,0.85,0.45,1)',
      //   // 'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      // }
      // [cubic-bezier(.165,0.85,0.45,1)]


    },
  },
  plugins: [],
}