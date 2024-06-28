import React from 'react';

function Footer() {
  return (
    <div className="flex justify-center items-center border-t-[1px] border-mine_shaft py-10">
      <div className="flex flex-col items-center basis-1/2">
        <img className="w-36" src="/assets/icons/brand.svg" alt="brand" />
        <span className="text-sm text-punga text-center">
          © 2024 KDP SOLUÇÕES EM ENGENHARIA – Todos os direitos reservados.
        </span>
      </div>
      <div className="h-full flex flex-col basis-1/2 gap-3 border-l-[1px] border-mine_shaft pl-6">
        <div className="self-start text-xs text-mine_shaft font-semibold bg-sunglow rounded-full uppercase py-3 px-6">
          redes sociais
        </div>
        <div className="flex gap-4">
          <div className="border-[1.5px] border-mine_shaft rounded-full cursor-pointer p-2">
            <img src="/assets/icons/linkedin.svg" alt="linkedin" />
          </div>
          
          
        </div>
      </div>
    </div>
  );
}

export default Footer;
