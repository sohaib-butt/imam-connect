"use client";
import {
  DatePicker,
  InputField,
  SelectField,
  TextAreaField,
} from "@/components/shared";
import DropZone from "@/components/shared/Dropzone";
import React, { useState } from "react";
import downArrow from "../../../../../public/assets/images/black-down-arrow.svg";
import Image from "next/image";

const index = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px] bg-[#EBFEFF]">
      <div className="w-full flex justify-between items-center md:hidden">
        <span className="text-[20] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
          Detail Information
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
        Detail Information
      </span>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <InputField
            label={"First Name"}
            placeholder={"Enter your first name"}
          />
          <InputField
            label={"Last Name"}
            placeholder={"Enter your last name"}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <InputField label={"Email"} placeholder={"Enter your email"} />
          <InputField
            label={"Phone Number"}
            placeholder={"+62-812-3456-7890"}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <DatePicker
            label={"Date of Birth"}
            placeholder={"12 December 1992"}
          />
          <SelectField
            label={"Denomination"}
            placeholder={"$(USD)"}
            options={["$(USD)", "(INR)", "(PKR)", "(Riyal)"]}
          />
        </div>
        <div className="w-full mb-4">
          <SelectField
            label={"Language"}
            placeholder={"Select Languages"}
            options={["English", "Urdu", "Pashto", "Korean", "Chinese"]}
            multiple={true}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <SelectField
            label={"Country"}
            placeholder={"United Kingdom"}
            options={[
              "United Kingdom",
              "Australia",
              "India",
              "Pakistan",
              "Afghanistan",
              "China",
              "Japan",
            ]}
          />
          <SelectField
            label={"City"}
            placeholder={"London"}
            options={[
              "London",
              "Paris",
              "NewYork",
              "Lahore",
              "Beijing",
              "Dehli",
            ]}
          />
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <TextAreaField
            label={"Relevant work experiences"}
            placeholder={"Tell us about your story!"}
            areaClass={"!h-[156px]"}
          />
          <DropZone label={"Tell us about your story!"} />
        </div>
        <div className="w-full">
          <TextAreaField
            label={"Description of yourself"}
            placeholder={"Tell us about your story!"}
            areaClass={"!h-[87px]"}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
