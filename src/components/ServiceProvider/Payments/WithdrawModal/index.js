"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../../styles/homepage.module.scss";
import { InputField, TextAreaField } from "@/components/shared";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import Stripe from "../../../../../public/assets/images/stripe-radio.svg";
import Paypal from "../../../../../public/assets/images/paypal-radio.svg";
import Credit from "../../../../../public/assets/images/mastercard-radio.svg";
import Apple from "../../../../../public/assets/images/apple-radio.svg";
import Klarna from "../../../../../public/assets/images/klarna-radio.svg";
import Bank from "../../../../../public/assets/images/bank-radio.svg";
import Remittance from "../../../../../public/assets/images/remittance-radio.svg";

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  const paymentOptions = [
    { id: "stripe", label: "Stripe", imgSrc: Stripe, value: "stripe" },
    { id: "paypal", label: "Paypal", imgSrc: Paypal, value: "paypal" },
    {
      id: "credit-debit",
      label: "Credit/Debit",
      imgSrc: Credit,
      value: "credit-debit",
    },
    { id: "applepay", label: "ApplePay", imgSrc: Apple, value: "applepay" },
    { id: "klarna", label: "Klarna", imgSrc: Klarna, value: "klarna" },
    {
      id: "bank-transfer",
      label: "Bank transfer",
      imgSrc: Bank,
      value: "bank-transfer",
    },
    {
      id: "remittance",
      label: "Remittance",
      imgSrc: Remittance,
      value: "remittance",
    },
  ];

  const [selectedValue, setSelectedValue] = useState("stripe");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
  };
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Withdrawal Options
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
          <InputField label={"Withdraw Amount"} placeholder={"$10,000"} />
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <span className="text-[14px] md:text-[16px] font-[700] font-poppins text-[#666666] text-start">
              Choose your account
            </span>
            <div className="w-full flex flex-wrap justify-start items-center gap-3">
              {paymentOptions.map((option, index) => (
                <label
                  key={index}
                  htmlFor={option?.id}
                  className={`w-full md:w-[230px] h-[70px] flex items-center gap-2 ${
                    selectedValue === option?.value
                      ? "border-[#00BAC2] border-[2px]"
                      : "border border-[#E7E7E7]"
                  } rounded-[10px] p-4 cursor-pointer`}
                >
                  {/* Radio button on the left */}
                  <input
                    type="radio"
                    id={option?.id}
                    value={option?.value}
                    checked={selectedValue === option?.value}
                    onChange={handleChange}
                    className="form-radio h-5 w-5 text-cyan-500 focus:ring-cyan-400"
                  />

                  {/* Icon and label */}
                  <div className="flex items-center gap-3">
                    <Image
                      src={option?.imgSrc.src}
                      width={24}
                      height={24}
                      alt={`${option?.label} logo`}
                    />
                    <span className="text-[#202124] font-[700] text-[15px]">
                      {option?.label}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end items-end">
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[40%] !font-[700] flex justify-center items-center !h-[48px] !text-[14px] !px-[10px]`}
            onClick={primaryBtnClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
