import React from 'react';

function WhatsappButton({ background_color, text, classes }: { background_color: string, text: string, classes?: string }) {
  return (
    <a className={`flex gap-4 text-xs font-medium text-white bg-${background_color} rounded-sm uppercase py-5 px-10 mt-6 ${classes}`} 
      href="">
      { text }
      <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
    </a>
  );
}

export default WhatsappButton;
