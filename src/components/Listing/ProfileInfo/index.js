import React from "react";
import ImageSwiper from "./ImageSwiper";
import BasicInfo from "./BasicInfo";
import ServiceSection from "./ServicesSection";
import AboutMe from "./AboutMe";

const index = () => {
  return (
    <div className="p-[24px] md:py-[40px] md:px-[40px] lg:px-[100px] flex flex-col gap-4 w-full">
      <div className="hidden md:flex justify-center items-start w-full gap-4">
        <div className="w-[65%] flex flex-col justify-center items-center gap-4">
          <ImageSwiper />
          <BasicInfo />
          <ServiceSection />
        </div>
        <div className="w-[35%]">
          <AboutMe />
        </div>
      </div>
      <div className="flex flex-col justify-center items-start md:hidden w-full gap-4">
        <ImageSwiper />
        <AboutMe />
        <BasicInfo />
        <ServiceSection />
      </div>
    </div>
  );
};

export default index;
