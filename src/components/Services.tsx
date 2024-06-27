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
        
      </div>
    </div>
  );
}

export default Services;
