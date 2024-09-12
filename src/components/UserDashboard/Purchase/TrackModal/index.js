import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../../styles/homepage.module.scss";
import AdminProfile from "../../../../../public/assets/images/admin-profile.svg";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import councelImg from "../../../../../public/assets/images/councel-img.svg";

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  const stepsData = [
    {
      title: "Payment Received",
      content: "Select payment method to pay your order",
      active: true,
    },
    {
      title: "Session",
      content: "Service provider make a session with you shortly",
      active: true,
    },
    {
      title: "Complete!",
      content: "Yeay! You finished your booked service.",
      active: false,
    },
  ];
  const activeIndices = stepsData
    .map((step, index) => (step.active ? index : -1))
    .filter((index) => index !== -1);
  console.log("activeIndex", activeIndices);
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] bg-white rounded-[12px] relative p-[24px] flex flex-col justify-start items-center gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Track
          </span>
        </div>
        {handleClose && (
          <Image
            src={closeIcon}
            width={24}
            height={24}
            onClick={handleClose}
            className="absolute cursor-pointer top-5 right-4 z-10"
          />
        )}
        <div className="w-full flex flex-col-reverse md:flex-row md:justify-between md:items-center justify-start items-start gap-6">
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-2 pb-6 border-b border-b-[#E7E7E7]">
              <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center">
                <span className="text-[#666666] text-[14px] font-[400] font-poppins">
                  Purchase date
                </span>
                <span className="text-[14px] font-[400] text-[#161616] font-poppins">
                  25 January 2024, 13:28 UST
                </span>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start items-start md:justify-between md:items-center">
                <span className="text-[#666666] text-[14px] font-[400] font-poppins">
                  Invoice no
                </span>
                <a
                  href="#"
                  className="text-[14px] font-[700] text-[#00BAC2] font-poppins"
                >
                  INV/ISKEI9992/SIIDSIJKDSIJ-2929929
                </a>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center justify-start items-start gap-2">
              <span className="font-[700] text-[#161616] text-[16px] font-poppins">
                Service detail
              </span>
              <div className="w-full flex justify-start items-center mb-4 gap-4">
                <Image
                  src={AdminProfile.src}
                  width={52}
                  height={52}
                  alt="Admin"
                  className="rounded-full"
                />

                <div className="flex flex-col justify-start items-start gap-2">
                  <span className="font-[400] text-[#0D0C22] text-[14px] font-poppins">
                    Putri Azzahra
                  </span>
                  <span className="text-[#6E6D7A] text-[12px] font-[400] font-poppins">
                    Pshycotherapist
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-3">
              <span className="text-[10px] font-[400] text-[#1C1C1C] font-poppins">
                Customer already paid for this service
              </span>
              <div className="w-full border border-[#E7E7E7] rounded-[12px] p-5">
                <div className="flex justify-start items-center gap-4">
                  <Image
                    className="hidden md:block rounded-[3.05px]"
                    width={74}
                    height={74}
                    src={councelImg}
                    alt="Service"
                  />
                  <div className="flex flex-col justify-start items-start gap-1">
                    <span className="font-[700] text-[14px] md:text-[16px] font-poppins">
                      Counselling Physical Support, Meditation
                    </span>
                    <span className="text-[14px] text-[#666666] font-poppins font-[400]">
                      $10.00/h
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] md:pl-4 md:border-l md:border-l-[#E7E7E7] flex flex-col justify-start items-start gap-6">
            <span className="text-[16px] font-[700] mb-4 text-[#222222] font-poppins">
              Process
            </span>

            <div className="w-full">
              {stepsData.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex flex-col items-center">
                    {/* Step Number */}
                    <div
                      className={`w-[32px] h-[32px] text-white text-[16px] font-[400] rounded-full flex items-center justify-center ${
                        index <= activeIndices[activeIndices?.length - 1]
                          ? "bg-[#442D87]"
                          : "bg-[#D5D5D5]"
                      }`}
                    >
                      {index + 1}
                    </div>

                    {index < stepsData.length - 1 && (
                      <div
                        className={`w-[2px] h-[90px] md:h-[75px] border-l-2 border-dashed ${
                          index < activeIndices[activeIndices?.length - 1]
                            ? "border-[#442D87]"
                            : "border-[#D5D5D5]"
                        }`}
                      />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="flex flex-col justify-start items-start gap-2">
                    <span
                      className={`font-[600] text-[16px] font-poppins ${
                        index <= activeIndices[activeIndices?.length - 1]
                          ? "text-[#442D87]"
                          : "text-[#D5D5D5]"
                      }`}
                    >
                      {step.title}
                    </span>
                    <span
                      className={`text-[14px] font-[400] font-poppins ${
                        index <= activeIndices[activeIndices?.length - 1]
                          ? "text-[#442D87]"
                          : "text-[#D5D5D5]"
                      }`}
                    >
                      {step.content}
                    </span>
                    {activeIndices.length >= 2 && index == 1 && (
                      <div className="w-full flex justify-start items-center gap-4 mb-3">
                        <button
                          type="button"
                          className={`w-full rounded-[8px] !font-[700] font-poppins flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px] !bg-white !border-[1px] !border-[#F43F5E] !text-[#F43F5E]`}
                        >
                          Session Control
                        </button>
                        <button
                          type="button"
                          className={`${styles.primary_button} w-full !font-[700] font-poppins flex justify-center items-center !h-[48px] !text-[14px]`}
                        >
                          Go to room
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-end items-center gap-4 mt-4">
          <button
            type="button"
            className={`w-full md:!w-[25%] lg:!w-[20%] rounded-[8px] !font-[700] font-poppins flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px] !bg-white !text-[#F43F5E]`}
          >
            Dispute
          </button>
          <button
            type="button"
            className={`w-full md:!w-[25%] lg:!w-[20%] rounded-[8px] !font-[700] font-poppins flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px] !bg-white !border-[1px] !border-[#00BAC2] !text-[#00BAC2]`}
          >
            Chat with SP
          </button>
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[25%] lg:!w-[20%] !font-[700] font-poppins flex justify-center items-center !h-[48px] !text-[14px] ${activeIndices.length === 3 ? "!bg-[#00BAC2]": "!bg-[#D1D1D1]"}`}
            onClick={primaryBtnClick}
          >
            Complete session
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
