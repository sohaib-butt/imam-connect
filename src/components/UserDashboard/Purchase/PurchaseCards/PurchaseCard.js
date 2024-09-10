import React from "react";
import InProgress from "../../../../../public/assets/images/inProgress-badge.svg";
import FileDownload from "../../../../../public/assets/images/download-icon.svg";
import AdminProfile from '../../../../../public/assets/images/admin-profile.svg'
import Image from "next/image";
import styles from "../../../../styles/homepage.module.scss";

const PurchaseCard = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-3 border border-[#E7E7E7] rounded-[12px] p-[16px]">
      <div className="w-full flex justify-between items-center gap-3">
        <div className="md:w-[70%] flex flex-col justify-start items-start md:flex-row lg:flex-col 2xl:flex-row md:items-center lg:items-start 2xl:items-center md:justify-between gap-2">
          <div className="flex items-center">
            <Image
              src={AdminProfile.src}
              width={52}
              height={52}
              alt="Admin"
              className="rounded-full"
            />
            <div className="flex flex-col justify-start items-start gap-1 ml-1">
              <span className="font-[700] font-poppins text-[#1C1C1C] text-[12px]">
                User-name
              </span>
              <span
                className="text-[#1C1C1C] font-poppins font-[400] text-[10px]"
                style={{ fontSize: "10.25px" }}
              >
                Psychotherapist
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <span className="font-[400] font-poppins text-[#999999] text-[10px]">
              INV/ISKEI9992/SIIDSJKDSIJ-2929929
            </span>
            <Image
              src={InProgress.src}
              width={65}
              height={15}
              className="hidden md:block lg:hidden 2xl:block"
            />
          </div>
        </div>
        <div className="flex flex-col justify-start items-start gap-2">
          <Image
            src={InProgress.src}
            width={65}
            height={15}
            className="block md:hidden lg:block 2xl:hidden"
          />
          <div className="flex justify-start items-center gap-1">
            <Image src={FileDownload.src} width={22} height={22} />
            <span className="font-[600] font-poppins text-[#00BAC2] text-[11px]">
              Download receipt
            </span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <span className="font-[700] font-poppins text-[#1C1C1C] text-[16px] md:text-[18px] lg:text-[20px]">
          Counselling Physical Support, Meditation
        </span>
        <span className="font-[400] font-poppins text-[#666666] text-[14px]">
          $10.00/h
        </span>
      </div>
      <div className="w-full flex justify-end items-center gap-2">
        <button
          type="button"
          className={`w-full font-[700] md:flex justify-center items-center h-[40px] text-[12px] text-[#00BAC2] text-center hidden`}
        >
          Buy again
        </button>
        <button
          type="button"
          className={`w-full font-[700] flex justify-center items-center h-[40px] text-[12px] text-[#00BAC2] text-center bg-white md:rounded-[8px] md:border md:border-[#00BAC2]`}
        >
          See detail transaction
        </button>

        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[40px] !text-[12px]`}
        >
          Track
        </button>
      </div>
    </div>
  );
};

export default PurchaseCard;
