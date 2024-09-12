import { GuideCard } from "@/components/shared";
import React from "react";

const index = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-8 pt-[24px] pb-[10px] px-[24px] md:pt-[40px] md:px-[80px] lg:px-[160px]">
        <span className="font-poppins font-[700] text-[32px] md:text-[36px] lg:text-[40px] text-[#442D87] text-center">
          Press & News
        </span>
      </div>
      <div
        className="flex flex-none md:flex-wrap justify-start md:justify-center items-start md:items-center gap-5 overflow-x-auto pb-[24px] px-[24px] md:pb-[40px] md:px-[80px] lg:px-[160px]"
        style={{ scrollbarWidth: "none" }}
      >
        {[1, 2, 3, 4, 5, 6]?.map((i, index) => (
          <GuideCard key={index} isBtn={false} isTag={false} isHover={true} />
        ))}
      </div>
    </>
  );
};

export default index;
