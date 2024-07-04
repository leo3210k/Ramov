import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import right_arrow from '../assets/icons/right_arrow.svg'

const Item_list = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-red-700 rounded-full p-1">
        <img src={right_arrow} alt="right_arrow" />
      </div>
      <span className="text-white">{ text }</span>
    </div>
  )
}

function Benefits() {
  return (
    <div className="flex justify-center md:justify-normal items-center bg-baltic_sea lg:bg-benefits bg-right bg-contain bg-no-repeat py-24">
      <div className="flex flex-col items-start gap-8 md:ml-48">
        <div className="text-xs text-white font-semibold bg-red-700 rounded-full uppercase py-3 px-6">
          aproveite as vantagens!
        </div>
        <h1 className="text-3xl text-white tracking-tight leading-10">
          <span>Benefícios </span>
          <b className="text-red-700"><i>Exclusivos</i></b>
        </h1>
        <div className="flex flex-col gap-4">
          <Item_list text="Conformidade com normas e regulamentos;" />
          <Item_list text="Segurança e proteção legal;" />
          <Item_list text="Valorização e segurança dos equipamentos;"/>
          <Item_list text="Qualidade do ar e segurança dos ambientes;" />
          <Item_list text="Preservação da integridade dos veículos;" />
          <Item_list text="Acompanhamento técnico especializado." />
        </div>
        <WhatsappButton text="aproveitar benefícios" color="royal_blue"/>
      </div>
    </div>
  );
}

export default Benefits;
