import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="flex flex-col items-center gap-5 py-14">
      <div className="text-xs text-white font-semibold border-solid border-[1px] border-white rounded-full py-3 px-6">FALE COM A GENTE!</div>
      <h1 className="text-3xl text-white tracking-tight leading-10">
        <span>Entre em contato </span> 
        <b><i>conosco!</i></b>
      </h1>
      <p className="w-3/6 text-center text-sm font-medium">
        Entre em contato conosco para saber mais sobre 
        como nossos serviços podem beneficiar o seu negócio. 
        Estamos prontos para oferecer soluções personalizadas 
        para suas necessidades.
      </p>
      <a className="flex gap-4 text-xs font-medium text-white bg-royal_blue rounded-sm uppercase py-5 px-10 mt-8" href="">
        entrar em contato
        <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
      </a>
    </div>
  );
}

export default Contact;
