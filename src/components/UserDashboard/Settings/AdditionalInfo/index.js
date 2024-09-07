import {
  DatePicker,
  InputField,
  PurpleCard,
  SelectField,
} from "@/components/shared";
import DropZone from "@/components/shared/Dropzone";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px]">
      <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] text-[#666666] font-poppins">
        Basic Information
      </span>
      <div className="w-full md:w-[50%]">
        <DropZone label={"Profile picture"} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <DatePicker label={"Date of Birth"} placeholder={"12 December 1992"} />
        <InputField
          label={"Denomination"}
          placeholder={"$ (USD)"}
          type={"number"}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <SelectField
          label={"Gender"}
          placeholder={"Male"}
          options={["Male", "Female", "Other"]}
        />
        <SelectField
          label={"Languages"}
          placeholder={"Select Languages"}
          options={["English", "Urdu", "Pashto", "Korean", "Chinese"]}
          multiple={true}
        />
      </div>
      <div className="w-full">
        <InputField label={"Address Line"} placeholder={"Enter your address"} />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
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
          options={["London", "Paris", "NewYork", "Lahore", "Beijing", "Dehli"]}
        />
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-4">
        <SelectField
          label={"Preferred Counsellor Gender"}
          placeholder={"Male"}
          options={["Male", "Female", "Other"]}
        />
        <SelectField
          label={"Preferred Counsellor Nationality"}
          placeholder={"England"}
          options={[
            "England",
            "American",
            "Australian",
            "Indian",
            "Pakistani",
            "Afghanistani",
            "Chinese",
            "Japanese",
          ]}
        />
      </div>
      <div className="w-full">
        <SelectField
          label={"Service Preferences"}
          placeholder={"Select one of your service preferrences"}
          options={["Teaching", "Engineering", "Health Services"]}
        />
      </div>
    </div>
  );
};

export default index;
