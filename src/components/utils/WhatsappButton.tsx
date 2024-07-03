import React from 'react';
import { ReactComponent as ExampleIcon } from '../../../public/assets/icons/whatsapp.svg';

function WhatsappButton({ color, text, classes }: { color: string, text: string, classes?: string }) {
  return (
    <a className={`flex gap-4 text-xs font-medium text-white bg-${color} border-[1px] group hover:border-royal_blue
      rounded-sm uppercase py-5 px-10 mt-6 hover:-translate-y-3 transition-transform ease-in-out duration-500	
      hover:bg-transparent hover:text-royal_blue ${classes}`} 
      href="">
      { text }
      <ExampleIcon className="w-8 h-8 fill-current text-blue-500"/>
      <img className="stroke-white" src="/assets/icons/whatsapp.svg" alt="whatsapp" />
    </a>
  );
}

export default WhatsappButton;
