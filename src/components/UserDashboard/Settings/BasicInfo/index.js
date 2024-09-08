import { InputField, PurpleCard } from "@/components/shared";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px]">
      <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-[#666666] font-poppins">
        Basic Information
      </span>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <InputField label={"First Name"} placeholder={"First Name"} />
        <InputField label={"Last Name"} placeholder={"Last Name"} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <InputField
          label={"Password"}
          placeholder={"*****************"}
          type={"password"}
        />
        <InputField
          label={"Confirm Password"}
          placeholder={"*****************"}
          type={"password"}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <InputField
          label={"Email"}
          placeholder={"Email"}
        />
        <InputField
          label={"Phone Number"}
          placeholder={"Phone Number"}
        />
      </div>
    </div>
  );
};

export default index;
