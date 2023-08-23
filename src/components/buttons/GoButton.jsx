import Image from "next/image";
import React from "react";

const GoButton = () => {
  return (
    <>
      <div className=" flex justify-center items-center h-[48px] w-[48px] bg-bg-primary border-2 rounded-full ">
        <p className=" text-base14 font-medium text-btn-secondary">GO!</p>
        <Image
          src="./assets/fi-rr-angle-small-right (2).svg"
          height={16}
          width={11}
        />
      </div>
    </>
  );
};

export default GoButton;
