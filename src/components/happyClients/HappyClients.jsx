import Marquee from "react-fast-marquee";
import chatgpt from '../../assets/icons/chatgpt.svg';
import gemini from '../../assets/icons/gemini.svg';
import runway from '../../assets/icons/runway.svg';
import canva from '../../assets/icons/canva.svg';
import affinity from '../../assets/icons/affinity.svg';

const commonSVGClass = "h-[100px] sm:h-[80px] md:h-[100px]";

const brandLogos = [
  <>
    {/* CHATGPT */}
    <img
    className="h-[50px] sm:h-[80px] md:h-[50px]" viewBox="0 0 90 30"
    src={chatgpt} 
    alt={chatgpt} 
    />
  </>,
  <>
    {/* GEMINI */}
    <img
    className={`${commonSVGClass}`} viewBox="0 0 90 30"
    src={gemini} 
    alt={gemini} 
    />
  </>,
  <>
    {/* RUNWAY */}
    <img
    className={`${commonSVGClass}`} viewBox="0 0 90 30"
    src={runway} 
    alt={runway} 
    />
  </>,
  <>
    {/* CANVA */}
    <img
    className={`${commonSVGClass}`} viewBox="0 0 90 30"
    src={canva} 
    alt={canva} 
    />
  </>,
  <>
    {/* AFFINITY */}
    <img
    className={`${commonSVGClass}`} viewBox="0 0 90 30"
    src={affinity} 
    alt={affinity} 
    />
  </>
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2 mx-0 min-w-full">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Principais ferramentas utilizadas</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Tenho o prazer de trabalhar com as principais ferramentas do mercado!
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} delay={0} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-50" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
