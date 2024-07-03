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
    
  );
}

export default Service;