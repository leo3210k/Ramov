import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import dark_brand from '../assets/icons/marca.svg';
import profile from '../assets/images/matheus.svg';

function Hero() {
  return (
    <div className="relative lg:h-screen flex justify-between items-center">
      <div className="h-full lg:h-auto lg:w-2/6 flex flex-col justify-between lg:justify-normal text-left gap-6 p-8 lg:p-2 lg:mx-auto">
        <img className="w-60 md:w-40 lg:w-60" src={dark_brand} alt="brand" />
        <h1 className="text-3xl md:text-4xl lg:text-3xl tracking-tight leading-10">
          <span>Garanta a Qualidade e Conformidade dos seus Projetos com a </span>
          <b><i>RamoV Engenharia!</i></b>
        </h1>
        <span className="text-sm md:text-base lg:text-sm font-medium	text-punga">
          Bem-vindo à RamoV Engenharia! Oferecemos soluções completas e integradas em 
          engenharia mecânica, focando em inovação, segurança e eficiência. Nossos serviços 
          incluem projetos de ar-condicionado, refrigeração, sistemas mecânicos e mais. Com uma 
          equipe experiente e capacitada, garantimos excelência, compromisso e sustentabilidade. 
          Transforme suas ideias em realidade com a RamoV Engenharia!
        </span>
        <WhatsappButton text="Solicitar orçamento!" color="green" classes="self-center lg:self-start" />
      </div>
      <img className="hidden lg:block h-full self-end" src={profile} alt="perfil" />
    </div>
  );
}

export default Hero;
