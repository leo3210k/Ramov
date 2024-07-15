import React from 'react';
import './Contact.css';
import WhatsappButton from './utils/WhatsappButton';

function Contact() {
  return (
    <div className="contact flex flex-col items-center gap-5 bg-contact bg-cover bg-right lg:bg-center bg-no-repeat bg-fixed py-14 px-4">
      <div className="text-xs text-center text-white font-semibold border-solid border-[1px] border-white rounded-full py-3 px-6">FALE COM A GENTE!</div>
      <h1 className="text-3xl text-center text-white tracking-tight leading-10">
        <span>Entre em contato </span> 
        <b><i>conosco!</i></b>
      </h1>
      <p className="md:w-4/6 lg:w-3/6 text-center text-sm text-alabaster font-medium mt-2">
        Entre em contato conosco para saber mais sobre 
        como nossos serviços podem beneficiar o seu negócio. 
        Estamos prontos para oferecer soluções personalizadas 
        para suas necessidades.
      </p>
      <WhatsappButton text="entrar em contato" color="royal_blue"/>
    </div>
  );
}

export default Contact;
