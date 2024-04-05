import React from "react";
import Image from "next/image";
import NobleNav from "./NobleNav";

const HeaderSection = () => {
  return (
    <div
      id="Home"
      className="min-h-[810px] lg:h-screen flex flex-col bg_img bg-no-repeat bg-center bg_size "
    >
      <div>
        <NobleNav />
      </div>
      <div className="flex justify-center items-center flex-grow ">
        <div className="container px-3 max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
          <div className="flex-col-reverse sm:flex-row flex flex-wrap -mx-3 sm:pb-16">
            <div className="sm:w-9/12 md:w-8/12 lg:w-7/12 px-3 pt-6 sm:pt-0">
              <p
                data-aos="zoom-out-down"
                className="flex items-center gap-[6px] font-exo font-normal text-sm sm:text-base text-[#131200] leading-6 "
              >
                <span>
                  <Image
                    src="/assets/image/iconImg.webp"
                    width="24"
                    height="24"
                  />
                </span>
                AI With Noble Mind
              </p>
              <h1
                data-aos="zoom-out-down"
                className="font-outfit font-light text-4xl sm:text-5xl lg:text-[64px] leading-[50px] md:leading-[60px] lg:leading-[76.8px] max-w-[584px] xl:max-w-[600px] pt-2 "
              >
                Inspiring Innovation, Elevating Solutions –
                <span className=" font-Montserrat font-extrabold leading-[45px] md:leading-[56px] lg:leading-[70.4px]">
                  Noble Mind"
                </span>
              </h1>
              <p
                data-aos="zoom-out-down"
                className="font-exo font-normal text-sm sm:text-base leading-6 max-w-[584px] text-[#4D4D4D] pt-4"
              >
                At Noble Mind is a forward-thinking AI specialised company
                dedicated to reshaping the future of how we live, work, and
                learn. Our mission is to create ground-breaking AI solutions for
                Healthcare, Education, and beyond, aligning with Saudi Arabia’s
                Vision 2030.”
              </p>
            </div>
            <div className="w-full block sm:hidden">
              <Image
                src="/assets/image/HeroImgSmall.webp"
                width={500}
                height={300}
                alt="heromain"
                className="w-full min-h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
