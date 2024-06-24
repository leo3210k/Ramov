/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        sunglow: '#FBCA2E',
        green: '#00cf0a',
        thunder: '#222122',
        baltic_sea: '#1B181C',
        mine_shaft: '#212121'
      },
      backgroundImage: {
        'hero': "url('../public/assets/hero-image.png')",
      }
    },
  },
  plugins: [],
} 