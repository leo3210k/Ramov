import React from 'react';
import light_brand from '../assets/icons/brand_light.svg'
import location from '../assets/icons/location.svg'
import phone from '../assets/icons/phone.svg'
import email from '../assets/icons/email.svg'
import linkedin from '../assets/icons/linkedin.svg'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'

function Footer() {
  return (
    <div className="flex justify-evenly items-center bg-heavy_metal py-16">
      <div className="flex flex-col items-center">
        <img className="w-48" src={light_brand} alt="brand" />
        <span className="text-sm text-white text-center font-medium">
          © 2024 KDP SOLUÇÕES EM ENGENHARIA – <br></br> Todos os direitos reservados.
        </span>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src={location} alt="localidade" />
          </div>
          <span className="text-white font-medium">Rua Teófilo dos Santos, 1555, Morada do Sol</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src={phone} alt="telefone" />
          </div>
          <span className="text-white font-medium">(86) 98152-1510 / (86) 99577-6691</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-red-700 rounded-full p-2">
            <img className="w-5" src={email} alt="email" />
          </div>
          <span className="text-white font-medium">adm@ramov.com.br</span>
        </div>
      </div>
      <div className="h-full flex flex-col items-center gap-5">
        <div className="self-start text-xs text-white font-semibold bg-red-700 rounded-full uppercase py-3 px-6">
          redes sociais
        </div>
        <div className="flex gap-4">
          <div className="bg-gravel rounded-full cursor-pointer hover:scale-125 transition-transform ease-in-out duration-150 p-2">
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className="bg-gravel rounded-full cursor-pointer hover:scale-125 transition-transform ease-in-out duration-150 p-2">
            <img src={instagram} alt="instagram" />
          </div>
          <div className="bg-gravel rounded-full cursor-pointer hover:scale-125 transition-transform ease-in-out duration-150 p-2">
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
