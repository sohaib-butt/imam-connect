import React from "react";
import { SearchSection, GuideCard } from "@/components/shared";

const index = () => {
  return (
    <div className="w-full text-start p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <span className="font-poppins font-[700] text-[#442D87] text-[32px] md:text-[36px] lg:text-[40px]">
        Specials
      </span>
      <SearchSection />
      <div
        className="flex flex-none md:flex-wrap justify-start items-start gap-5 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {[1, 2, 3, 4, 5, 6]?.map((i, index) => (
          <GuideCard key={index} isBtn={true} isTag={false} isHover={false} />
        ))}
      </div>
    </div>
  );
};

export default index;
