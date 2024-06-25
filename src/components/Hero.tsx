import './Hero.css';
import React from 'react';

function Hero() {
  return (
    <div className="relative h-screen flex items-center bg-hero bg-right bg-contain bg-no-repeat">
      <div className="w-2/6 flex flex-col text-left gap-6 ml-36">
        <img className="w-72" src="/assets/logo.svg" alt="" />
        <h1 className="text-3xl tracking-tight leading-10">
          <span>Garanta a Conformidade e Segurança dos seus Equipamentos com </span>
          <b><i>Nossos Laudos Técnicos e ARTs!</i></b>
        </h1>
        <span className="text-sm font-medium	text-punga">
          Na KDP Soluções em Engenharia, oferecemos uma variedade de serviços 
          de laudos técnicos e ART (Anotação de Responsabilidade Técnica) para 
          garantir a conformidade, segurança e eficiência dos seus equipamentos 
          e processos.
        </span>
       
      </div>
    </div>
  );
}

export default Hero;
