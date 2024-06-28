import React from 'react';

function About() {
  return (
    <div className="flex py-16">
      <div className="w-1/3 flex flex-col items-start gap-4 ml-44">
        <div className="text-xs text-mine_shaft font-semibold bg-sunglow rounded-full uppercase py-3 px-6">
          sobre a ramov
        </div>
        <h1 className="text-3xl tracking-tight leading-10">
          <span>Quem </span>
          <b><i>Somos</i></b>
        </h1>
        <h2 className="text-xl font-semibold">
          Onde outros desistem,
          nós vamos em frente
        </h2>
        <span className="text-xs text-punga font-medium">
          A RamoV é uma empresa direcionada para a
          área de engenharia mecânica, com foco em
          soluções que balanceiam inovação, qualidade e
          custo-benefício para nossos clientes. Como
          missão, nossa empresa busca proporcionar
          excelência em serviços de engenharia com um
          foco na segurança, conformidade e eficiência
          operacional
        </span>
        <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-6" href="">
          fazer parte
          <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default About;
