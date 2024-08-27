import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="w-full bg-white flex flex-col item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <div className="flex flex-col md:flex-row justify-between items-start w-full bg-[#442D87] rounded-[24px] p-[24px] lg:py-[30px] lg:px-[40px]">
        <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-0">
          <span className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] font-[700] tracking-[-1.2px] text-start text-white leading-[48px] md:leading-[76px]">
            Code of Conduct
          </span>
          <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] tracking-[-0.2px] text-start text-white opacity-60 leading-[29px]">
            www.imamconnect.com
          </span>
        </div>
        <div className="w-[30%] relative">
          <Image
            src="assets/images/imamLogo.svg"
            width={250}
            height={50}
            alt="Logo Image"
          />
        </div>
      </div>
    </section>
  );
};

export default index;
