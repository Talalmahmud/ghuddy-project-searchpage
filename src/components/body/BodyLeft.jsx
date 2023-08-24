"use client";

import Image from "next/image";
import { useState } from "react";
const hotelType = [
  "Hotel",
  "Hostel",
  "Villa",
  "Base House",
  "Flat",
  "Cottage",
  "Bungallow",
  "Tour Package",
];
const mobilityList = ["Wheelchair friendly", "Baby Stroller friendly"];

const BodyLeft = () => {
  const [showHotel, setShowHotel] = useState(true);
  const hotelShowChange = () => [setShowHotel(!showHotel)];
  return (
    <div className="xl:w-[365px] md:w-[202px] hidden md:block">
      <p className=" text-base14 font-medium text-txt-primary_light">
        12 USD - 1987 USD Per Night
      </p>
      <Image src="/assets/hotel.jpg" alt="" width={400} height={100} />
      {/* type */}
      <div className=" h-[44px] w-full flex justify-between items-center border-b-[1px] border-txt-dotted pl-[16px] pr-[11px] py-2">
        <p className=" text-base18 font-medium text-txt-primary ">Type</p>
        <button onClick={hotelShowChange}>
          <Image
            src="./assets/fi-rr-angle-small-right.svg"
            height={24}
            width={24}
            alt=""
          />
        </button>
      </div>
      {/* type list */}
      {showHotel && (
        <div className=" pl-[16px] py-[8px]">
          {hotelType.map((item, index) => (
            <div
              className=" flex gap-x-[8px] py-[4px] items-center"
              key={index}
            >
              <input type="checkbox" name={item} className="" />
              <p className="text-base16 font-normal">{item}</p>
            </div>
          ))}
        </div>
      )}

      {/* space */}
      <div className=" flex justify-between items-center border-b-[1px] border-txt-dotted  pl-[16px] pr-[11px] py-2">
        <p className=" text-base18 font-medium text-txt-primary ">Space:</p>
        <div>
          <Image
            src="./assets/fi-rr-angle-small-right.svg"
            height={24}
            width={24}
            alt=""
          />
        </div>
      </div>
      <div className=" mt-[8px] pl-[16px]">
        <p className=" text-base16">Rooms:</p>
        <div className=" flex gap-x-[8px] py-[4px]">
          <input type="checkbox" name="2" />
          <p className=" text-base16">{"2 >"}</p>
        </div>
        <div className=" flex gap-x-[8px] py-[4px]">
          <input type="checkbox" name="5" />

          <p className=" text-base16">{"5 >"}</p>
        </div>
      </div>
      <div className=" mt-[8px] pl-[16px]">
        <p className=" text-base16">Bathrooms:</p>
        <div className=" flex gap-x-[8px] py-[4px]">
          <input type="checkbox" name="2" />
          <p className=" text-base16">{"2 >"}</p>
        </div>
      </div>
      <div className=" mt-[8px] pl-[16px]">
        <p className=" text-base16">Bedrooms:</p>
        <div className=" flex gap-x-[8px] py-[4px]">
          <input type="checkbox" name="5" />

          <p className=" text-base16">{"5 >"}</p>
        </div>
      </div>

      {/* mobility */}
      <div className=" flex justify-between items-center border-b-[1px] border-txt-dotted pl-[16px] pr-[11px] py-[8px]">
        <p className=" text-base18 font-medium text-txt-primary ">Mobility</p>
        <Image
          src="./assets/fi-rr-angle-small-right.svg"
          height={24}
          width={24}
          alt=""
        />
      </div>
      {/* mobility list */}
      <div className=" pl-4 py-2">
        {mobilityList.map((item, index) => (
          <div className=" flex items-center pl-[8px]" key={index}>
            <input type="checkbox" name={item} />
            <p className=" pl-[8px] py-[4px] text-base16 font-normal">{item}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className=" flex justify-between items-center border-b-[1px] border-txt-dotted pl-[16px] pr-[11px] py-[8px]">
        <p className=" text-base18 font-medium text-txt-primary ">Reviews</p>
        <Image
          src="./assets/fi-rr-angle-small-right.svg"
          height={24}
          width={24}
          alt=""
        />
      </div>
      {/* Reviews list */}
      <div className=" px-[16px]">
        <div className="flex gap-x-[8px] py-[8px]">
          {mobilityList.map((item, index) => (
            <div className="" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                  fill="#F6D731"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex gap-x-[8px] py-[8px]">
          {mobilityList.map((item, index) => (
            <div className="" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                  fill="#F6D731"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="flex gap-x-[8px] py-[8px]">
          {mobilityList.map((item, index) => (
            <div className="" key={index}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
              >
                <path
                  d="M15.9614 6.93472L11.4983 6.28609L9.50314 2.24136C9.44865 2.13062 9.359 2.04097 9.24826 1.98648C8.97052 1.84937 8.63302 1.96363 8.49416 2.24136L6.49904 6.28609L2.03595 6.93472C1.9129 6.9523 1.8004 7.01031 1.71427 7.0982C1.61014 7.20523 1.55276 7.34922 1.55474 7.49853C1.55671 7.64784 1.61789 7.79026 1.72482 7.89449L4.95392 11.0427L4.19103 15.4882C4.17314 15.5917 4.18458 15.698 4.22406 15.7952C4.26354 15.8925 4.32948 15.9767 4.41439 16.0384C4.49931 16.1001 4.5998 16.1367 4.70449 16.1442C4.80917 16.1516 4.91385 16.1296 5.00665 16.0806L8.99865 13.9818L12.9906 16.0806C13.0996 16.1386 13.2262 16.158 13.3475 16.1369C13.6533 16.0841 13.859 15.7941 13.8063 15.4882L13.0434 11.0427L16.2725 7.89449C16.3604 7.80836 16.4184 7.69586 16.436 7.57281C16.4834 7.26519 16.269 6.98043 15.9614 6.93472Z"
                  fill="#F6D731"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      {/* Amneties */}
      <div className=" flex justify-between items-center border-b-[1px] border-txt-dotted pl-[16px] pr-[11px] py-[8px]">
        <p className=" text-base18 font-medium text-txt-primary ">Amneties</p>
        <Image
          src="./assets/fi-rr-angle-small-right.svg"
          height={24}
          width={24}
          alt=""
        />
      </div>
      {/* amnities list */}
      <div className=" pl-[16px] py-[8px]">
        {mobilityList.map((item, index) => (
          <div className=" flex items-center" key={index}>
            <input type="checkbox" name={item} />
            <p className=" pl-[8px] py-[8px] text-base16 font-normal">{item}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className=" flex justify-between items-center border-b-[1px] border-txt-dotted pl-[16px] pr-[11px] py-[8px]">
        <p className=" text-base18 font-medium text-txt-primary ">Services</p>
        <Image
          src="./assets/fi-rr-angle-small-right.svg"
          height={24}
          width={24}
          alt=""
        />
      </div>
      {/* services list */}
      <div className=" pl-[16px] py-[8px]">
        {mobilityList.map((item, index) => (
          <div className=" flex py-[4px] gap-x-[16px] items-center" key={index}>
            <input type="checkbox" name={item} />
            <p className=" text-base16 font-normal">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyLeft;
