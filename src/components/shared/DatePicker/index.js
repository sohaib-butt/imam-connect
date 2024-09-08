"use client";
import { DatePicker } from "antd";
import { useState } from "react";
import Image from "next/image";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import "./datepicker.scss";
import CalendarIcon from "../../../../public/assets/images/calendar.svg";

const index = ({ label, placeholder, pickerClassName }) => {
  const [date, setDate] = useState(null);

  const handleChange = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <div className="w-full relative flex flex-col gap-[8px]">
      <span className="font-poppins text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <div>
        <DatePicker
          className={`w-full px-[16px] text-[14px] lg:text-[16px] placeholder:text-[14px] placeholder:lg:text-[16px] border border-[#E7E7E7] rounded-[12px] h-[56px] placeholder-[#999999] focus:outline-none focus:border-none cursor-pointer ${pickerClassName}`}
          format="DD MMMM YYYY"
          placeholder={placeholder}
          name="date"
          value={date ? dayjs(date) : null}
          onChange={handleChange}
          suffixIcon={
            <Image src={CalendarIcon.src} width={24} height={24} />
          }
        />
      </div>
    </div>
  );
};

export default index;
