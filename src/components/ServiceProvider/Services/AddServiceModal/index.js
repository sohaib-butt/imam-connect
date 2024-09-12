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
            Add New Service
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
            label={"Service name"}
            placeholder={"Counselling for 30 mins to get a better vision"}
          />
          <TextAreaField
            label={"Service Descriptionn"}
            placeholder={
              "This is a long description that the SP can tell the audience."
            }
          />
          <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
            <InputField label={"Service Price"} placeholder={"$"} />
            <InputField label={"Service Category"} placeholder={"Nikkah"} />
          </div>
        </div>
        <div className="w-full flex justify-end items-end">
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[40%] !font-[700] flex justify-center items-center !h-[48px] !text-[14px] !px-[10px]`}
            onClick={primaryBtnClick}
          >
            Add Service
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
