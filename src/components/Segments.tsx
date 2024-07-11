import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import right_down_arrow from '../assets/icons/right_down_arrow.svg'

const ItemList = ({ number, title, text, main_services }: { number: string, title: string, text: string, main_services: string }) => {
  return (
    <div className="w-full xs:w-[24rem] xs:h-[14rem] flex flex-col border-[1px] border-mine_shaft">
      <div className="flex justify-between items-center gap-x-2 border-b-[1px] border-mine_shaft p-2">
        <span className="text-3xl font-semibold text-punga">{ number }</span>
        <span className="text-sm xs:text-base text-center font-semibold text-mine_shaft">{ title }</span>
        <img className="bg-mine_shaft p-2" src={right_down_arrow} alt="right_down_arrow" />
      </div>
      <div className="h-full flex px-4 py-2">
        <span className="text-xs xs:text-sm text-mine_shaft font-medium">{ text }</span>
        <span className="text-xs xs:text-sm text-mine_shaft font-medium">
          <b>Serviços principais: </b>
          { main_services }
        </span>
      </div>
    </div>
  )
}

function Segments() {
  return (
    <div className="flex flex-col items-center gap-6 py-14">
      <div className="text-xs text-center text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full uppercase py-3 px-6">
        diversos segmentos!
      </div>
      <h1 className="text-3xl text-center text-mine_shaft tracking-tight leading-10">
        <span>Nossos serviços são </span> 
        <b><i>ideais para:</i></b>
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-10 mt-8 mx-8 xs:mx-12">
        <ItemList number="01" title="Projetos e Instalações" 
          text="Empresas de construção, agronegócio e indústrias.
          Parques, buffets, escolas e condomínios.
          Residências de alto padrão e edifícios comerciais.
          ar-condicionado, refrigeração, exaustão, sistemas mecânicos, bombas e 
          ventiladores, sistemas contra incêndio, análise estrutural." 
          main_services=""
        />
        <ItemList number="02" title="Manutenção e Operação" 
          text="Empresas de manutenção de ar condicionado.
          Empresas de transporte e frotas de veículos.
          Hospitais e indústrias.
          PMOC, planos de manutenção, plano de rigging, manutenção de sistemas 
          de climatização." 
          main_services=""
        />
        <ItemList number="03" title="Conformidade e Segurança" 
          text="Indústrias e armazéns.
          Construtoras e oficinas mecânicas.
          Instituições de ensino e órgãos públicos.
          adequação às normas NR (11, 12, 13, 35), adequação às normas NBR, 
          treinamentos, laudos de conformidade e segurança." 
          main_services=""
        />
        <ItemList number="04" title="Consultoria e Laudos Técnicos" 
          text="Pequenas empresas e startups.
          Empresas de seguros e órgãos públicos.
          Empresas que precisam de responsável técnico.
          emissão de laudos técnicos, consultoria online e presencial, laudos 
          de sinistros, laudos de segurança." 
          main_services=""
        />
        <ItemList number="05" title="Sistemas de Gases" 
          text="Hospitais, clínicas e laboratórios.
          Indústrias químicas.
          Consultórios médicos.
          instalação e manutenção de sistemas de gases, adequação às normas, 
          segurança em instalações de gases." 
          main_services=""
        />
        <ItemList number="06" title="Treinamentos e Capacitação" 
          text="Instituições de ensino e órgãos públicos.
          Indústrias e empresas em geral.
          Empresas que buscam atualização normativa.
          treinamentos em conformidade e segurança, cursos de capacitação, 
          workshops de normas regulamentadoras." 
          main_services=""
        />
      </div>
      <WhatsappButton text="contratar serviço" color="royal_blue"/>
    </div>
  );
}

export default Segments;
