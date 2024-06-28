import React from 'react';

function About() {
  return (
    <div className="flex py-16">
      <div className="w-1/3 flex flex-col items-start gap-4 ml-44">
        <div className="text-xs text-mine_shaft font-semibold bg-sunglow rounded-full uppercase py-3 px-6">
          sobre a ramov
        </div>
        <h1 className="text-3xl tracking-tight leading-10">
          <span>Quem </span>
          <b><i>Somos</i></b>
        </h1>
        <h2 className="text-xl font-semibold">
          Onde outros desistem,
          nós vamos em frente
        </h2>
        
        
      </div>
    </div>
  );
}

export default About;
