import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = ({ title, popupClassName, handleClose }) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-3 ${popupClassName}`}
      >
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] font-poppins text-[#101828] text-start">
            {title}
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
        <Image src="assets/images/tickMark-img.svg" width={128} height={128} />
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <span className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] font-poppins text-[#442D87] text-center">
            Yeay! Your account has been set up!
          </span>
          <span className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#442D87] text-center">
            Your account has been created. You can log in with your account
          </span>
        </div>
        <label class="w-full flex justify-start items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            class="w-5 h-5 mt-1 mr-3 cursor-pointer"
          />
          <div>
            <span class="block text-[14px] md:text-[16px] font-[600] text-[#161616] text-start">
              Subscribe to our Newsletter
            </span>
            <span class="block text-[14px] font-[400] font-poppins text-[#999999] text-start">
              Stay updated with the latest news, updates, and special offers.
            </span>
          </div>
        </label>
        <div className="w-full flex justify-center items-center py-[16px]">
          <button
            type="button"
            className={`${styles.primary_button} !w-[50%] !font-[700] flex justify-center items-center !h-[44px] !text-[14px] lg:!text-[16px]`}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
