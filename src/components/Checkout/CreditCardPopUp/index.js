import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = ({ handleClose, primaryBtnClick }) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] sm:w-[70%] md:w-[50%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-3`}
      >
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="text-[14px] md:text-[16px] lg:text-[18px] font-[600] font-poppins text-[#101828] text-start">
            Credit Card
          </span>
          <span className="text-[14px] font-[400] font-poppins text-[#475467] text-start">
            Please fill your card details.
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
        <form className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
            <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-2">
              <label className="text-[14px] font-[600] font-poppins text-[#344054] text-center">
                Name on card
              </label>
              <input
                type="text"
                placeholder="Name on card"
                className="w-full h-[56px] border-[1px] border-[#D0D5DD] rounded-[8px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#101828] focus:outline-none px-[10px]"
              />
            </div>
            <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-2">
              <label className="text-[14px] font-[600] font-poppins text-[#344054] text-center">
                Expiry
              </label>
              <input
                type="text"
                placeholder="06/24"
                className="w-full h-[56px] border-[1px] border-[#D0D5DD] rounded-[8px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#101828] focus:outline-none px-[10px]"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-2 md:gap-4 md:flex-row justify-center items-center">
            <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-2">
              <label className="text-[14px] font-[600] font-poppins text-[#344054] text-center">
                Card number
              </label>
              <input
                type="text"
                placeholder="1234 1234 1234 1234"
                className="w-full h-[56px] border-[1px] border-[#D0D5DD] rounded-[8px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#101828] focus:outline-none px-[10px]"
              />
            </div>
            <div className="w-full md:w-[30%] flex flex-col justify-start items-start gap-2">
              <label className="text-[14px] font-[600] font-poppins text-[#344054] text-center">
                CVV
              </label>
              <input
                type="text"
                placeholder="121"
                className="w-full h-[56px] border-[1px] border-[#D0D5DD] rounded-[8px] font-poppins font-[400] text-[14px] md:text-[16px] text-[#101828] focus:outline-none px-[10px]"
              />
            </div>
          </div>
        </form>
        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
          <div className="w-full md:w-[50%] text-center py-2 md:py-[16px]">
            <button
              type="button"
              className={`w-full font-[700] flex justify-center items-center h-[44px] text-[14px] lg:text-[16px] text-[#334054] text-center bg-white rounded-[8px] border border-[#D0D5DD]`}
            >
              Cancel
            </button>
          </div>
          <div className="w-full md:w-[50%] text-center py-2 md:py-[16px]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[44px] !text-[14px] lg:!text-[16px]`}
              onClick={primaryBtnClick}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
