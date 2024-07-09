import React from "react";

function About() {
  return (
    <div className="flex flex-col justify-center items-start gap-4 py-16 bg-about bg-[center_right] xs:bg-center bg-cover bg-no-repeat p-10">
      <div className="md:w-1/3 flex flex-col gap-4 bg-mine_shaft_op rounded-sm p-6">
        <span className="self-start text-lg md:text-xl text-white font-medium border-b-[1px] border-white tracking-tight pb-2">
          Quem Somos?
        </span>
        <span className="text-xs md:text-sm text-white leading-5">
          A RamoV Engenharia é uma empresa especializada em oferecer soluções
          completas e integradas no campo da engenharia. Nosso compromisso é
          proporcionar serviços de alta qualidade, com foco em inovação,
          segurança e eficiência, atendendo às necessidades específicas de
          nossos clientes de todos os tamanhos.
        </span>
      </div>
      <div className="md:w-1/3 flex flex-col gap-4 bg-mine_shaft_op rounded-sm p-6">
        <span className="self-start text-lg md:text-xl text-white font-medium border-b-[1px] border-white tracking-tight pb-2">
          Por que Somos Diferentes?
        </span>
        <span className="text-xs md:text-sm text-white leading-5">
          Nossa empresa adota abordagens inovadoras e flexíveis, evitando erros
          comuns no mercado e garantindo soluções personalizadas. Nosso time
          dinâmico compromete-se em atender clientes de todos os portes, sendo
          capaz de lidar com múltiplas demandas com maestria, conforme a
          situação requisitar. Nossos projetos e soluções priorizam segurança e
          qualidade, enquanto garantem ser acessíveis para nossos clientes.
        </span>
      </div>
    </div>
  );
}

export default About;
