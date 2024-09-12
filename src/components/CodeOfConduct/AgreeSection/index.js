import Image from "next/image";
import React from "react";
import { UsersAgreeTo, SPAgreeTo } from "@/utils/constants";

const index = () => {
  return (
    <div className="w-full bg-white flex flex-col item-center justify-center p-0 md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <div className="w-full bg-[#01B9C3] flex flex-col justify-center items-center gap-5 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
        <span
          className="font-poppins text-[24px] md:text-[48px] lg:text-[64px] font-[500] text-center text-white"
          style={{ textShadow: "0 4px 4px rgba(68, 45, 135, 1)" }}
        >
          Users of ImamConnect agree to
        </span>

        <div className="flex flex-col justify-center items-center gap-3">
          {UsersAgreeTo?.map((u, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2"
            >
              <Image src={u?.img} alt="Platform" width={150} height={150} />
              <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-center text-white">
                {u?.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full bg-[#482E91] flex flex-col justify-center items-center gap-5 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
        <span
          className="font-poppins text-[24px] md:text-[48px] lg:text-[64px] font-[500] text-center text-white"
          style={{ textShadow: "0 4px 4px rgba(0, 186, 194, 1)" }}
        >
          Service Providers On ImamConnect agree to
        </span>

        <div className="flex flex-col justify-center items-center gap-3">
          {SPAgreeTo?.map((u, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-5"
            >
              <Image src={u?.img} alt="Platform" width={150} height={150} />
              <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] text-center md:text-start text-white">
                {u?.text}
              </span>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start items-start gap-10 md:gap-20 border-t-[1px] border-t-white pt-4 md:pt-10">
          <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-4">
            <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-start text-white">
              For more information
            </span>
            <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-start text-[#00BAC2]">
              www.imamconnect.com/faq
            </span>
          </div>
          <div className="w-full md:w-[50%] flex flex-col justify-start items-start gap-2">
            <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-start text-white">
              Or contact us
            </span>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-start text-white">
                <span className="font-[700] text-[#00BAC2]">UK</span> +44 20
                3983 7448
              </span>
              <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-start text-white">
                <span className="font-[700] text-[#00BAC2]">USA</span> +1 (661)
                735-1980
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
