import { PurpleCard } from "@/components/shared";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full bg-white flex flex-col items-center md:item-start justify-center md:justify-start p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px] gap-10">
      <div className="w-full flex flex-col gap-2 justify-center md:justify-start items-center md:items-start">
        <span className="font-poppins font-[600] text-[32px] text-[#442D87] text-center md:text-start leadig-[48px]">
          Got a message? Send us!
        </span>
        <span className="font-poppins font-[400] text-[16px] text-[#2D2E2E] text-center md:text-start leading-[22px]">
          If you get any further questions, feel free to reach us.
        </span>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-20 justify-start items-start md:justify-between md:items-start">
        <div className="h-[680px] w-full md:w-[70%] rounded-[16px] p-[24px] border border-[#D7D7D7]"></div>
        <div className="w-full md:w-[30%] flex flex-col gap-6 justify-start items-start">
          <div className="flex flex-col justify-start items-start">
            <span className="font-poppins font-[600] text-[24px] text-[#202124] text-start tracking-[2%]">
              Location
            </span>
            <span className="font-poppins font-[600] text-[14px] text-[#279FFF] text-start">
              London, United Kingdom
            </span>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="font-poppins font-[400] text-[10px] text-[#666666] text-start opacity-40 tracking-[4%]">
              MAIN OFFICE ADDRESS
            </span>
            <div className="w-full pt-5 border-t-[1px] border-t-[#D7D7D7] flex flex-col justify-start items-start">
              <span className="font-poppins font-[400] text-[14px] text-[#666666] text-start opacity-60">
                Imam Connect LTD (12658054)
              </span>
              <span className="font-poppins font-[400] text-[14px] text-[#666666] text-start opacity-60">
                85 Great Portland Street First
                <br />
                Floor, London, United Kingdom, W1W 7LT
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
