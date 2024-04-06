"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";

import { ChooseMap } from "./common`/Helper";

const Choose = () => {
  return (
    <div id="choose" className="relative z-1">
      <div className=" absolute top-[10%] sm:top-[5%] lg:top-[3%] left-[5%]">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="max-w-[50px] md:max-w-[70px] animate-postionImg"
        />
      </div>
      <div className="hidden lg:block absolute bottom-[7%] right-10">
        <Image
          src="/assets/image/positionimg.webp"
          width={70}
          height={95}
          alt="postionImg"
          className="max-w-[50px] md:max-w-[70px] animate-postionImg"
        />
      </div>
      <div className=" container px-3 max-w-[1140px] 2xl:max-w-[1320px] mx-auto">
        <p
          data-aos="fade-down"
          className=" flex items-center gap-[6px] justify-center font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200]"
        >
          <Image
            src="/assets/image/iconImg.webp"
            width={24}
            height={24}
            alt="iconImg"
          />
          Why Choose Us
        </p>
        <h2
          data-aos="fade-down"
          className="font-outfit font-light text-[34px] sm:text-[42px] md:text-5xl leading-[120%] text-center pt-2"
        >
          Driving Innovation &
          <span className="font-semibold block">Transforming Industries</span>
        </h2>
        <div className=" mt-6 md:mt-12">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 30000 }}
            speed={200}
            centeredSlides={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={{
              clickable: true,
              paginationPosition: "bottom",
            }}
            breakpoints={{
              430: {
                slidesPerView: 1.5,
                spaceBetween: 24,
              },
              640: {
                slidesPerView: 1.8,
                spaceBetween: 24,
              },

              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
          >
            {ChooseMap.map((event, index) => (
              <SwiperSlide className="h-full">
                <div
                  key={index}
                  className="border border-[#A854E933] p-3 sm:p-[18px] rounded-xl  transition-all duration-300 min-h-[213px] h-full active_class "
                >
                  <div className="bg-white rounded-full p-[6px] border-[6px] border-[#A854E933] flex justify-center items-center font-outfit font-bold text-lg w-10 h-10 ">
                    <p className="block  textColor ">{event.number}</p>
                  </div>
                  <h3 className="font-outfit font-normal text-base sm:text-xl leading-[25.2px] text-[#131200] pt-3">
                    {event.heading}
                  </h3>
                  <p className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 lg:max-w-[297px] pt-1">
                    {event.phara}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div data-aos="fade-down" className="w-full  rounded-3xl pt-[31px]">
          <Image
            src="/assets/image/sliderImg.webp"
            width={1140}
            height={527}
            alt="slider botttom"
            className="max-w-[1320px] w-full rounded-3xl object-cover min-h-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Choose;
