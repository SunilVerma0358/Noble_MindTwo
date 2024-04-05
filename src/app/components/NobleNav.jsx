"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Navmap } from "./common`/Helper";
import Commonbtn from "./common`/Commonbtn";
const NobleNav = () => {
  const [first, setfirst] = useState(false);
  function setopen() {
    setfirst(!first);
    if (first === false) {
      document.body.classList.add("overflow");
    } else {
      document.body.classList.remove("overflow");
    }
  }
  return (
    <nav className="container max-w-[1140px] 2xl:max-w-[1320px] px-3 mx-auto flex justify-between items-center py-6">
      <a href="/" className="max-w-[221px] w-full">
        <Image
          src="/assets/image/Logo.webp"
          width={221}
          height={39}
          className="w-full max-w-[221px] "
        />
      </a>
      <div className="flex items-center  md:gap-0">
        <div
          className={`${
            first ? "right-0" : "right-[-100%]"
          } flex  gap-3 sm:gap-0 max-[1023px]:w-full h-full fixed bg-white top-0 items-center justify-center lg:h-unset lg:static lg:bg-transparent lg:justify-end z-40 transition-all ease-linear duration-300 `}
        >
          <ul className="flex items-center flex-col lg:flex-row gap-4 lg:gap-6 ps-0 ">
            {Navmap.map((props, id) => (
              <li key={id}>
                <a
                  onClick={setopen}
                  href={props.reflink}
                  className="font-exo font-normal text-base text-[#5a594d] leading-6 duration-300 hover:text-[#131200]  relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#131200] hover:after:w-full hover:after:left-0 after:duration-300"
                >
                  {props.navone}
                </a>
              </li>
            ))}
            <li>
              <a href="#">
                <Commonbtn common="Contact Us" />
              </a>
            </li>
          </ul>
        </div>
        <div onClick={setopen}>
          {first ? (
            <div className="flex lg:hidden flex-col relative z-50 justify-between w-[24px] h-[24px] cursor-pointer  ">
              <span className="bg-[#131200] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 rotate-[53deg] -bottom-[11px]"></span>
              <span className="bg-[#131200] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300 -rotate-[56deg] bottom-[8px]"></span>
            </div>
          ) : (
            <div className=" flex lg:hidden flex-col  z-50 justify-between w-[24px] h-[24px] cursor-pointer relative ">
              <span className="bg-[#5a594d] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-[#5a594d]  w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
              <span className="bg-[#5a594d] w-full h-[2px] relative z-50 mb-[3px] transition-all ease-linear duration-300"></span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NobleNav;
