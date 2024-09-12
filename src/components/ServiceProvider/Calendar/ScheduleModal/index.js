import Image from "next/image";
import React from "react";
import styles from "../../../../styles/homepage.module.scss";
import { InputField, TextAreaField } from "@/components/shared";
import closeIcon from "../../../../../public/assets/images/x-close.svg";

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Add Schedule
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
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <InputField
            label={"Customer name"}
            placeholder={"Abdurrahman S"}
            inputClass={"!bg-[#F8F8F8]"}
          />
          <InputField
            label={"Services"}
            placeholder={"30 Mins of Psychology Mind - To Keep You Better"}
            inputClass={"!bg-[#F8F8F8]"}
          />
          <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
            <InputField
              label={"Date"}
              placeholder={"23 February 2024"}
              inputClass={"!bg-[#F8F8F8]"}
            />
            <InputField label={"Time"} placeholder={"4:30PM British Time"} />
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <span className="text-[14px] md:text-[16px] font-[600] font-poppins text-[#161616] text-start">
              Link to session
            </span>
            <InputField
              label={"Link"}
              placeholder={
                "https://meet.google.com/Sjkisjadia-Session-to-online"
              }
            />
          </div>
          <TextAreaField
            label={"Additional notes"}
            placeholder={
              "Hello, {Customer Name}! I will send our schedule to establish the counselling session to your email. Hope this helps!"
            }
            areaClass={"!h-[92px]"}
          />
        </div>
        <div className="w-full flex justify-end items-end">
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[40%] !font-[700] flex justify-center items-center !h-[48px] !text-[14px] !px-[10px]`}
            onClick={primaryBtnClick}
          >
            Add Schedule
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
