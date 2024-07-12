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
    <div className={`flex flex-col items-center`}>
      <div className={`service xs:w-52 h-[22.75rem] flex flex-col justify-between items-center ${background} bg-${position} bg-cover`}>
        <div className="flex justify-center items-center bg-white px-1 py-1 shadow-3xl">
          <img className="w-20" src={dark_brand} alt="brand" />
        </div>
        
      </div>
      
    </div>
  );
}

export default Service;