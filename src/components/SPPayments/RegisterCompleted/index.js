import Image from "next/image";
import React from "react";
import completedImg from "../../../../public/assets/images/completed-img.svg";

const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-5">
      <Image src={completedImg.src} width={335} height={364} />
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <span className="font-poppins text-[32px] md:text[36px] lg:text-[40px] font-[700] text-[#442D87] text-center">
          Yeay! You did it!
        </span>
        <span className="font-poppins text-[16px] md:text[18px] lg:text-[20px] font-[400] text-[#442D87] text-center">
          Congratulations, your profile has been created. Let’s explore our
          feature in the platform.
        </span>
      </div>
      <div className="w-full md:w-[260px] flex justify-center items-center">
        <button className="bg-[#00BAC2] w-full h-[46px] text-white font-[700] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px]">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default index;
