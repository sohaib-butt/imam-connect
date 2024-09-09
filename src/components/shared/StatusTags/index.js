"use client";
import React, { useState } from "react";

const index = ({numberOfTags}) => {
  const tags = numberOfTags === 3 ? ["Completed", "Pending", "Rejected"]: ["Completed", "On-process", "Pending", "Rejected"];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-full flex justify-start items-center gap-5">
      <span className="text-[14px] md:text-[16px] font-[500] text-[#161616] font-poppins">
        Status
      </span>
      <div
        className="w-full flex justify-start items-center gap-3 overflow-x-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {tags?.map((t, index) => (
          <div
            key={index}
            className={`min-w-[100px] h-[40px] py-0 px-[24px] flex justify-center items-center rounded-[100px] cursor-pointer ${
              activeIndex === index
                ? "bg-[#B9FCFF] border-[2px] border-[#00BAC2]"
                : "bg-white border-[2px] border-[#D7D7D7]"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <span
              className={`font-poppins text-[16px] whitespace-nowrap ${
                activeIndex === index
                  ? "text-[#00BAC2] font-[700]"
                  : "text-[#D7D7D7] font-[400]"
              }`}
            >
              {t}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
