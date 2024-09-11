"use client";
import React, { useState } from "react";
import IncomingTable from "./IncomingTable";
import OngoingTable from "./OngoingTable";
import AcceptOrderModal from "./AcceptOrderModal";
const index = () => {
  const [selectedTab, setSelectedTab] = useState("IncomingOrders");
  const [acceptModal, setAcceptModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-0">
        <div className="w-full flex flex-col justify-start items-start gap-4 border-b-0 border border-[#E7E7E7] p-[16px]">
          <div className="w-full flex flex-col justify-start items-start gap-2">
            <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
              Orders
            </span>
            <span className="text-[#667085] text-[14px] font-[400] text-start">
              The following columns are supported. Some may be required, the
              rest are optional
            </span>
          </div>
          <div className="w-full md:w-[50%] lg:w-[60%] relative flex flex-row">
            <button
              onClick={() => setSelectedTab("IncomingOrders")}
              className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
                selectedTab === "IncomingOrders"
                  ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                  : "text-[#999999]"
              } bg-white rounded-t-lg`}
            >
              Incoming Orders
            </button>
            <button
              onClick={() => setSelectedTab("OngoingOrders")}
              className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
                selectedTab === "OngoingOrders"
                  ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
                  : "text-[#999999]"
              } bg-white rounded-t-lg`}
            >
              Order Ongoing
            </button>
          </div>
        </div>
        {selectedTab == "IncomingOrders" ? (
          <IncomingTable setAcceptModal={setAcceptModal} />
        ) : (
          <OngoingTable />
        )}
      </div>
      {acceptModal == true && (
        <AcceptOrderModal handleClose={() => setAcceptModal(false)} />
      )}
    </>
  );
};

export default index;
