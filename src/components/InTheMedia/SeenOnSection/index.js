import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-4 md:gap-8 pt-[24px] pb-[10px] px-[24px] md:pt-[40px] md:px-[80px] lg:px-[160px]">
        <span className="font-poppins font-[700] text-[32px] md:text-[36px] lg:text-[40px] text-[#442D87] text-center md:text-start">
          As seen on
        </span>
      </div>
      <div
        className="w-full overflow-x-auto pb-[24px] px-[24px] md:pb-[40px] md:px-[80px] lg:px-[160px]"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex justify-start items-start gap-8 md:gap-14">
          {[1, 2, 3, 4, 5, 6]?.map((i, index) => (
            <div
              key={index}
              className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] relative shrink-0"
            >
              <Image
                src="assets/images/media-icon.svg"
                layout="fill"
                objectFit="cover"
                alt={`Image for content`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Index;
