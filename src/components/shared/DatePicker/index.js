"use client";
import { DatePicker } from "antd";
import { useState } from "react";
import Image from "next/image";
import "antd/dist/reset.css";
import dayjs from "dayjs";
import "./datepicker.scss";

const index = (props) => {
  const { label, placeholder } = props;
  const [date, setDate] = useState(null);

  const handleChange = (date, dateString) => {
    setDate(dateString);
  };

  return (
    <div className="relative flex flex-col gap-[8px]">
      <span className="font-poppins text-[16px] font-[400] text-[#666666] leading-[20px]">
        {label}
      </span>
      <div>
        <DatePicker
          className="w-full px-[16px] border border-[#E7E7E7] rounded-[12px] h-[56px] placeholder-[#999999] focus:outline-none focus:border-none cursor-pointer"
          dateFormat="yyyy-MM-dd"
          placeholder=""
          name="date"
          value={date ? dayjs(date) : null}
          onChange={handleChange}
          suffixIcon={
            <Image src="assets/images/calendar.svg" width={24} height={24} />
          }
        />
      </div>
    </div>
  );
};

export default index;
