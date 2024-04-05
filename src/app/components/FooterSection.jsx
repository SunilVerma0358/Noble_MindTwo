"ues client";
import React from "react";
import Image from "next/image";
import { Facebook, Intsa, LinkDin, Twiter } from "./common`/Svgexport";

const FooterSection = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();

  return (
    <div
      id="blogs"
      className="bg_footerImg pt-[100px] bg-no-repeat bg-cover bg-center"
    >
      <div className="container mx-auto px-3 max-w-[1140px] 2xl:max-w-[1320px] py-8 sm:py-12">
        <div className="flex flex-wrap flex-row -mx-3 justify-between">
          <div className=" w-full sm:w-4/12 lg:w-3/12 px-3">
            <a href="#">
              <Image
                src="/assets/image/Footerlogo.webp"
                width={241}
                height={42}
                alt="logo"
              />
            </a>
            <p className="font-exo font-normal text-[14px] sm:text-base leading-[150%] text-[#fdfdff] pt-5 sm:pt-7">
              Follow Us
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a
                href="htttps://www.facebook.com/radialcode/"
                target="blank"
                className="group w-11 h-11 rounded-full border hover:border-[#1877F2] duration-300 border-[#fdfdff] flex justify-center items-center"
              >
                <Facebook />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2Fradialcode"
                target="blank"
                className="group duration-300 hover:border-[#FCAF45] w-11 h-11 rounded-full border border-[#fdfdff] flex justify-center items-center"
              >
                <Intsa />
              </a>
              <a
                href="https://www.instagram.com/radialcode/?hl=en"
                target="blank"
                className=" group w-11 h-11 rounded-full border border-[#fdfdff] hover:border-[#1DA1F2]  duration-300 flex justify-center items-center"
              >
                <Twiter />
              </a>
              <a
                href="https://www.linkedin.com/company/radialcode/?originalSubdomain=in"
                target="blank"
                className=" group w-11 h-11 rounded-full border border-[#fdfdff] duration-300 hover:border-[#0077b5] flex justify-center items-center"
              >
                <LinkDin />
              </a>
            </div>
          </div>
          <div className=" w-full sm:w-6/12 lg:w-4/12 px-3 pt-6 sm:pt-0">
            <div className="flex flex-row flex-wrap -mx-3">
              <div className="w-6/12 px-3">
                <p className="font-outfit font-semibold text-[14px] sm:text-base text-white leading-[150%] pb-1 ">
                  Maine
                </p>
                <ul>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#Home"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%]  relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#About"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      About Us
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#Services"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Services
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#choose"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%]  relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      Why Choose Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-6/12 px-3">
                <p className="font-outfit font-semibold text-[14px] sm:text-base text-white leading-[150%] pb-1 ">
                  Legal
                </p>
                <ul>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Term & Conduction
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="#"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%] relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300 "
                    >
                      Contact
                    </a>
                  </li>
                  <li className="pt-2 sm:pt-3">
                    <a
                      href="tel:(629) 555-0129"
                      className="font-outfit font-normal text-[14px] sm:text-base text-white opacity-70 leading-[150%]  relative after:absolute after:w-0 after:h-[2px] after:left-[50%] after:bottom-[-3.5px] after:rounded-[6px] after:bg-[#fdfdff] hover:after:w-full hover:after:left-0 after:duration-300"
                    >
                      (629) 555-0129
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="font-exo font-normal text-sm sm:text-base leading-[150%] text-white opacity-70 text-center py-4 border-t border-t-[#FFFFFF4D] ">
        © Copyright {year} Noble Mind | All rights reserved.{" "}
      </p>
    </div>
  );
};

export default FooterSection;
