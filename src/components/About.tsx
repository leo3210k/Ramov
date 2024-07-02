import React from 'react';

function About() {
  return (
    <div className="flex flex-col justify-center items-start gap-4 py-16 bg-about bg-center bg-cover bg-no-repeat p-10">
      <div className="w-1/3 flex flex-col gap-4 bg-mine_shaft_op rounded-sm p-6">
        <span className="self-start text-xl text-white font-medium border-b-[1px] border-white tracking-tight leading-10 pb-2">Quem Somos?</span>
        <span className="text-sm text-white leading-5">
          A RamoV Engenharia é uma empresa especializada em oferecer soluções completas e integradas no campo da engenharia. Nosso compromisso é proporcionar serviços de alta qualidade, com foco em inovação, segurança e eficiência, atendendo às necessidades específicas de nossos clientes de todos os tamanhos.
        </span>
      </div>
      <div className="w-1/3 flex flex-col gap-4 bg-mine_shaft_op rounded-sm p-6">
        
      </div>
    </div>
  );
}

export default About;
