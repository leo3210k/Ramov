import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import dark_brand from '../assets/icons/brand_dark.svg';
import profile from '../assets/images/matheus.svg';

function Hero() {
  return (
    <div className="relative lg:h-screen flex justify-between items-center p-8 lg:p-0">
      <div className="h-full lg:h-auto lg:w-2/6 flex flex-col justify-between lg:justify-normal text-left gap-6 lg:mx-auto">
        <img className="w-36 md:w-40 lg:w-36" src={dark_brand} alt="brand" />
        <h1 className="text-3xl md:text-4xl lg:text-3xl tracking-tight leading-10">
          <span>Garanta a Conformidade e Segurança dos seus Equipamentos com </span>
          <b><i>Nossos Laudos Técnicos e ARTs!</i></b>
        </h1>
        <span className="text-sm md:text-base lg:text-sm font-medium	text-punga">
          Na KDP Soluções em Engenharia, oferecemos uma variedade de serviços 
          de laudos técnicos e ART (Anotação de Responsabilidade Técnica) para 
          garantir a conformidade, segurança e eficiência dos seus equipamentos 
          e processos.
        </span>
        <WhatsappButton text="Solicitar orçamento!" color="green" classes="self-center lg:self-start" />
      </div>
      <img className="hidden lg:block h-full self-end" src={profile} alt="perfil" />
    </div>
  );
}

export default Hero;
