"use client";
import React, { useState } from "react";
import RefundHistoryTable from "./RefundHistory/RefundHistoryTable";
import RefundRequestTable from "./RefundRequestList/RedundRequestTable";

const RefundList = () => {
  const [selectedTab, setSelectedTab] = useState("RefundRequestList");

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">
            Refund Request Management
          </div>
          <div className="font-normal text-[#667085] text-[12px]">
            This is all listed refund request the user requested.
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            + Add New Users
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative mb-4 flex flex-row py-2 lg:py-4">
        {["RefundRequestList", "RefundHistory"].map((tab) => (
          <button
            key={tab}
            onClick={() => setSelectedTab(tab)}
            className={`flex items-center justify-center w-full md:w-[224px] h-[56px] text-sm font-bold relative ${
              selectedTab === tab
                ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                : "text-[#999999]"
            } bg-white py-4 rounded-t-lg`}
          >
            {tab === "RefundRequestList"
              ? "Refund Request List"
              : "Refund History"}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-4 lg:py-4">
        {selectedTab === "RefundRequestList" && (
          <div>
            <RefundRequestTable />

          </div>
        )}
        {selectedTab === "RefundHistory" && (
          <div>
            <RefundHistoryTable />

          </div>
        )}
      </div>
    </div>
  );
};

export default RefundList;
