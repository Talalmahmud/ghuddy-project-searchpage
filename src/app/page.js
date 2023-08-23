"use client";
import { useState, useEffect } from "react";
import Header from "@/components/header/Header";
import Image from "next/image";
import Card from "@/components/card/Card";
import Slider from "@/components/Slider";
import BodyLeft from "@/components/body/BodyLeft";
import InputButton from "@/components/buttons/InputButton";
import GoButton from "@/components/buttons/GoButton";

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
    <main className="">
      <div className="w-full">
        <div className="">
          <div className="xl:max-w-[1100px] md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] h-[300px] bg-bg-white mx-auto">
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
          </div>
        </div>
      </div>

      {/* <Slider /> */}
    </main>
  );
}
