import React from 'react';
import whatsappIcon from '../../assets/icons/whatsapp_fixed.svg'

function WhatsappIcon() {
  return (
  <a href="http://wa.me/5586988858856" target="_blank">
    <img className="w-12 xs:w-[4.5rem] fixed bottom-6 right-6" src={whatsappIcon} alt="whatsapp" />
  </a>
  );
}

export default WhatsappIcon;
