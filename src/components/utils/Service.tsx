import React, { useState } from 'react';
import './Service.css';
import dark_brand from '../../assets/icons/brand_dark.svg'
import down_arrow from '../../assets/icons/down_arrow.svg'

interface ServiceProps {
  title: string;
  title_bold: string; 
  description: string; 
  background: string;
  position?: string;
}

function Service({ title, title_bold, description, background, position="center" }: ServiceProps) {
  const [knowMore, setKnowMore] = useState(false)

  return (
    <div className={`xs:w-52 ${knowMore ? 'h-auto' : 'h-[25.6rem]'} flex flex-col items-center`}>
      <div className={`service w-full basis-[90%] flex flex-col justify-between items-center ${background} bg-${position} bg-cover`}>
        <div className="flex justify-center items-center bg-white px-1 py-1 shadow-3xl">
          <img className="w-20" src={dark_brand} alt="brand" />
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
      <div className={`w-full flex flex-col items-center ${knowMore ? 'basis-auto' : 'basis-[10%]'} transition-[basis] ease-in-out duration-500 bg-mine_shaft px-4 py-2`}>
        <div className='w-full flex justify-between items-center'>
          <span className="text-white font-medium tracking-tighter">Saiba Mais</span>
          <img onClick={() => setKnowMore(!knowMore)} className={`cursor-pointer 
            ${knowMore ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-700`} src={down_arrow} alt="down_arrow" />
        </div>
        <span className={`${knowMore ? 'h-full' : 'h-0'} text-xs text-white transition-[height] ease-in-out duration-700 overflow-hidden`}>
          { description }
        </span>
      </div>
    </div>
  );
}

export default Service;