"use client";
import React, { useState } from "react";

const Tags = () => {
  const tags = [
    "News",
    "Counselling",
    "Religion",
    "Nikah",
    "Mentality",
    "Spirituality",
    "Classes",
    "Training",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="hidden w-full md:flex flex-wrap justify-start items-center gap-3 mt-3">
      {tags?.map((t, index) => (
        <div
          key={index}
          className={`h-[40px] py-0 px-[24px] flex justify-center items-center rounded-[100px] cursor-pointer ${
            activeIndex === index ? "bg-[#442D87]" : "bg-[#F8F8F8]"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <span
            className={`font-poppins text-[16px] ${
              activeIndex === index
                ? "text-white font-[700]"
                : "text-[#202124] font-[500]"
            }`}
          >
            {t}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tags;
