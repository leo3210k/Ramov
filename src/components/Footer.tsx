import React from 'react';

function Footer() {
  return (
    <div className="flex justify-evenly items-center bg-heavy_metal py-16">
      <div className="flex flex-col items-center">
        <img className="w-48" src="/assets/icons/brand_light.svg" alt="brand" />
        <span className="text-sm text-white text-center font-medium">
          © 2024 KDP SOLUÇÕES EM ENGENHARIA – <br></br> Todos os direitos reservados.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src="/assets/icons/location.svg" alt="localidade" />
          </div>
          <span className="text-white font-medium">Rua Teófilo dos Santos, 1555, Morada do Sol</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src="/assets/icons/phone.svg" alt="telefone" />
          </div>
          <span className="text-white font-medium">(86) 98152-1510 / (86) 99577-6691</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src="/assets/icons/email.svg" alt="email" />
          </div>
          <span className="text-white font-medium">adm@ramov.com.br</span>
        </div>
      </div>
      <div className="h-full flex flex-col items-center gap-5">
        <div className="self-start text-xs text-white font-semibold bg-red-700 rounded-full uppercase py-3 px-6">
          redes sociais
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
