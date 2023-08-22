"use client";
import React from "react";
import ButtonLeft from "./ButtonLeft";
import ButtonMiddle from "./ButtonMiddle";
import ButtonGo from "./ButtonGo";

const HeaderMiddle = () => {
  return (
    <>
      <div className=" h-[52px]  mt-4 p-1 bg-btn-secondary rounded-[300px]">
        <div className="flex justify-between items-center">
          <ButtonLeft />
          <div className="w-[1px] h-[35px] hidden md:block mx-8 bg-bg-primary"></div>
          <ButtonMiddle />
          <ButtonGo />
        </div>
      </div>
    </>
  );
};

export default HeaderMiddle;
