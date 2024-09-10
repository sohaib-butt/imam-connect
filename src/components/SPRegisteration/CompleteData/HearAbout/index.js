"use client";
import { SelectField, TextAreaField } from "@/components/shared";
import React, { useState } from "react";
import downArrow from "../../../../../public/assets/images/black-down-arrow.svg";
import Image from "next/image";

const index = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px] bg-[#EAE2FF]">
      <div className="w-full flex justify-between items-center md:hidden">
        <span className="text-[20] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
          How did you hear about ImamConnect?
        </span>
        <Image
          src={downArrow.src}
          width={14}
          height={7}
          className={`cursor-pointer ${open ? "rotate-[-90deg]" : ""}`}
          onClick={() => setOpen(!open)}
          alt="Toggle Answer"
        />
      </div>
      <span className="hidden md:block text-[20px] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
        Areas you able to serve
      </span>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <div className="w-full mb-4">
          <SelectField
            label={"Where did you hear about us?"}
            placeholder={"Facebook"}
            options={[
              "Facebook",
              "Instagram",
              "X (Twitter)",
              "LinkedIn",
              "Family or Friends",
              "Other"
            ]}
          />
        </div>
        <div className="w-full mb-4">
          <TextAreaField
            label={"Any other feedback or suggestions?"}
            placeholder={"Tell us about your opinion!"}
            areaClass={"!h-[87px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
