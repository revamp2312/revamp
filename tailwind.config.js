/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "teamcard-rgba":'rgba(247, 245, 255, 1)',
        "teamcard-border": 'rgba(108, 82, 227, 0.20)',
      }
    },
  },
  plugins: [],
}

