import React from "react";
import GoButton from "../buttons/GoButton";

const MiddleButton = () => {
  return (
    <div
      className="xl:max-w-[1100px] md:max-w-[765px] max-w-[343px] px-[0px] xl:px-[0px] text-[14px] xl:text-[16px]
 text-btn-secondary xl:text-bg-white mx-auto"
    >
      <div className="flex flex-col xl:items-center xl:flex-row xl:bg-btn-secondary  gap-y-[16px] xl:h-[52px] rounded-[70px] p-[4px] xl:border-[1px] border-btn-secondary">
        <button className=" flex justify-center items-center h-[44px]  w-full xl:w-[244px] rounded-[70px] border-[1px]  xl:border-[0px]  hover:border-[1px] border-btn-secondary">
          We are here?
        </button>
        <div className="w-[1px] h-[35px] hidden xl:block mx-[4px] xl:bg-bg-white bg-btn-secondary"></div>

        <div className=" flex justify-between xl:justify-start items-center">
          <div className=" flex items-center justify-between border-[1px] xl:border-[0px] border-btn-secondary rounded-[70px]">
            <button className="flex justify-center items-center h-[44px] hover:border-[1px] w-[105px] md:w-[274px] xl:w-[256px] rounded-[70px] border-btn-secondary ">
              Check In
            </button>
            <div className="w-[1px] h-[35px] mx-[4px] md:h-[24px] xl:h-[35px] xl:bg-bg-white bg-btn-secondary"></div>
            <button className="flex justify-center items-center h-[44px] w-[105px] md:w-[274px] xl:w-[256px] rounded-[70px] hover:border-[1px] border-btn-secondary">
              Check Out
            </button>
          </div>
          <div className="w-[1px] h-[35px] mx-[4px] md:h-[24px] hidden xl:block xl:h-[35px] xl:bg-bg-white bg-btn-secondary"></div>

          <div className=" flex items-center gap-[16px] ">
            <button className="flex justify-center items-center h-[44px] w-[105px] md:w-[140px] xl:w-[256px] rounded-[70px] border-[1px] xl:border-[0px] hover:border-[1px] border-btn-secondary">
              Guests
            </button>
            <GoButton />
          </div>
        </div>
        <div className="pt-[8px] md:pt-0">
          <button className=" flex justify-center  xl:hidden items-center h-[44px] w-full xl:w-[244px] text-bg-white rounded-[70px] border-[1px] bg-btn-secondary">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiddleButton;
