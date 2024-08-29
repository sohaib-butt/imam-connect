"use client"
import Image from "next/image";
import React, { useState } from "react";

const FAQItem = ({ question, answer, lastIndex}) => {
  const [openIndex, setOpenIndex] = useState(false);

  return (
    <div className={`w-full p-[24px] flex flex-col justify-start items-start gap-4 ${ !lastIndex ? "border-b border-b-[#E7E7E7]": ""}`}>
      <div className="w-full flex justify-between items-center">
        <span
          className={`font-poppins font-[700] text-[18px] md:text-[20px] tracking-[2%] ${
            openIndex ? "text-[#442D87]" : "text-[#999999]"
          }`}
        >
          {question}
        </span>
        <Image
          src="assets/images/black-down-arrow.svg"
          width={14}
          height={7}
          className={`cursor-pointer ${openIndex ? "rotate-180" : ""}`}
          onClick={() => setOpenIndex(!openIndex)}
          alt="Toggle Answer"
        />
      </div>
      {openIndex && (
        <div
          className="font-poppins font-[400] text-[16px] tracking-[2%] text-[#666666]"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
};

export default FAQItem;
