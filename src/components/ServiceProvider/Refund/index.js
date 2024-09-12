"use client";
import React, { useState } from "react";
import RequestTable from "./RequestTable";
import PlusIcon from "../../../../public/assets/images/plus-icon.svg";
import styles from "../../../styles/homepage.module.scss"
import Image from "next/image";

const index = () => {
  const [selectedTab, setSelectedTab] = useState("RefundRequest");
  return (
    <div className="w-full flex flex-col justify-start items-start gap-0">
      <div className="w-full flex flex-col justify-start items-start gap-4 border-b-0 border border-[#E7E7E7] p-[16px]">
        <div className="w-full flex flex-col xl:flex-row justify-start lg:justify-start xl:justify-between items-start lg:items-start xl:items-center gap-4">
          <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-2">
            <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
              Refund Request Management
            </span>
            <span className="text-[#667085] text-[14px] font-[400] font-poppins text-start">
              This is all listed refund request the user requested.
            </span>
          </div>
          <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[30%]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
            >
              <Image src={PlusIcon.src} alt="Exit" width={20} height={20} />
              Add Refund Request
            </button>
          </div>
        </div>
        <div className="w-full md:w-[50%] lg:w-[60%] relative flex flex-row">
          <button
            onClick={() => setSelectedTab("RefundRequest")}
            className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
              selectedTab === "RefundRequest"
                ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                : "text-[#999999]"
            } bg-white rounded-t-lg`}
          >
            Refund Request List
          </button>
          <button
            onClick={() => setSelectedTab("RefundHistory")}
            className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
              selectedTab === "RefundHistory"
                ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                : "text-[#999999]"
            } bg-white rounded-t-lg`}
          >
            Refund History
          </button>
        </div>
      </div>
      {selectedTab == "RefundRequest" ? <RequestTable /> : <RequestTable />}
    </div>
  );
};

export default index;
