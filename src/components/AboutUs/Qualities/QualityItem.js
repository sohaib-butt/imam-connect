import Image from "next/image";
import React from "react";

const QualityItem = ({ img, heading, content, imgFirst }) => {
  return (
    <div
      className={`w-full flex flex-col ${
        imgFirst ? "md:flex-row" : "md:flex-row-reverse"
      } justify-center items-center md:justify-start md:items-start gap-4 md:gap-16 lg:gap-24`}
    >
      <Image src={img} width={300} height={300} className="rounded-[16px]" />
      <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-start">
        <span
          className={`w-full font-poppins font-[700] text-[#442D87] text-[32px] md:text-[36px] lg:text-[40px] text-center ${
            imgFirst == true ? "md:text-start" : "md:text-right"
          }`}
        >
          {heading}
        </span>
        <span
          className={`font-poppins font-[400] text-[#666666] text-[16px] md:text-[18px] lg:text-[20px] text-center ${
            imgFirst == true ? "md:text-start" : "md:text-right"
          }`}
        >
          {content}
        </span>
      </div>
    </div>
  );
};

export default QualityItem;
