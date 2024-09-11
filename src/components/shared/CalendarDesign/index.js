"use client";
import DatePicker from "../DatePicker";
import { useState } from "react";
import CalendarEclipse from "../../../../public/assets/images/calendar-eclipse.svg";
import DayLeft from "../../../../public/assets/images/day-left.svg";
import Image from "next/image";

const CalendarDesign = () => {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THUR", "FRI", "SAT"];
  const dates = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 31, 1, 2, 3, 4],
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center mb-4 gap-3">
        <div className="w-full md:w-[30%]">
          <DatePicker
            picker={"month"}
            pickerClassName={"!text-[#585757] !placeholder:text-[#585757]"}
          />
        </div>
        <div className="flex space-x-2">
          <Image src={DayLeft.src} width={36} height={36} />
          <button className="text-white bg-[#00BAC2] px-4 rounded-[6px] h-[33px] font-[700] font-inter text-[14px]">
            Today
          </button>
          <Image
            src={DayLeft.src}
            width={36}
            height={36}
            className="rotate-180"
          />
        </div>
      </div>

      <div className="w-full border border-[#E8E8E8] rounded-[8px]">
        <div className="grid grid-cols-7">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`font-inter font-[500] text-[12px] md:text-[14px] lg:text-[16px] text-[#969696] text-start p-1 md:p-2 lg:p-3 ${
                index == daysOfWeek?.length - 1
                  ? ""
                  : "border-r border-r-[#E8E8E8]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Dates */}
        <div className="grid grid-cols-7">
          {dates.flat().map((date, index) => (
            <div
              key={index}
              className={`h-[119px] md:h-[192px] border border-[#E8E8E8] p-[12px] text-[14px] md:text-[16px] lg:text-[21px] text-[#969696] font-[500] relative ${
                index > 30 ? "bg-[#F8F8F8]" : "bg-white"
              }`}
            >
              {date && (
                <>
                  <span className="absolute top-3 left-3">{date}</span>
                  {/* Add Event Example */}
                  {date === 1 && (
                    <>
                      <Image
                        src={CalendarEclipse.src}
                        width={7}
                        height={7}
                        className="block lg:hidden text-end absolute bottom-4 left-4"
                      />
                      <div className="hidden lg:block absolute bottom-3 left-3 right-3 bg-[#E0D6FF] text-[#442D87] font-[500] font-inter text-[12px] rounded-[4px] p-1">
                        Session 1 with Putri Azzahra
                      </div>
                    </>
                  )}
                  {date === 8 && (
                    <>
                      <Image
                        src={CalendarEclipse.src}
                        width={7}
                        height={7}
                        className="block lg:hidden text-end absolute bottom-4 left-4"
                      />
                      <div className="hidden lg:block absolute bottom-3 left-3 right-3 bg-[#E0D6FF] text-[#442D87] font-[500] font-inter text-[12px] rounded-[4px] p-1">
                        Session 2 with Putri Azzahra
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarDesign;
