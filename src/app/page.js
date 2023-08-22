"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header/Header";
import Image from "next/image";
import Card from "@/components/card/Card";
import Slider from "@/components/Slider";
import BodyLeft from "@/components/body/BodyLeft";

export default function Home() {
  const [showHotel, setShowHotel] = useState(true);
  const [showSpace, setShowSpace] = useState(true);
  const [showMobility, setShowMobility] = useState(true);
  const [showAmenities, setShowAmenities] = useState(true);
  const [showServices, setShowServices] = useState(true);
  const [content, setContent] = useState([]);

  const hotelShowChange = () => [setShowHotel(!showHotel)];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://dev.ghuddy.link/api/v1/open/hotels");
      const resData = await res.json();
      setContent(resData.esHotelCardList);
    };
    fetchData();
  }, []);

  return (
    <main className=" px-[14px] lg:px-[170px]">
      <Header />
      <div className=" py-[24px] flex flex-row bg-bg-semiwhite">
        <BodyLeft />

        {/* card */}
        <div className=" pl-[0px] lg:pl-[48px] flex flex-col gap-y-[24px]">
          {content.length !== 0 ? (
            content.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <h2 className=" h-[200px] text-lg font-semibold w-full flex justify-center items-center">
              ..........Nothing to find..........
            </h2>
          )}
        </div>
      </div>
      {/* <Slider /> */}
    </main>
  );
}
