import React from 'react';
import Service from './utils/Service';
import WhatsappButton from './utils/WhatsappButton';

function Services() {
  return (
    <div className="flex flex-col items-center gap-6 bg-alabaster py-14 px-6 xs:px-3 md:px-0">
      <div className="text-xs text-center text-mine_shaft font-semibold border-solid border-[1px] border-mine_shaft rounded-full uppercase py-3 px-6">
        contrate nossos serviços!
      </div>
      <h1 className="text-3xl text-center text-mine_shaft tracking-tight leading-10">
        <span>Nossos </span> 
        <b><i>Serviços Especializados</i></b>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-5 gap-y-10 md:mx-24 mt-4">
        <Service title="Projeto - " title_bold="Climatização" 
        description="Desenvolvemos projetos de climatização personalizados 
        para diversos ambientes. Dimensionamos e especificamos sistemas eficientes como VRF, Inverter 
        e Split Ducted, além de soluções discretas como difusores lineares. Nossos projetos garantem 
        conforto térmico e eficiência energética, sempre em conformidade com as normas técnicas."
        background="bg-proj-climatizacao-5" position="bg-[center_right]" />
        <Service title="Projeto - " title_bold="Exaustão" 
        description="Somos especialistas em desenvolver projetos de exaustão 
        eficientes e personalizados. Atuamos no dimensionamento e especificação de sistemas de exaustão 
        para diferentes aplicações, garantindo a qualidade do ar, a remoção eficaz de poluentes e a 
        conformidade com as normas técnicas."
        background="bg-proj-exaustao-3" />
        <Service title="Projeto - " title_bold="Máquinas de Fluxo" 
        description="Na RamoV Engenharia, desenvolvemos projetos de máquinas de fluxo como bombas, 
        ventiladores e turbinas. Garantimos alto desempenho e eficiência energética, utilizando 
        tecnologias avançadas para simulação e análise, sempre adaptando as soluções às necessidades 
        específicas dos clientes."
        background="bg-proj-maqflux-4" />
        <Service title="Projeto - " title_bold="Combate contra Incêndio"
        description="Projetamos sistemas de combate a incêndio completos, incluindo sprinklers, 
        hidrantes, detectores de fumaça e alarmes. Utilizamos tecnologias avançadas para análise de riscos e 
        garantimos conformidade com todas as normas e regulamentos de segurança."
        background="bg-proj-contra-incendio-2" position="bg-[center_right_-1rem]" />
        <Service title="Projeto - " title_bold="Gases GLP e Medicinais" 
        description="A RamoV Engenharia projeta sistemas de gases, incluindo GLP e gases medicinais. 
        Dimensionamos e especificamos sistemas de armazenamento e distribuição seguros e eficientes, atendendo às 
        normas técnicas e garantindo a confiabilidade para aplicações residenciais, comerciais e hospitalares."
        background="bg-proj-gases-1" />
        <Service title="Projeto - " title_bold="Mecânico" 
        description="Oferecemos soluções completas em projetos mecânicos para diversas 
        indústrias. Desenvolvemos desde o design e modelagem 3D até a análise estrutural e dinâmica, garantindo 
        componentes otimizados e sistemas eficientes. Nosso foco é a inovação e a sustentabilidade."
        background="bg-proj-mec-1" position="bg-[center_right_-6rem]" />
        <Service title="Conformidade e Segurança -  " title_bold="Equipamentos e Máquinas" 
        description="A RamoV Engenharia especializa-se em adequar máquinas e equipamentos à NR-12. 
        Oferecemos análise de riscos, implementação de dispositivos de segurança, e treinamento de colaboradores, 
        garantindo a conformidade com as normas regulamentadoras e um ambiente de trabalho seguro."
        background="bg-conf-nr12-2" />
        <Service title="Conformidade e Segurança - " title_bold="Movimentação de carga"
        description="Desenvolvemos projetos de adequação à NR-11, garantindo a segurança em transporte, movimentação, 
        armazenagem e manuseio de materiais. Realizamos análise de riscos, implementação de medidas de segurança e 
        treinamentos específicos, assegurando a conformidade com as normas regulamentadoras e um ambiente de trabalho seguro."
        background="bg-conf-nr11-4" position="bg-[center_right_-1rem]" />
        <Service title="Conformidade e Segurança - " title_bold="Vasos de pressão, Caldeiras e Compressores" 
        description="Desenvolvemos soluções adequação de caldeiras, compressores e vasos de pressão à NR-13. Oferecemos 
        inspeção detalhada, testes de segurança, emissão de relatórios técnicos e treinamento para operadores. Nosso objetivo 
        é garantir a integridade física dos equipamentos e a segurança dos trabalhadores, conforme as exigências normativas."
        background="bg-conf-nr13-3" />
        <Service title="Conformidade e Segurança - " title_bold="Trabalho em Altura" 
        description="Focados na segurança em trabalhos em altura. Realizamos análise de riscos, implementação de 
        sistemas de proteção e treinamento de colaboradores, garantindo a conformidade com as normas e a segurança dos 
        trabalhadores em atividades acima de dois metros."
        background="bg-conf-nr35-2" />
        <Service title="Conformidade e Segurança - " title_bold="Adequação às Normas Brasileiras" 
        description="Nosso serviço de adequação às normas brasileiras oferece soluções completas para 
        garantir que sua empresa esteja em conformidade com as regulamentações vigentes no país. Contamos 
        com uma equipe de especialistas que realiza auditorias detalhadas, identifica possíveis não conformidades 
        e propõe as melhores práticas para adequação."
        background="bg-conf-nbr-3" position="bg-[center_right_-9rem]" />
        <Service title="Conformidade e Segurança - " title_bold="Treinamentos" 
        description="Oferecemos treinamentos especializados para garantir segurança e eficiência no 
        trabalho, incluindo NR-11 (transporte e manuseio de materiais), NR-12 (operação de máquinas), 
        NR-13 (caldeiras e vasos de pressão) e NR-35 (trabalho em altura). Ministrados por profissionais 
        experientes, nossos cursos combinam teoria e prática para assegurar a aplicação eficaz dos conhecimentos."
        background="bg-conf-treinamento-2" />
        <Service title="Operação - " title_bold="Planejamento de Controle e Manutenção" 
        description="Na RamoV Engenharia, oferecemos soluções especializadas em Planejamento e Controle 
        de Manutenção (PCM) de máquinas para maximizar a eficiência operacional e reduzir paradas 
        imprevistas. Nosso serviço abrange a análise detalhada das condições operacionais, o planejamento 
        estratégico de manutenções preventivas e preditivas, e a implementação de sistemas avançados de monitoramento."
        background="bg-oper-pcm-2" position="bg-[center_left_-5rem]" />
        <Service title="Operação - " title_bold="PMOC" 
        description="Somos experientes na construção de Planos de Manutenção, Operação e Controle (PMOC) 
        para sistemas de climatização, garantindo a qualidade do ar e a eficiência energética. Nossos PMOCs 
        são elaborados conforme as normas vigentes, abrangendo inspeções periódicas, limpeza e manutenção 
        preventiva de equipamentos de ar-condicionado."
        background="bg-oper-pmoc-2" />
        <Service title="Operação - " title_bold="Plano de Rigging" 
        description="Desenvolvemos Planos de Rigging personalizados para operações de içamento 
        seguras e eficientes. Nossa abordagem inclui o planejamento detalhado da movimentação de cargas, 
        a escolha dos equipamentos certos e a definição de procedimentos operacionais conforme as normas 
        de segurança."
        background="bg-oper-rigging-5" />
        <Service title="Laudo Técnico -" title_bold="ART" 
        description="Prezamos pela elaboração de laudos técnicos detalhados e precisos, fornecendo 
        análises completas sobre o estado de máquinas, equipamentos e instalações. Nossos laudos abrangem 
        inspeções técnicas, diagnósticos de falhas, avaliação de conformidade com normas vigentes e 
        recomendações para melhorias e correções."
        background="bg-laudo&consult-laudo-3" position="bg-[center_left_-8rem]" />
        <Service title="Consultoria " title_bold="Online/Presencial" 
        description="Disponibilizamos serviços de consultoria online e presencial para atender às 
        diversas necessidades de nossos clientes com flexibilidade e eficiência. Nossa equipe de especialistas 
        está pronta para fornecer orientações técnicas e soluções personalizadas em áreas como climatização, 
        manutenção, segurança e projetos mecânicos."
        background="bg-laudo&consult-consult-2" />
      </div>
      <WhatsappButton text="faça um orçamento" color="royal_blue"/>
    </div>
  );
}

export default Services;
