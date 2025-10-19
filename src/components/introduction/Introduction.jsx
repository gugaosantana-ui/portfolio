import person from "../../assets/images/minhafoto.jpg";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "Experiência",
    description: "2 Anos",
  },
  {
    id: 2,
    title: "Projetos Completados",
    description: "400+",
  },
  {
    id: 3,
    title: "Clientes satisfeitos",
    description: "50+",
  },
];

const getSunset = () => {
  if (new Date().getHours() >= 0) {
    return "Bom dia"
  } else if (
    new Date().getHours() > 12 && new Date().getHours() < 18
  ) {
    return "Boa tarde"
  } else {
    return "Boa noite"
  } 
}

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Olá, {getSunset()} eu sou o 
            <span className="text-nowrap shrink-0 inline-block w-full">
              seu Freelancer
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            Eu sou Guto Santana <span className="bg-highlight">UI/UX Designer, Social Media e Editor de Video</span>{" "}
            nasci e moro em São Paulo/Brasil. Eu me esforço para construir designs e interfaces acessivas, imersivas e 
            bonitas cuidadosamente elaborado e design centrado no usuário.
          </p>
          <p className="text-center lg:text-start">
            <a
              target="blank"
              className="btn-primary btn btn-xs xxs:btn-lg text-white"
              href="https://wa.me/+5511932128779?text=Estou%20interessado%20nos%20seus%20servi%C3%A7os!"
            >
              Fale comigo agora no Whatsapp!
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
