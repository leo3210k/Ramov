import React, { useEffect, useState } from 'react';
import './Service.css';
import dark_brand from '../../assets/icons/brand_dark.svg'
import down_arrow from '../../assets/icons/down_arrow.svg'

interface ServiceProps {
  title: string;
  title_bold: string; 
  background: string;
  position?: string;
}

function Service({ title, title_bold, background, position="center" }: ServiceProps) {
  const [knowMore, setKnowMore] = useState(false)

  return (
    <div className={`w-52 ${knowMore ? 'h-auto' : 'h-[25.6rem]'} flex flex-col items-center`}>
      <div className={`service w-full basis-[90%] flex flex-col justify-between items-center ${background} bg-${position} bg-cover`}>
        
      </div>
      
    </div>
  );
}

export default Service;