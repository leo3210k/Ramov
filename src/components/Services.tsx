import React from 'react';
import Service from './Service';

function Services() {
  return (
    <div className="flex flex-col items-center gap-6 bg-service bg-cover bg-center py-16">
      <div className="text-xs text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full uppercase py-3 px-6">
        contrate nossos serviços!
      </div>
      <h1 className="text-3xl text-mine_shaft tracking-tight leading-10">
        <span>Nossos </span> 
        <b><i>Serviços Especializados</i></b>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 mx-24">
        <Service title="Projeto - " title_bold="AVAC" background="bg-proj-climatizacao-5" />
        <Service title="Projeto - " title_bold="Exaustão" background="bg-proj-exaustao-3" />
        <Service title="Projeto - " title_bold="Máquinas de Fluxo" background="bg-proj-maqflux-4" />
        <Service title="Projeto - " title_bold="Combate contra Incêndio" position="right" background="bg-proj-contra-incendio-2" />
        <Service title="Projeto - " title_bold="Gases GLP e Medicinais" background="bg-proj-gases-1" />
        <Service title="Projeto - " title_bold="Mecânico" background="bg-proj-mec-1" />
        <Service title="Conformidade e Segurança -  " title_bold="Equipamentos e Máquinas" background="bg-conf-nr12-2" />
        <Service title="Conformidade e Segurança - " title_bold="Movimentação de carga" position="right" background="bg-conf-nr11-4" />
        <Service title="Conformidade e Segurança - " title_bold="Vasos de pressão, Caldeiras e Compressores" background="bg-conf-nr13-3" />
        <Service title="Conformidade e Segurança - " title_bold="Trabalho em Altura" background="bg-conf-nr35-2" />
        <Service title="Conformidade e Segurança - " title_bold="Adequação às Normas Brasileiras" background="bg-conf-nr35-2" />
        <Service title="Conformidade e Segurança - " title_bold="Treinamentos" background="bg-conf-treinamento-2" />
        <Service title="Operação - " title_bold="Planejamento de Controle e Manutenção" background="bg-oper-pcm-2" />
        <Service title="Operação - " title_bold="Plano de Manutenção, Operação e Controle" background="bg-oper-pmoc-2" />
        <Service title="Operação - " title_bold="Plano de Rigging" background="bg-oper-rigging-5" />
        <Service title="Laudo Técnico -" title_bold="ARK" background="bg-laudo&consult-laudo-3" />
        <Service title="Consultoria " title_bold="Online/Presencial" background="bg-laudo&consult-consult-2" />
      </div>
      <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-8" href="">
        faça um orçamento
        <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
      </a>
    </div>
  );
}

export default Services;
