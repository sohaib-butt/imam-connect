import { Cost, Tags } from "@/components/shared";
import React from "react";

const index = () => {
  const serviceCards = [1, 2, 3];
  return (
    <div className="w-full flex flex-col justify-start items-start">
      <span className="font-poppins font-[700] text-[28px] tracking-[2%] text-[#442D87]">
        Services
      </span>
      <div
        className="w-full flex items-center justify-start overflow-x-auto gap-4"
        style={{ scrollbarWidth: "none" }}
      >
        {serviceCards?.map((s) => (
          <div className="w-[239px] flex flex-col justify-start items-start border-[0.65px] border-[#D7D7D7] rounded-[12px]">
            <div className="w-full flex flex-col justify-start gap-2 p-[16px]">
              <span className="font-poppins font-[600] text-[16px] tracking-[-4%] text-[#2A282F]">
                I Offer - Counselling session for 30 mins
              </span>
              <div className="w-[40%]">
                <Cost price={"$10.00"} />
              </div>
              <span className="font-poppins font-[400] text-[12px] tracking-[-4%] text-[#625F68]">
                “Help others for those who need”
              </span>
              <Tags />
            </div>
            <div className="w-full border-t-[0.49px] border-t-[#E2DEE9] p-[16px]">
              <button className="w-full h-[40px] bg-[#442D87] text-white rounded-[5px] font-poppins text-[12px] font-[700] cursor-pointer">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
