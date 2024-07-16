/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      screens: {
        'xs': '460px'
      },
      colors: {
        alabaster: '#fafafa',
        sunglow: '#FBCA2E',
        green: '#00cf0a',
        green_darker: '#10BE00',
        thunder: '#222122',
        baltic_sea: '#1B181C',
        mine_shaft: '#212121',
        mine_shaft_op: 'rgb(33, 33, 33, .95)',
        heavy_metal: '#1E1F1C',
        punga: '#473C16',
        royal_blue: '#3049E6',
        gravel: '#545155',
        selective_yellow: '#FCBC04'
      },
      backgroundImage: {
        'hero': "url('/src/assets/images/matheus.svg')",
        'contact': "url('/src/assets/images/contact-background.jpg')",
        'service': "url('/src/assets/services/services_background.png')",
        'benefits': "url('/src/assets/images/benefits-background.png')",
        'about': "url('/src/assets/images/about-background.jpg')",
        'proj-climatizacao-5': "url('/src/assets/services/project/proj-climatizacao-5.webp')",
        'proj-exaustao-3': "url('/src/assets/services/project/proj-exaustao-3.jpg')",
        'proj-maqflux-4': "url('/src/assets/services/project/proj-maqflux-4.jpg')",
        'proj-contra-incendio-2': "url('/src/assets/services/project/proj-contra incendio-2.jpg')",
        'proj-gases-1': "url('/src/assets/services/project/proj-gases-1.jpg')",
        'proj-mec-1': "url('/src/assets/services/project/proj-mec-4.jpg')",
        'conf-nr12-2': "url('/src/assets/services/security/conf-nr12-2.jpg')",
        'conf-nr11-4': "url('/src/assets/services/security/conf-nr11-4.jpg')",
        'conf-nr13-3': "url('/src/assets/services/security/conf-nr13-3.jpg')",
        'conf-nr35-2': "url('/src/assets/services/security/conf-nr35-2.jpg')",
        'conf-nbr-3': "url('/src/assets/services/security/conf-nbr-3.jpg')",
        'conf-treinamento-2': "url('/src/assets/services/security/conf-treinamento-2.jpg')",
        'oper-pcm-2': "url('/src/assets/services/operation/oper-pcm-2.png')",
        'oper-pmoc-2': "url('/src/assets/services/operation/oper-pmoc-2.jpg')",
        'oper-rigging-5': "url('/src/assets/services/operation/oper-rigging-5.jpg')",
        'laudo&consult-laudo-3': "url('/src/assets/services/report/laudo&consult-laudo-3.jpg')",
        'laudo&consult-consult-2': "url('/src/assets/services/report/laudo&consult-consult-2.jpg')",
      },
      boxShadow: {
        '3xl': '0px 22px 70px 4px rgba(0, 0, 0, 0.56);',
      },
      borderImage: {
        custom: 'border-image: fill 1 linear-gradient(transparent, #1E1F1C);',
      }
    },
  },
  plugins: [],
} 