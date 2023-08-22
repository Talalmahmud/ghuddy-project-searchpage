import React from "react";
import ButtonGuest from "./ButtonGuest";

const ButtonMiddle = () => {
  return (
    <div className="flex items-center">
      <button className=" h[44px] w-[192px] flex justify-center items-center  text-base12 lg:text-base16 text-txt-secondary  rounded-[48px]">
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
      </div>
    </div>
  );
};

export default ButtonMiddle;
