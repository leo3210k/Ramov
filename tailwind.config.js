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
        gravel: '#545155',
      },
      /*
Projeto - AVAC(Pode ser chamado de Climatização)
Projeto - Exaustão
Projeto - Máquinas de Fluxo(Pode ser substituído por Bombas e Ventiladores)
Projeto - Combate contra Incêndio
Projeto - Gases GLP e Medicinais
Projeto - Mecânico
Conformidade e Segurança -  Equipamentos e Máquinas ( NR 12)
Conformidade e Segurança - Movimentação de carga (NR 11)
Conformidade e Segurança - Vasos de pressão, Caldeiras e Compressores (NR 13)
Conformidade e Segurança - Trabalho em Altura (NR 35)
Conformidade e Segurança - Adequação às Normas Brasileiras
Conformidade e Segurança - Treinamentos
Operação - Planejamento de Controle e Manutenção (PCM)
Operação - Plano de Manutenção, Operação e Controle (PMOC)
Operação - Plano de Rigging
Laudo Técnico - ART
Consultoria Online/Presencial
*/
      backgroundImage: {
        'hero': "url('../public/assets/images/matheus.svg')",
        'contact': "linear-gradient(180deg, #ffcc29 0%, #e6c147 100%)",
        'service': "url('../public/assets/services/services_background.png')",
        'proj-climatizacao-5': "url('../public/assets/services/project/proj-climatizacao-5.webp')",
        'proj-exaustao-3': "url('../public/assets/services/project/proj-exaustao-3.jpg')",
        'proj-maqflux-4': "url('../public/assets/services/project/proj-maqflux-4.jpg')",
        'proj-contra-incendio-2': "url('../public/assets/services/project/proj-contra incendio-2.jpg')",
        'proj-gases-1': "url('../public/assets/services/project/proj-gases-1.jpg')",
        'proj-mec-1': "url('../public/assets/services/project/proj-mec-1.jpg')",
        'conf-nr12-2': "url('../public/assets/services/security/conf-nr12-2.jpg')",
        'conf-nr11-4': "url('../public/assets/services/security/conf-nr11-4.jpg')",
        'conf-nr13-3': "url('../public/assets/services/security/conf-nr13-3.jpg')",
        'conf-nr35-2': "url('../public/assets/services/security/conf-nr35-2.jpg')",
        'conf-treinamento-2': "url('../public/assets/services/security/conf-treinamento-2.jpg')",
        'oper-pcm-2': "url('../public/assets/services/operation/oper-pcm-2.png')",
        'oper-pmoc-2': "url('../public/assets/services/operation/oper-pmoc-2.jpg')",
        'oper-rigging-5': "url('../public/assets/services/operation/oper-rigging-5.jpg')",
        'laudo&consult-laudo-3': "url('../public/assets/services/report/laudo&consult-laudo-3.jpg')",
        'laudo&consult-consult-2': "url('../public/assets/services/report/laudo&consult-consult-2.jpg')",
      },
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;',
      },
      borderImage: {
        'service': 'fill 1 linear-gradient(red,blue)'
      }
    },
  },
  plugins: [],
} 