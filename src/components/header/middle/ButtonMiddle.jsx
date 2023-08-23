"use client";
import React from "react";
import ButtonGuest from "./ButtonGuest";
import InputButton from "@/components/buttons/InputButton";
import GoButton from "@/components/buttons/GoButton";

const ButtonMiddle = () => {
  return (
    <div className="flex justify-between h-[48px] bg-btn-secondary items-center rounded-[300px] py-[4px] pl-[4px] pr-[2px] ">
      {" "}
      <InputButton title="Where are We going?" btnWidth="244px" />
      <div className="flex items-center  ">
        {/* <button className=" h[44px] w-[192px] flex justify-center items-center  text-base12 lg:text-base16 text-txt-secondary  rounded-[48px]">
        Check In
      </button>
      <div className="w-[1px] h-[35px] hidden md:block mx-8 bg-bg-primary"></div>
      <button className=" h[44px] w-[192px] text-base12 justify-center items-center  lg:text-base16 text-txt-secondary  rounded-[48px]">
        Check Out
      </button>
      <div className="flex gap-2 items-center">
        <div className="w-[1px] h-[35px] hidden md:block mx-8  bg-bg-primary"></div>
        <div className=" hidden lg:block">
          <ButtonGuest />
        </div>
      </div> */}
        <div className="w-[1px] h-[35px] hidden md:block mx-[4px] bg-bg-primary"></div>

        <InputButton title="Check In" btnWidth="256px" />
        <div className="w-[1px] h-[35px] hidden md:block mx-[4px] bg-bg-primary"></div>

        <InputButton title="Check Out" btnWidth="256px" />
        <div className="w-[1px] h-[35px] hidden md:block mx-[4px] bg-bg-primary"></div>

        <InputButton title="Guest" btnWidth="256px" />
      </div>
      <GoButton />
    </div>
  );
};

export default ButtonMiddle;
