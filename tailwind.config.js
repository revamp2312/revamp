/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1200px',
      // => @media (min-width: 1024px) { ... }

    
    },
    extend: {
      colors:{
        "teamcard-rgba":'rgba(247, 245, 255, 1)',
        "teamcard-border": 'rgba(108, 82, 227, 0.20)',
      }
    },
  },
  plugins: [],
}

