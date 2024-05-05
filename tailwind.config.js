/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing:{
        '16p': '16%',
        '63.5p':'63.5%',
        '350':'350px',
        '430':'430px'
      },
      
    },
  },
  plugins: [],
}

