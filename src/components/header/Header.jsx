"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import MiddleButton2 from "./MiddleButton";

const Header = () => {
  return (
    <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] bg-bg-white mx-auto">
      <HeaderTop />
      <div className=" flex flex-row h-[44px] gap-[8px] items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M11.25 3L5.25 9L11.25 15"
            stroke="#879FA8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className=" text-base12 lg:text-base14 font-normal">
          Back to Home Page
        </p>
      </div>
      <MiddleButton2 />

      <HeaderBottom />

      <div className="hidden lg:flex flex-row gap-2 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M11.25 3L5.25 9L11.25 15"
            stroke="#879FA8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p className=" text-base14 text-txt-primary_light font-normal">
          Back to Home Page
        </p>
        <p className=" text-base14 text-txt-primary_light ml-6 font-normal">
          5 of 16 Results Shown
        </p>
      </div>
    </div>
  );
};

export default Header;
