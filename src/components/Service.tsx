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
      
    </div>
  );
}

export default Service;