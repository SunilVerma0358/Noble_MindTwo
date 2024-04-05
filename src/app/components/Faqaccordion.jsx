"use client";
import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
function Icon({ id, open }) {
  return (
    <div className="relative ">
      <svg
        className={`${
          id === open ? "rotate-180" : " translate-x-[-1px]"
        }   transition-transform`}
        width="13"
        height="7"
        viewBox="0 0 13 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.44902 6.69038C6.31569 6.69038 6.18636 6.66538 6.06102 6.61538C5.93569 6.56538 5.83169 6.49871 5.74902 6.41538L1.14902 1.81538C0.96569 1.63205 0.874023 1.39871 0.874023 1.11538C0.874023 0.832047 0.96569 0.598714 1.14902 0.41538C1.33236 0.232047 1.56569 0.140381 1.84902 0.140381C2.13236 0.140381 2.36569 0.232047 2.54902 0.41538L6.44902 4.31538L10.349 0.41538C10.5324 0.232047 10.7657 0.140381 11.049 0.140381C11.3324 0.140381 11.5657 0.232047 11.749 0.41538C11.9324 0.598714 12.024 0.832047 12.024 1.11538C12.024 1.39871 11.9324 1.63205 11.749 1.81538L7.14902 6.41538C7.04902 6.51538 6.94069 6.58638 6.82402 6.62838C6.70736 6.67038 6.58236 6.69105 6.44902 6.69038Z"
          fill="#131200"
        />
      </svg>
    </div>
  );
}
const Faqaccordion = () => {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div id="faq" className="relative z-1 ">
      <div className=" absolute top-[-3%] md:top-[5%] lg:top-0 left-[5%]">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="max-w-[50px] md:max-w-[70px] animate-postionImg"
        />
      </div>
      <div className=" absolute bottom-[20%] sm:bottom-[25%] lg:bottom-[50%] right-[5%]">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="w-[50px] md:w-[70px] animate-postionImg"
        />
      </div>
      <div className=" absolute bottom-[20%] sm:bottom-[25%] xl:bottom-[20%] left-10">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="w-[50px] md:w-[70px] animate-postionImg"
        />
      </div>
      <div className="container px-3 mx-auto max-w-[1140px] 2xl:max-w-[1320px]">
        <h2
          data-aos="fade-down"
          className="font-outfit font-light text-[34px] sm:text-[42px] md:text-5xl leading-[120%] text-[#131200] text-center"
        >
          Frequently <span className="font-semibold">Asked Questions</span>
        </h2>
        <p
          data-aos="fade-down"
          className=" font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 text-center pt-4"
        >
          Lorem ipsum dolor sit amet consectetur. Orci augue mollis eu{" "}
          <span className="sm:block">
            volutpat mi leo. Nibh nisl consequat metus.
          </span>
        </p>
        <div className="max-w-[774px] 2xl:max-w-[900px] pt-6 sm:pt-10 md:pt-12 mx-auto">
          <Accordion
            className={`border border-[#EBDAF8] py-4 px-5 sm:px-7 sm:py-6 mb-3 sm:mb-6 bg-white rounded-xl transition-all duration-300 overflow-hidden ${
              open === 1 ? "shadow-[0_5px_#A854E9]" : ""
            }`}
            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`font-outfit font-medium text-sm sm:text-base leading-[150%] py-0 text-start text-[#4D4D4D]  transition-all duration-300 ${
                open === 1 ? "text-[#131200]" : ""
              } `}
            >
              What is Artificial Intelligence (AI)?
            </AccordionHeader>
            <AccordionBody className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[880px] pt-2 pb-0 ">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={`border border-[#EBDAF8] py-4 px-5 sm:py-6 sm:px-7 mb-3 sm:mb-6 bg-white rounded-xl transition-all duration-300 overflow-hidden ${
              open === 2 ? "shadow-[0_5px_#A854E9] border-[#A854E9] " : ""
            }`}
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`font-outfit font-medium text-sm sm:text-base leading-[150%] py-0 text-start text-[#4D4D4D]  transition-all duration-300 ${
                open === 2 ? "text-[#131200]" : ""
              } `}
            >
              {" "}
              How does AI benefit our company?
            </AccordionHeader>
            <AccordionBody className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[880px] pt-2 pb-0 ">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={`border border-[#EBDAF8] py-4 px-5 sm:py-6 sm:px-7 mb-3 sm:mb-6 bg-white rounded-xl transition-all duration-300 overflow-hidden ${
              open === 3 ? "shadow-[0_5px_#A854E9] border-[#A854E9]" : ""
            }`}
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`font-outfit font-medium text-sm sm:text-base leading-[150%] py-0 text-start text-[#4D4D4D]  transition-all duration-300 ${
                open === 3 ? "text-[#131200]" : ""
              } `}
            >
              {" "}
              What types of AI technologies are relevant to our industry?{" "}
            </AccordionHeader>
            <AccordionBody className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[880px] pt-2 pb-0 ">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={`border border-[#EBDAF8] py-4 px-5 sm:py-6 sm:px-7 mb-3 sm:mb-6 bg-white rounded-xl transition-all duration-300 overflow-hidden ${
              open === 4 ? "hover:shadow-[0_5px_#A854E9] border-[#A854E9]" : ""
            }`}
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className={`font-outfit font-medium text-sm sm:text-base leading-[150%] py-0 text-start text-[#4D4D4D]  transition-all duration-300 ${
                open === 4 ? "text-[#131200]" : ""
              } `}
            >
              How can our employees adapt to AI integration?{" "}
            </AccordionHeader>
            <AccordionBody className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[880px] pt-2 pb-0 ">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
          <Accordion
            className={`border border-[#EBDAF8] py-4 px-5 sm:py-6 sm:px-7 mb-3 sm:mb-6 bg-white rounded-xl transition-all duration-300 overflow-hidden ${
              open === 5 ? "hover:shadow-[0_5px_#A854E9] border-[#A854E9]" : ""
            }`}
            open={open === 5}
            icon={<Icon id={5} open={open} />}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className={`font-outfit font-medium text-sm sm:text-base leading-[150%] py-0 text-start text-[#4D4D4D]  transition-all duration-300 ${
                open === 5 ? "text-[#131200]" : ""
              } `}
            >
              How can our company ensure data security with AI?{" "}
            </AccordionHeader>
            <AccordionBody className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[880px] pt-2 pb-0 ">
              Artificial Intelligence refers to the development of computer
              systems that can perform tasks that typically require human
              intelligence. These tasks include learning, reasoning,
              problem-solving, perception, and language understanding.
            </AccordionBody>
          </Accordion>
        </div>
        <div className="bg_transform bg-no-repeat bg-cover bg-center sm:mt-12 text-center rounded-3xl py-6 sm:py-12 md:py-[60px] px-3 translate-y-20 ">
          <h2
            data-aos="fade-down"
            className="font-outfit font-light text-[34px] sm:text-[42px] md:text-5xl leading-[120%] text-[#fdfddd]"
          >
            Subscribe to our <span className="font-semibold">Newsletter!</span>
          </h2>
          <p
            data-aos="fade-down"
            className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#fdfddd] pt-2 "
          >
            Be the first to get exclusive offers and the latest news.
          </p>
          <div
            data-aos="fade-down"
            className="flex items-center gap-3 justify-between  border border-[#A37fe0] max-w-[448px] mx-auto p-[8px] sm:p-[10px_10px_10px_24px] rounded-md mt-6 sm:mt-10 md:mt-12"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="outline-none text-[#fdfdff] font-semibold font-outfit leading-[150%] text-base  bg-transparent inputm w-full"
            />
            <button className="border border-[#fdfdff] text-[#fdfdff] p-[10px_18px] sm:p-[14px_24px] font-semibold font-outfit leading-[150%] text-base rounded-md hover:bg-[#fdfdff] hover:text-[#A37fe0] transition-all duration-300 ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqaccordion;
