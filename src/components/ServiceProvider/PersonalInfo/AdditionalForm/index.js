"use client";
import { InputField, SelectField, TextAreaField } from "@/components/shared";
import CheckboxGroup from "@/components/shared/CheckboxGroup";
import RadioGroup from "@/components/shared/RadioGroup";
import React, { useState } from "react";
import downArrow from "../../../../../public/assets/images/black-down-arrow.svg";
import Image from "next/image";

const index = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px] bg-[#F7FFF1]">
      <div className="w-full flex justify-between items-center md:hidden">
        <span className="text-[20] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
          Additional Information
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
        Additional Information
      </span>
      <div className={`${open ? "block" : "hidden"} md:block`}>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
        <SelectField
          label={"Your Preffered Audience"}
          placeholder={"Adult Men"}
          options={["Adult Men", "Adult Women", "Young Boys", "Young Girls"]}
        />
        <InputField label={"Price per hour"} placeholder={"$100"} />
      </div>
      <div className="w-full mb-4">
        <TextAreaField
          label={"Why do you think people should book you?"}
          placeholder={"Tell us about your story!"}
          areaClass={"!h-[87px]"}
        />
      </div>
      <div className="w-full mb-4">
        <RadioGroup
          label="Are you willing to provide part of your service online?"
          name="serviceOnline"
          options={[
            { label: "Yes", value: "yes" },
            { label: "No", value: "no" },
          ]}
        />
      </div>
      <div className="w-full">
        <CheckboxGroup
          label="DBS/CRB & Safeguarding checks, Criminal Record Checks"
          options={[
            { label: "DBS/CRB (UK)", value: "dbsCrb" },
            { label: "Safeguarding Checks Documents", value: "safeguarding" },
            { label: "Criminal Record Checks", value: "criminalRecord" },
            { label: "A similar document", value: "similarDocument" },
            { label: "None", value: "none" },
          ]}
        />
      </div>
      </div>
    </div>
  );
};

export default index;
