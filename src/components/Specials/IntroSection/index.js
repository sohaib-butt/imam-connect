import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="w-full bg-white flex item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full bg-[#442D87] rounded-[24px]">
        <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-4 p-[24px] lg:py-[40px] lg:px-[40px]">
          <span className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] font-[700] tracking-[-1.2px] text-start text-white leading-[48px] md:leading-[76px]">
            Specials from ImamConnect.
          </span>
          <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] tracking-[-0.2px] text-start text-white opacity-60">
            Be one of our service providers, and worth your value.
          </span>
        </div>
        <div className="w-full h-[237px] md:w-[40%] md:h-full relative">
          <Image
            src="assets/images/specials-img.svg"
            layout="fill"
            objectFit="cover"
            alt="Specials Image"
            className="rounded-bl-[24px] rounded-br-[24px] md:rounded-bl-[0px] md:rounded-tr-[24px] md:rounded-br-[24px]"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
