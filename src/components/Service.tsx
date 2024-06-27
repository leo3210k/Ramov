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
        
      </div>
      
    </div>
  );
}

export default Service;