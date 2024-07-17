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

function Service({ title, title_bold, description, background, position="bg-center" }: ServiceProps) {
  const [knowMore, setKnowMore] = useState(false)

  return (
    <div className={`flex flex-col items-center`}>
      <div className={`service w-full xs:w-52 h-[22.75rem] flex flex-col justify-between items-center ${background} ${position} bg-cover`}>
        <div className="flex justify-center items-center bg-white px-1 py-1 shadow-3xl">
          <img className="w-20" src={dark_brand} alt="brand" />
        </div>
        <div className="w-full flex flex-col items-center gap-12">
          <span className="text-lg text-center text-white font-medium mx-4">
            {title} <b><i>{title_bold}</i></b>
          </span>
          <div className="w-full flex flex-col py-1">
            <hr className="border-[1.1px] border-gravel"/>
            <span className="text-white text-[0.5rem] font-medium self-center tracking-wider mt-1">Ramov Projetos e Soluções de Engenharia</span>
          </div>
        </div>
      </div>
      <div>
        <div className={`xs:w-52 ${knowMore ? 'h-full' : 'h-[2.5rem]'} flex flex-col items-center transition-[height] ease-in-out duration-700 bg-mine_shaft overflow-hidden px-4 py-2`}>
          <div onClick={() => setKnowMore(!knowMore)} className='w-full flex justify-between items-center cursor-pointer'>
            <span className="text-white font-medium tracking-tighter">Saiba Mais</span>
            <img className={`w-[1.2rem] ${knowMore ? 'rotate-180' : 'rotate-0'} transition-transform ease-in-out duration-700`} 
              src={down_arrow} alt="down_arrow" 
            />
          </div>
          <span className={`text-xs text-white pt-2`}>
            { description }
          </span>
        </div>
      </div>
    </div>
  );
}

export default Service;