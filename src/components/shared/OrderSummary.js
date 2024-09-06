"use client";
import React from "react";
import styles from "../../styles/homepage.module.scss";
import { useRouter } from "next/navigation";

const OrderSummary = ({ success }) => {
  const router = useRouter();
  return (
    <div className="w-full border border-[#D7D7D7] rounded-[8px] p-[24px] flex flex-col items-start justify-start gap-3">
      <span className="text-[#442D87] font-poppins font-[700] text-[16px] md:text-[18px] lg:text-[20px] border-b-[1px] border-b-[#D7D7D7] w-full pb-2">
        Order summary
      </span>
      <div className="w-full flex flex-col justify-start items-start gap-2">
        <span class="block text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#161C2D] text-start font-poppins">
          Marriage and Family Services
        </span>
        <span class="block text-[14px] lg:text-[16px] font-[500] font-poppins text-[#999999] text-start">
          25 hour x $10/h
        </span>
      </div>
      <div className="w-full flex justify-between items-center">
        <span class="block text-[14px] md:text-[16px] font-[700] text-[#442D87] text-start font-poppins">
          Total
        </span>
        <span class="block text-[16px] md:text-[20px] lg:text-[24px] font-[700] font-poppins text-[#442D87] text-start">
          $250.00
        </span>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-2">
        <button
          type="button"
          className={`w-full font-[700] flex justify-center items-center h-[48px] text-[14px] lg:text-[16px] text-[#00BAC2] text-center bg-white rounded-[8px] border border-[#00BAC2]`}
        >
          Apply Coupon Code
        </button>
        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[48px] !text-[14px] lg:!text-[16px]`}
          onClick={() => router.push(success ? "/checkout-feedback": "/checkout")}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
