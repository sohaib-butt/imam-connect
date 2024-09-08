import { InputField, TextAreaField } from "@/components/shared";
import React from "react";

const index = () => {
  return (
    <div className="border border-[#E7E7E7] p-[16px] flex flex-col justify-start items-start w-full gap-4">
      <span className="text-[#202124] text-[18px] lg:text-[20px] font-[700] text-start">
        Basic information
      </span>
      <div className="w-full">
        <InputField
          label={"Service Name"}
          placeholder={"Enter your service name"}
        />
      </div>
      <div className="w-full">
        <TextAreaField
          label={"Description"}
          placeholder={"You can describe your services to audience."}
          areaClass={"h-[141px]"}
        />
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
        <InputField label={"Price"} placeholder={"$20"} />
        <InputField label={"Category"} placeholder={"Aqiqah"} />
      </div>
    </div>
  );
};

export default index;
