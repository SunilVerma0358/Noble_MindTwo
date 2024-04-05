"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChooseMap } from "./common`/Helper";

const Choose = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    slidesToShow: 3.4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          speed: 300,
          autoplay: true,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "100px",
          slidesToShow: 1.3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "40px",
          slidesToShow: 1.4,
          slidesToScroll: 1,
        },
      },
    ],
  };

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
      <div className=" container px-3 md:px-12 lg:px-12 2xl:px-[150px] mx-auto">
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
        <div className=" my-6 md:my-12">
          <Slider {...settings}>
            {ChooseMap.map((event, index) => (
              <div
                key={index}
                className="border border-[#A854E933] p-[18px] rounded-xl  transition-all duration-300 min-h-[213px] h-full "
              >
                <div className="bg-white rounded-full p-[6px] border-[6px] border-[#A854E933] flex justify-center items-center font-outfit font-bold text-lg w-10 h-10 ">
                  <p className="block  textColor ">{event.number}</p>
                </div>
                <h3 className="font-outfit font-normal text-base sm:text-xl leading-[25.2px] text-[#131200] pt-3">
                  {event.heading}
                </h3>
                <p className="font-exo font-normal text-sm sm:text-base leading-[150%] text-[#131200] opacity-70 max-w-[297px] pt-1">
                  {event.phara}
                </p>
              </div>
            ))}
          </Slider>
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
