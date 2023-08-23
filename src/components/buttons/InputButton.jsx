import React from "react";

const InputButton = ({ title, btnWidth }) => {
  return (
    <>
      <input
        className={
          " flex justify-center items-center px-[32px] h-[44px] rounded-[48px] placeholder-bg-white border-bg-white bg-btn-secondary text-center outline-none  text-base16 " +
          `${btnWidth}`
        }
        placeholder={title}
      />
    </>
  );
};

export default InputButton;
