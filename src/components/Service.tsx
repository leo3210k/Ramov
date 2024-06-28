import React from 'react';
import './Service.css';

interface ServiceProps {
  title: string;
  title_bold: string; 
  background: string;
  position?: string;
}

function Service({ title, title_bold, background, position="center" }: ServiceProps) {
  return (
    <div className="w-52 h-[410px] flex flex-col items-center">
      <div className={`service w-full h-[90%] flex flex-col justify-between items-center ${background} bg-${position} bg-cover`}>
        <div className="flex justify-center items-center bg-white px-1 py-1 shadow-3xl">
          <img className="w-20" src="/assets/icons/brand_dark.svg" alt="brand" />
        </div>
        <div className="w-full flex flex-col items-center gap-12">
          <span className="text-lg text-center text-white font-medium mx-4">
            {title} <b><i>{title_bold}</i></b>
          </span>
          <div className="w-full flex flex-col py-1">
            <hr className="border-[1.1px] border-gravel"/>
            <span className="text-white text-[8px] font-medium self-center tracking-wider mt-1">Ramov Projetos e Soluções de Engenharia</span>
          </div>
        </div>
      </div>
      <div className="w-full h-[10.1%] flex justify-between items-center bg-mine_shaft px-4">
        <span className="text-white font-medium tracking-tighter">Saiba Mais</span>
        <img className="cursor-pointer" src="/assets/icons/down_arrow.svg" alt="down_arrow" />
      </div>
    </div>
  );
}

export default Service;