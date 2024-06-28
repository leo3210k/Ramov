import React from 'react';

const Item_list = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-selective_yellow rounded-full p-1">
        <img src="/assets/icons/right_arrow.svg" alt="right_arrow" />
      </div>
      <span className="text-white">{ text }</span>
    </div>
  )
}

function Benefits() {
  return (
    <div className="h-[99vh] flex items-center bg-baltic_sea bg-benefits bg-[right_2rem] bg-contain bg-no-repeat">
      <div className="flex flex-col items-start gap-8 ml-48">
        <div className="text-xs text-mine_shaft font-semibold bg-sunglow rounded-full uppercase py-3 px-6">
          aproveite as vantagens!
        </div>
        <h1 className="text-3xl text-white tracking-tight leading-10">
          <span>Benefícios </span>
          <b className="text-sunglow"><i>Exclusivos</i></b>
        </h1>
        <div className="flex flex-col gap-4">
          <Item_list text="Conformidade com normas e regulamentos;" />
          <Item_list text="Segurança e proteção legal;" />
          <Item_list text="Valorização e segurança dos equipamentos;"/>
          <Item_list text="Qualidade do ar e segurança dos ambientes;" />
          <Item_list text="Preservação da integridade dos veículos;" />
          <Item_list text="Acompanhamento técnico especializado." />
        </div>
        <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-6" href="">
          aproveitar benefícios
          <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
        </a>
      </div>
    </div>
  );
}

export default Benefits;
