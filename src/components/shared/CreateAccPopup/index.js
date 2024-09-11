import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";
import { InputField } from "..";

const index = ({
  title,
  titleDesc,
  popupClassName,
  handleClose,
  question,
  txt,
  isForm,
  primaryBtnClick,
  mainImg,
}) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-10 ${popupClassName}`}
        // style={{ scrollbarWidth: "none" }}
      >
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] font-poppins text-[#101828] text-start">
            {title}
          </span>
          <span className="text-[14px] font-[400] font-poppins text-[#101828] text-start">
            {titleDesc}
          </span>
        </div>
        {handleClose && (
          <Image
            src="assets/images/x-close.svg"
            width={24}
            height={24}
            onClick={handleClose}
            className="absolute cursor-pointer top-5 right-4 z-10"
          />
        )}
        <Image src={mainImg} width={250} height={250} />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <span className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] font-poppins text-[#442D87] text-center">
            {question}
          </span>
          <span className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#442D87] text-center">
            {txt}
          </span>
        </div>
        {isForm && (
          <form className="w-full flex flex-col justify-center items-center gap-6">
            <InputField
              label={"Email address"}
              placeholder={"Please Enter your email address"}
            />
            <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
              <InputField
                label={"Password"}
                placeholder={"*****************"}
                type={"password"}
              />
              <InputField
                label={"Confirm Password"}
                placeholder={"*****************"}
                type={"password"}
              />
            </div>
          </form>
        )}
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <div className="w-full md:w-[50%] text-center py-[16px]">
            <button
              type="button"
              className={`w-full font-[700] flex justify-center items-center h-[44px] text-[14px] lg:text-[16px] text-[#00BAC2] text-center bg-white rounded-[8px] drop-shadow-[0_1px_2px_rgba(16,24,40,0.05)]`}
            >
              I’ll continue as Guest
            </button>
          </div>
          <div className="w-full md:w-[50%] text-center py-[16px]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[44px] !text-[14px] lg:!text-[16px]`}
              onClick={primaryBtnClick}
            >
              Yes, create account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
