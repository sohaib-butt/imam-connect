"use client";
import React, { useState } from "react";
import PlusIcon from "../../../../public/assets/images/plus-icon.svg";
import styles from "../../../styles/homepage.module.scss";
import SearchIcon from "../../../../public/assets/images/searchIcon.svg";
import Image from "next/image";
import { DatePicker, StatusTags } from "@/components/shared";
import WithdrawHistory from "./WithdrawHistory";

const index = () => {
  const [selectedTab, setSelectedTab] = useState("TotalFunds");
  return (
    <div className="w-full flex flex-col justify-start items-start gap-6">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex flex-col xl:flex-row justify-start lg:justify-start xl:justify-between items-start gap-4">
          <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
            Payments
          </span>
          <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[30%]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
            >
              Add Payment Method
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-start items-end gap-2 md:gap-4">
          <div style={{ width: "100%", position: "relative" }}>
            <input
              name="name"
              id="name"
              type="text"
              className={`${styles.header_search_div} !w-full !h-[42px] !text-[14px] placeholder:!text-[14px]`}
              placeholder="Search"
            />
            <Image
              src={SearchIcon.src}
              alt="search"
              width={15.45}
              height={15.47}
              className={`${styles.header_search_icon} !top-[14px]`}
            />
          </div>
          <DatePicker
            placeholder={"Choose transaction date"}
            pickerClassName={"!w-full !h-[42px] !rounded-[0px]"}
          />
        </div>
        <StatusTags numberOfTags={3}/>
        <div className="w-full border border-[#D0D5DD] rounded-[8px]">
          <div className="w-full relative flex flex-row p-[16px] border-b border-b-[#D0D5DD]">
            <button
              onClick={() => setSelectedTab("TotalFunds")}
              className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
                selectedTab === "TotalFunds"
                  ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                  : "text-[#999999]"
              } bg-white rounded-t-lg`}
            >
              Total Income Funds
            </button>
            <button
              onClick={() => setSelectedTab("Pending")}
              className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
                selectedTab === "Pending"
                  ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                  : "text-[#999999]"
              } bg-white rounded-t-lg`}
            >
              Pending
            </button>
            <button
              onClick={() => setSelectedTab("Available")}
              className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
                selectedTab === "Available"
                  ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                  : "text-[#999999]"
              } bg-white rounded-t-lg`}
            >
              Available to withdraw
            </button>
          </div>
          <div className="w-full flex flex-col justify-center items-center gap-3 p-[24px]">
            <span className="text-[#000000] text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-center">
              $200,000
            </span>
            <span className="text-[#202124] text-[14px] lg:text-[16px] font-[400] text-center">
              Total funds from service providers
            </span>
          </div>
        </div>
      </div>
      <span className="text-[#161616] text-[16px] md:text-[18px] lg:text-[20px] font-[700] text-start">
        Withdraw history
      </span>
      {selectedTab == "TotalFunds" ? <WithdrawHistory /> : <WithdrawHistory />}
    </div>
  );
};

export default index;
