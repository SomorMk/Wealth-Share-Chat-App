/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px'
      },
      colors: {
        'w': '#fff',
        'b': '#000',
        'b2': '#191825',
        'pri': '#2394C8',
      },
      fontFamily: {
        'ral': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}