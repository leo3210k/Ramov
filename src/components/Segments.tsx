import React from 'react';



function Services() {
  return (
    <div className="flex flex-col items-center gap-6 py-16">
      <div className="text-xs text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full uppercase py-3 px-6">
        diversos segmentos!
      </div>
      <h1 className="text-3xl text-mine_shaft tracking-tight leading-10">
        <span>Nossos serviços são </span> 
        <b><i>ideais para:</i></b>
      </h1>
      
      <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-6" href="">
        aproveitar benefícios
        <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
      </a>
    </div>
  );
}

export default Services;
