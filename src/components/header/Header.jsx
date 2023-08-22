"use client";
import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./middle/HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import ButtonLeft from "./middle/ButtonLeft";
import ButtonGo from "./middle/ButtonGo";
import ButtonMiddle from "./middle/ButtonMiddle";
import ButtonGuest from "./middle/ButtonGuest";
import Image from "next/image";

const Header = () => {
  return (
    <>
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
      <div className="hidden md:block">
        <HeaderMiddle />
      </div>
      {/* mobile view */}
      <div className=" block md:hidden">
        <button className="h-[44px] w-full mb-4 text-base14 rounded-[70px] flex justify-center items-center border-[1px] border-btn-secondary">
          We are go?
        </button>
      </div>
      <div className="flex lg:hidden items-center gap-[8px] mt-[16px] text-btn-secondary ">
        <div className=" h-[44px] w-[222px] flex items-center text-base14 rounded-[70px] border-[1px] border-btn-secondary">
          <button className=" h-full w-[105px] px-2">Check In</button>
          <div className="w-[1px] h-[24px] bg-btn-secondary"></div>
          <button className=" h-full w-[105px] px-2">Check Out</button>
        </div>
        <button className=" h-[44px] w-[113px] px-2 flex justify-center items-center text-base14 rounded-[70px] border-[1px] border-btn-secondary">
          Guest
        </button>
      </div>

      <div className=" hidden lg:block">
        <HeaderBottom />
      </div>
      {/* mobile view */}
      <div className=" flex items-center gap-x-[16px] my-[16px] text-btn-secondary lg:hidden">
        <button className=" h-[32px] py-[12px] w-[103.66px] text-base14 px-[32px]  flex items-center justify-center gap-x-[8px] border-[1px] border-btn-secondary rounded-[70px]">
          <Image src="./assets/filter.svg" alt="" height={12} width={12} />
          <p className=" text-base14">Filter</p>
        </button>
        <button className=" h-[32px] py-[12px] w-[103.66px] text-base14  flex items-center justify-center gap-x-[8px] border-[1px] border-btn-secondary rounded-[70px]">
          <Image src="./assets/sort.svg" alt="" height={12} width={12} />
          <p className=" text-base14">Sort By</p>
        </button>
        <button className=" h-[32px] py-[12px] w-[103.66px] text-base14 px-[32px]  flex items-center justify-center gap-x-[8px] border-[1px] border-btn-secondary rounded-[70px]">
          <Image src="./assets/map.svg" alt="" height={12} width={12} />
          <p className=" text-base14">Map</p>
        </button>
      </div>

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
    </>
  );
};

export default Header;
