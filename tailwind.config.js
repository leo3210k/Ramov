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
        green_darker: '#10BE00',
        thunder: '#222122',
        baltic_sea: '#1B181C',
        mine_shaft: '#212121',
        heavy_metal: '#1E1F1C',
        punga: '#473C16',
        royal_blue: '#3049E6',
      },
      backgroundImage: {
        'hero': "url('../public/assets/images/matheus.svg')",
        'contact': "linear-gradient(180deg, #ffcc29 0%, #e6c147 100%)",
        'service': "url('../public/assets/services/services_background.png')",
      }
    },
  },
  plugins: [],
} 