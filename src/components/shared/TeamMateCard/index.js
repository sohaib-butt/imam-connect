import Image from "next/image";
import React from "react";

const index = ({ img, name, designation }) => {
  return (
    <div className="flex-shrink-0 rounded-[10px] md:rounded-[12px] w-[266px] md:w-[344px] h-[377px] md:h-[488px] relative">
      <Image src={img} alt="Avatar" fill />
      <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 bg-[#F8F8F8] rounded-[10px] md:rounded-[12px] w-[240px] md:w-[312px] h-[87px] md:h-[112px] py-[13px] md:py-[16px] px-[19px] md:px-[24px] flex flex-col justify-start items-start gap-1">
        <span className="font-poppins font-[700] text-[#19191B] text-[14px] md:text-[16px] lg:text-[18px] text-start">
          {name}
        </span>
        <span className="font-poppins font-[500] text-[#00BAC2] text-[11px] md:text-[12px] lg:text-[14px] text-start">
          {designation}
        </span>
        <div className="flex justify-start items-center gap-3">
          <Image src="assets/images/grey_facebook.svg" alt="Facebook" width={16} height={16} />
          <Image src="assets/images/grey_linkedin.svg" alt="LinkedIn" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};

export default index;
