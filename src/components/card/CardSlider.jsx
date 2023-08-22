"use client";

import React, { memo, useState } from "react";
import { IoDiamondOutline } from "react-icons/io5";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { AiOutlineHeart } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import Image from "next/image";

const CardImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlider = currentIndex === 0;
    const newIndex = isFirstSlider ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlider = currentIndex === images.length - 1;
    const newIndex = isLastSlider ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const setIndexValue = (value) => {
    setCurrentIndex(value);
  };
  return (
    <>
      <div className=" relative h-[152px] w-[343px] lg:w-[290px] ">
        <div>
          {" "}
          <Image
            src={images[currentIndex]}
            fill
            className="rounded-tl-md w-full h-[186px] lg:h-[152px] rounded-tr-md lg:rounded-bl-md  transition-all ease-out object-cover"
            alt=""
          />
        </div>
        <div className=" absolute top-[14px] left-0 text-txt-secondary bg-btn-red h-[21px] text-base12 pl-[8px] w-[132px] ">
          <div className="flex h-full w-full  justify-between items-center px-2 hover:fill-white">
            <div className=" text-white">
              <IoDiamondOutline size={14} />
            </div>
            <p className=" text-white text-base12 font-medium">24% off</p>
            <div className=" flex justify-center items-center">
              <button className=" bg-bg-primary text-[12px] px-1  text-btn-red rounded-[2.9393px] border-1 font-semibold">
                Deal!!
              </button>
            </div>
          </div>
        </div>
        <div className=" absolute top-[12px] right-[12px]">
          <Image src="./assets/heart.svg" height={19} width={20} alt="" />
        </div>
        {/* left slider */}
        <div className=" absolute top-[47%] left-1 cursor-pointer ">
          <div
            className=" flex justify-center hover:bg-white items-center bg-bg-white rounded-full h-[20px] w-[20px] "
            onClick={prevSlide}
          >
            <IoIosArrowBack size={16} color="black" />
          </div>
        </div>
        {/* right slider */}
        <div className=" absolute top-[47%] right-1 cursor-pointer">
          <div
            className=" flex justify-center hover:bg-white items-center bg-bg-white rounded-full h-[20px] w-[20px] "
            onClick={nextSlide}
          >
            <IoIosArrowForward size={16} color="black" />
          </div>
        </div>
        {/* bottom slider */}
        <div className=" absolute bottom-2 left-[35%]">
          <div className=" flex gap-x-[1px]">
            {images.slice(0, 5).map((item, index) => (
              <div
                key={index}
                onClick={() => setIndexValue(index)}
                className=" cursor-pointer text-bg-white"
              >
                <RxDotFilled size={16} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(CardImageSlider);
