import React from "react";
import DetailInfo from "./DetailInfo";
import AreasForm from "./AreasForm";
import AdditionalForm from "./AdditionalForm";

const index = () => {
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start">
      <DetailInfo />
      <AreasForm />
      <AdditionalForm />
      <div className="w-full flex justify-between items-center">
        <span className="hidden md:block text-[15px] font-[600] text-[#F43F5E] font-poppins">
          Delete account
        </span>
        <button className="bg-[#00BAC2] w-full md:w-[232px] h-[48px] text-white font-[700] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px]">
          Update & Save
        </button>
      </div>
    </div>
  );
};

export default index;
