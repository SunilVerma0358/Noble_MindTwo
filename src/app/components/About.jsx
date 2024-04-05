import Image from "next/image";
import React from "react";
import Commonbtn from "./common`/Commonbtn";

const About = () => {
  return (
    <div id="About" className=" relative z-1 pt-6 lg:pt-12">
      <div className=" absolute top-0 left-[5%]">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="max-w-[50px] md:max-w-[70px] animate-postionImg"
        />
      </div>
      <div className=" absolute bottom-[7%] sm:bottom-[10%] lg:bottom-[20%] xl:bottom-[25%] right-[5%]">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="max-w-[50px] md:max-w-[70px] animate-postionImg"
        />
      </div>
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto py-16">
        <div className="row flex flex-col lg:flex-row items-center flex-wrap -mx-3 md:py-12 ">
          <div className="w-full lg:w-6/12 px-3">
            <div data-aos="zoom-out-up">
              <Image
                src="/assets/image/AboutImg.webp"
                width={544}
                height={567}
                alt="AboutImg"
                className="w-full max-w-[544px] lg:max-w-[600px] mx-auto rounded-[0_50px_0_0] "
              />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-3 pt-6 lg:pt-0">
            <div className="xl:ps-16 text-center lg:text-start ">
              <p
                data-aos="fade-down"
                className="flex items-center justify-center lg:justify-normal gap-[6px] font-exo font-normal text-sm sm:text-base text-[#131200] leading-[150%]"
              >
                <Image
                  src="/assets/image/iconImg.webp"
                  width={24}
                  height={24}
                  alt="iconImg"
                />
                About Us
              </p>
              <h2
                data-aos="fade-down"
                className="font-outfit font-light text-[#131200] text-4xl md:text-5xl leading-[120%] pt-2 mx-auto lg:mx-0 max-w-[600px]"
              >
                Pioneering Vision & Mission-
                <span className="font-semibold">
                  Driven Sectoral Innovation
                </span>
              </h2>
              <p
                data-aos="fade-down"
                className="font-exo font-normal text-sm sm:text-base leading-[24px] text-[#4D4D4D] mx-auto lg:mx-0 max-w-[600px] lg:max-w-[491px] pt-4 pb-8 lg:pb-14"
              >
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <Commonbtn aos="fade-down" common="Read More" />
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default About;
