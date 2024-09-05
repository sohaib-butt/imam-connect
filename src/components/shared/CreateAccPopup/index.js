import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = ({
  title,
  titleDesc,
  popupClassName,
  handleClose,
  question,
  txt,
  isForm,
  primaryBtnClick,
  mainImg
}) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-3 ${popupClassName}`}
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
          <form className="w-full flex flex-col justify-center items-center gap-4">
            <div className="w-full flex flex-col justify-start items-start gap-2">
              <label className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#666666] text-center">
                Email address
              </label>
              <input
                type="text"
                placeholder="Please Enter your email address"
                className="w-full h-[56px] border-[1px] border-[#E7E7E7] rounded-[12px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#999999] focus:outline-none px-[10px]"
              />
            </div>
            <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
              <div className="w-full flex flex-col justify-start items-start gap-2 relative">
                <label className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#666666] text-center">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full h-[56px] border-[1px] border-[#E7E7E7] rounded-[12px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#999999] focus:outline-none px-[10px]"
                />
                <Image
                  src="assets/images/eye.svg"
                  width={24}
                  height={24}
                  onClick={handleClose}
                  className="absolute cursor-pointer top-12 right-4"
                />
              </div>
              <div className="w-full flex flex-col justify-start items-start gap-2 relative">
                <label className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#666666] text-center">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full h-[56px] border-[1px] border-[#E7E7E7] rounded-[12px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#999999] focus:outline-none px-[10px]"
                />
                <Image
                  src="assets/images/eye.svg"
                  width={24}
                  height={24}
                  onClick={handleClose}
                  className="absolute cursor-pointer top-12 right-4"
                />
              </div>
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
