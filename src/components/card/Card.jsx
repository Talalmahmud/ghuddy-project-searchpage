"use client";
import React, { memo } from "react";
import { AiFillStar } from "react-icons/ai";
import { CiHome } from "react-icons/ci";
import { BiMap } from "react-icons/bi";
import CardSlider from "./CardSlider";
import Image from "next/image";

const Card = ({ item }) => {
  return (
    <>
      <div className=" h-[325px] lg:h-[152px] w-full lg:w-[677px] flex flex-col lg:flex-row bg-bg-primary rounded-md hover:shadow-cardShadow">
        {/* Card image sliding section */}
        <CardSlider images={item.images} />

        <div className=" flex w-[343px] lg:w-[387px] flex-col gap-[6px] p-[12px] h-[152px] ">
          {/*title */}
          <div className=" flex h-[22px] w-full  justify-between items-center  py-[8px]">
            <p className=" w-[305px]  text-base16 font-medium text-txt-primary whitespace-normal block">
              {item.property_name.slice(0, 30)}
            </p>

            <div className=" flex items-center">
              <Image src="./assets/star.svg" alt="" height={24} width={24} />

              <p className=" text-[14px] font-semibold">
                {item.class_rating},0
              </p>
            </div>
          </div>

          {/* address */}
          <div className=" flex items-center h-[20px] gap-x-[4px] mt-[6px]">
            <Image src="./assets/location.svg" height={14} width={14} alt="" />
            <p className="text-[12px] text-start text-textColor font-normal whitespace-normal block">
              {item.short_address.slice(0, 30)}
            </p>
          </div>

          {/* tag */}
          <div className=" flex items-start h-[40px] gap-x-[4px] mt-[12px]">
            <Image src="./assets/home.svg" height={14} width={14} alt="" />
            <p className="text-[12px] w-[345px] h-[40px] text-start text-textColor font-normal whitespace-normal block">
              {item.property_tag.slice(0, 80)}
            </p>
          </div>

          {/* checkout */}
          <div className=" flex justify-center lg:justify-start items-center flex-row">
            <p className=" text-base12 font-normal mr-[2px]">Checkout Price:</p>

            <p className=" text-base14">{item.property_price}</p>
            <p className=" text-base14 font-medium">12000 BDT </p>
            <p className=" text-base12 line-through pl-[4px]">
              {item.black_price}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(Card);
