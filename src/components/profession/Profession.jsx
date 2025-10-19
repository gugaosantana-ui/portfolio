import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "Eu crio experiências intuitivas e agradáveis ​​entendendo as necessidades do usuário, conduzindo pesquisas e criando wireframes e protótipos que melhoram a usabilidade.",
  },
  {
    id: 2,
    title: "User Interface (UI)",
    description:
      "Eu crio interfaces visualmente atraentes e consistentes, com foco em layout, cor e tipografia para garantir uma jornada do usuário fluida e envolvente.",
  },
  {
    id: 3,
    title: "Social Media",
    description:
      "Crio estratégias e conteúdos digitais que conectam marcas e pessoas. Desenvolvo campanhas criativas e visualmente consistentes, sempre com foco em engajamento, autenticidade e resultado. Planejo, analiso e otimizO cada detalhe do conceito à publicação para garantir que cada mensagem alcance seu público de forma relevante e memorável.",
  },
  {
    id: 4,
    title: "Editor de Video",
    description:
      "Transformo ideias em narrativas visuais que prendem, emocionam e comunicam. Como editor de vídeo, meu foco está em ritmo, estética e propósito cada corte, transição e som é pensado para amplificar a mensagem e manter o espectador imerso.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center text-black">O que eu faço?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            Sou especialista em projetar experiências de usuário, criar o que antes não era visto.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            Minha abordagem combina criatividade e conhecimento técnico
            para entregar soluções visualmente atraentes e altamente
            funcionais para os usuários.
          </p>
        </div>
        <a
          target="blank"
          href="https://wa.me/+5511932128779?text=Estou%20interessado%20nos%20seus%20servi%C3%A7os!"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Fale comigo agora no Whatsapp!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
