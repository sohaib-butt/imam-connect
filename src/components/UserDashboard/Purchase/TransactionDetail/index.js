import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../../styles/homepage.module.scss";
import AdminProfile from "../../../../../public/assets/images/admin-profile.svg";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import councelImg from "../../../../../public/assets/images/councel-img.svg";
import locationIcon from "../../../../../public/assets/images/location-icon.svg";
import avatarCart from "../../../../../public/assets/images/avatar-cart.svg";
import downloadIcon from "../../../../../public/assets/images/white-download.svg";
import { Cost, Tags } from "@/components/shared";

const Card = () => {
  return (
    <div className="w-full border border-[#D7D7D7] rounded-[8px] p-[14px] flex flex-col items-center justify-center gap-2">
      <Image src={avatarCart.src} width={90} height={90} />
      <div>
        <Cost price={"$10.00"} />
      </div>
      <div className={styles.location_div}>
        <img src={locationIcon.src} />
        <span className={styles.location}>London, UK</span>
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-[80%] text-center"></div>
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <span className="w-full text-[#2A282F] font-poppins font-[600] text-[16px] text-start leading-[24px]">
          Putri Azzahra
        </span>
        <span class="text-[14px] font-[700] font-poppins text-[#625F68] text-start leading-[18px]">
          “Help others for those who need”
        </span>
      </div>
      <Tags />
    </div>
  );
};

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] bg-white rounded-[12px] relative p-[24px] flex flex-col justify-start items-center gap-5 md:gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Transaction Detail
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
        <div className="w-full flex flex-col md:flex-row md:justify-between justify-start items-start gap-6">
          <div className="w-full md:w-[70%] flex flex-col justify-center items-center gap-4 md:pr-20 md:border-r md:border-r-[#E7E7E7]">
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
              <div className="w-[50%] h-[34px] bg-[#E0D6FF] flex justify-center items-center rounded-[13px]">
                <span className="text-[#442D87] text-[12px] font-[700] font-poppins">
                  Payment received
                </span>
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

            <div className="w-full flex flex-col justify-start items-start gap-3 pb-4 border-b border-b-[#E7E7E7]">
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
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <span className="font-[700] text-[#161616] text-[16px] font-poppins">
                Detail payment
              </span>
              <div className="w-full flex justify-between items-center">
                <span className="text-[#666666] text-[14px] font-[400] font-poppins">
                  Payment method
                </span>
                <span className="text-[14px] font-[400] text-[#161616] font-poppins">
                  Stripe
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-[#666666] text-[14px] font-[400] font-poppins">
                  Price total
                </span>
                <span className="text-[14px] font-[400] text-[#666666] font-poppins">
                  $110.00
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-[#666666] text-[14px] font-[400] font-poppins">
                  Discount
                </span>
                <span className="text-[14px] font-[400] text-[#666666] font-poppins">
                  $10.00
                </span>
              </div>
              <div className="w-full flex justify-between items-center">
                <span className="text-[#666666] text-[14px] font-[700] font-poppins">
                  Total
                </span>
                <span className="text-[14px] font-[700] text-[#666666] font-poppins">
                  $100.00
                </span>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-6">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
            >
              <Image src={downloadIcon.src} alt="Exit" width={20} height={20} />
              Download Receipt
            </button>
            <span class="block text-[14px] font-[400] font-poppins text-[#999999] text-start">
              *The file will be downloaded in PDF format.
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-start justify-start gap-3">
          <div className="w-full flex flex-col justify-start items-start gap-2 border-b-[1px] border-b-[#D7D7D7] pb-4">
            <span className="text-[#442D87] font-poppins font-[700] text-[16px] md:text-[18px] lg:text-[20px]">
              You might be like one of these
            </span>
            <span class="block text-[14px] font-[500] font-poppins text-[#442D87] text-start">
              Description to engage
            </span>
          </div>
          <div
            className="w-full lg:w-[80%] flex justify-start items-center gap-3 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {[1, 2].map((i, index) => (
              <Card />
            ))}
          </div>
          {/* <Card /> */}
        </div>
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-end items-center gap-4 mt-4">
          <button
            type="button"
            className={`w-full md:!w-[25%] lg:!w-[20%] rounded-[8px] !font-[700] font-poppins flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px] !bg-white !text-[#F43F5E]`}
          >
            Refund this service
          </button>
          <button
            type="button"
            className={`w-full md:!w-[25%] lg:!w-[20%] rounded-[8px] !font-[700] font-poppins flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px] !bg-white !border-[1px] !border-[#00BAC2] !text-[#00BAC2]`}
          >
            Chat with counsellor
          </button>
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[25%] lg:!w-[20%] !font-[700] font-poppins flex justify-center items-center !h-[48px] !text-[14px]`}
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
