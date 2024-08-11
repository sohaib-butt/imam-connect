import React from "react";
import ImageSwiper from "./ImageSwiper";
import BasicInfo from "./BasicInfo";
import ServiceSection from "./ServicesSection";

const index = () => {
  return (
    <div className="p-[24px] md:py-[40px] md:px-[160px] flex justify-center items-center w-full gap-4">
      <div className="w-[70%] flex flex-col justify-center items-center gap-4">
        <ImageSwiper />
        <BasicInfo />
        <ServiceSection />
      </div>
      <div className="w-[30%]"></div>
    </div>
  );
};

export default index;
