import { GuideCard } from "@/components/shared";
import React from "react";

const index = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-4 md:gap-8 p-[24px] md:py-[40px] md:px-[80px] lg:px-[160px]">
        <span className="font-poppins font-[700] text-[32px] text-[#202124] text-start">
          Latest Guides
        </span>
      </div>
      <div
        className="flex flex-none md:flex-wrap justify-start items-start gap-5 overflow-x-auto p-[24px] md:py-[40px] md:px-[80px] lg:px-[160px]"
        style={{ scrollbarWidth: "none" }}
      >
        {[1, 2, 3, 4, 5, 6]?.map((i, index) => (
          <GuideCard key={index} isBtn={true} isTag={true} isHover={false}/>
        ))}
      </div>
    </>
  );
};

export default index;
