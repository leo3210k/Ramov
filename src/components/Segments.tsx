import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import right_down_arrow from '../assets/icons/right_down_arrow.svg'

const Item_list = ({ number, text }: { number: string, text: string }) => {
  return (
    <div className="w-[22.5rem] h-[10.6rem] flex flex-col border-[1px] border-mine_shaft">
      <div className="flex justify-between items-center border-b-[1px] border-mine_shaft p-2">
        <span className="text-3xl font-semibold text-punga">{ number }</span>
        <img className="bg-mine_shaft p-2" src={right_down_arrow} alt="right_down_arrow" />
      </div>
      <div className="h-full flex items-center px-4">
        <span className="text-sm text-mine_shaft font-medium">{ text }</span>
      </div>
    </div>
  )
}

function Segments() {
  return (
    <div className="flex flex-col items-center gap-6 py-16">
      <div className="text-xs text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full uppercase py-3 px-6">
        diversos segmentos!
      </div>
      <h1 className="text-3xl text-mine_shaft tracking-tight leading-10">
        <span>Nossos serviços são </span> 
        <b><i>ideais para:</i></b>
      </h1>
      <div className="flex justify-center items-center flex-wrap gap-x-5 gap-y-10 mt-10 mx-12">
        <Item_list number="01" text="Empresas de construção, agronegócio e indústrias." />
        <Item_list number="02" text="Locadoras e vendedores de máquinas e equipamentos." />
        <Item_list number="03" text="Empresas de manutenção de ar condicionado." />
        <Item_list number="04" text="Parques, buffets, escolas e condomínios." />
        <Item_list number="05" text="Proprietários de veículos acidentados." />
        <Item_list number="06" text="Empresas que precisam de responsável técnico." />
      </div>
      <WhatsappButton text="aproveitar benefícios" color="royal_blue"/>
    </div>
  );
}

export default Segments;
