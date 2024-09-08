import React from "react";
import BasicInfo from "./BasicInfo";
import ServiceImage from "./ServiceImage";
import Areas from "./Areas";

const index = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <div className="w-full border border-[#E7E7E7] flex flex-col justify-start items-start p-[16px] gap-2">
        <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
          Edit Services
        </span>
        <span className="text-[#667085] text-[14px] font-[400] font-poppins text-start">
          The following columns are supported. Some may be required, the rest
          are optional
        </span>
      </div>
      <BasicInfo />
      <ServiceImage />
      <Areas />
    </div>
  );
};

export default index;
