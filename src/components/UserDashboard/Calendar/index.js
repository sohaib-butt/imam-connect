"use client"
import { useState } from "react";
import CalendarDesign from "../../shared/CalendarDesign";
import SetupCalendar from "./SetupCalendar";
const index = () => {
  const [integrated, setIntegrated] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[700] text-[#161616] font-poppins">
            Calendar
          </span>
          <span className="text-[14px] lg:text-[16px] font-[400] text-[#666666] font-poppins hidden md:block">
            You can set the schedule with your service providers
          </span>
        </div>
        {integrated == false ? (
          <SetupCalendar setIntegrated={setIntegrated} />
        ) : (
          <CalendarDesign />
        )}
      </div>
    </>
  );
};

export default index;
