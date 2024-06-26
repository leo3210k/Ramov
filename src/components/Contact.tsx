import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center gap-5 bg-contact py-14">
      <div className="text-xs text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full py-3 px-6">FALE COM A GENTE!</div>
      <h1 className="text-3xl text-mine_shaft tracking-tight leading-10">
        <span>Entre em contato </span> 
        <b><i>conosco!</i></b>
      </h1>
      <p className="w-3/6 text-center text-sm text-punga font-medium">
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
