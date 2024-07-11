import React from 'react';
import WhatsappButton from './utils/WhatsappButton';
import right_arrow from '../assets/icons/right_arrow.svg'

const ItemList = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="min-w-fit bg-red-700 rounded-full p-1">
        <img src={right_arrow} alt="right_arrow" />
      </div>
      <span className="text-white">{ text }</span>
    </div>
  )
}

function Benefits() {
  return (
    <div className="flex justify-center md:justify-normal items-center bg-baltic_sea lg:bg-benefits bg-right bg-contain bg-no-repeat py-24 px-4">
      <div className="flex flex-col items-center xs:items-start gap-8 md:ml-32 lg:ml-44">
        <div className="text-xs text-center text-white font-semibold bg-red-700 rounded-full uppercase py-3 px-6">
          aproveite as vantagens!
        </div>
        <h1 className="text-3xl text-center text-white tracking-tight leading-10">
          <span>Benefícios </span>
          <b className="text-red-700"><i>Exclusivos</i></b>
        </h1>
        <div className="flex flex-col gap-4">
          <ItemList text="Conformidade com normas e regulamentos;" />
          <ItemList text="Segurança e proteção legal;" />
          <ItemList text="Valorização e segurança dos equipamentos;"/>
          <ItemList text="Qualidade do ar e segurança dos ambientes;" />
          <ItemList text="Preservação da integridade dos veículos;" />
          <ItemList text="Acompanhamento técnico especializado." />
        </div>
        <WhatsappButton text="aproveitar benefícios" color="royal_blue"/>
      </div>
    </div>
  );
}

export default Benefits;
