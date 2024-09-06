import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = ({ success }) => {
  return (
    <div className="w-full bg-white flex flex-col items-center justify-center gap-4 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <Image
        src={
          success == true
            ? "assets/images/tickMark-img.svg"
            : "assets/images/crossMark-img.svg"
        }
        width={125}
        height={125}
      />
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <span className="font-poppins font-[700] text-[32px] md:text-[36px] lg:text-[40px] text-center text-[#442D87]">
          {success == true
            ? "Yeay! Your order has been placed!"
            : "Sorry, your order has not been placed."}
        </span>
        <span className="font-poppins font-[400] text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#442D87]">
          {success == true
            ? "Your payment has been verified and successfulyly completed."
            : "Your payment was not successful. Please try again"}
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        {success && (
          <div
            className={`w-full font-[700] flex justify-center items-center h-[62px] text-[16px] md:text-[18px] lg:text-[20px] text-[#442D87] text-center bg-[#E0D6FF] rounded-[8px] border border-[#00BAC2] mb-3`}
          >
            Your order number: #283283299328
          </div>
        )}
        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[48px] !text-[14px] lg:!text-[16px]`}
        >
          {success == true ? "Continue Shopping" : "Try another method"}
        </button>
        <button
          type="button"
          className={`w-full font-[700] flex justify-center items-center h-[48px] text-[14px] lg:text-[16px] text-[#00BAC2] text-center bg-white rounded-[8px] border border-[#00BAC2]`}
        >
          {success == true ? "Return to home" : "Contact support"}
        </button>
        {success == false && (
          <div
            className={`w-full font-[700] flex justify-center items-center h-[48px] text-[14px] lg:text-[16px] text-[#00BAC2] text-center bg-white`}
          >
            Return to cart
          </div>
        )}
      </div>
      <span className="font-poppins font-[400] text-[14px] md:text-[16px] text-center text-[#442D87]">
        {success == true ? "Need help?" : "Still having issues with payment?"}{" "}
        <span className="text-[#442D87] font-[600]">Contact us!</span>
      </span>
    </div>
  );
};

export default index;
