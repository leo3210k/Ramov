import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col items-center gap-5 bg-contact py-14">
      <div className="text-xs text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full py-3 px-6">FALE COM A GENTE!</div>
      <h1 className="text-3xl text-mine_shaft tracking-tight leading-10">
        <span>Entre em contato </span> 
        <b><i>conosco!</i></b>
      </h1>
      
    </div>
  );
}

export default Contact;
