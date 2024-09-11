"use client"
import { InputField } from "@/components/shared";
import Image from "next/image";
import React from "react";
import Visa from "../../../../../public/assets/images/Visa.svg";
import Mastercard from "../../../../../public/assets/images/Mastercard.svg";
import Stripe from "../../../../../public/assets/images/Stripe.svg";
import PayPal from "../../../../../public/assets/images/PayPal.svg";
import GooglePay from "../../../../../public/assets/images/GooglePay.svg";
import ApplePay from "../../../../../public/assets/images/ApplePay.svg";
import Klarna from "../../../../../public/assets/images/Klarna.svg";
import { useRouter, usePathname } from "next/navigation";

const index = () => {
  const router = useRouter();
  const pathname = usePathname();
  const paymentImages = [
    Visa,
    Mastercard,
    Stripe,
    PayPal,
    GooglePay,
    ApplePay,
    Klarna,
  ];
  return (
    <div className="w-full md:w-[60%]">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <span className="font-poppins font-[700] text-[14px] md:text-[16px] text-center text-[#666666]">
          Complete Registration Payment
        </span>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
          <InputField label={"Address line"} placeholder={"Enter address"} />
          <InputField label={"City"} placeholder={"Enter city name"} />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
          <InputField label={"State"} placeholder={"Enter state name"} />
          <InputField label={"Postal Code"} placeholder={"Enter postal code"} />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <span className="font-poppins font-[700] text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#000000]">
            Payment Method
          </span>
          <div className="w-full flex flex-wrap justify-start items-center gap-4">
            {paymentImages?.map((i, index) => (
              <div key={index}>
                <Image src={i} width={60} height={41} />
              </div>
            ))}
          </div>
        </div>
        <span className="font-poppins font-[700] text-[16px] md:text-[18px] lg:text-[20px] text-center text-[#000000]">
          Card Details
        </span>
        <div className="w-full">
          <InputField
            label={"Cardholder’s Name"}
            placeholder={"This is person name"}
          />
        </div>
        <div className="w-full">
          <InputField
            label={"Card Number"}
            placeholder={"1234 1234 1234 1234"}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
          <InputField label={"Exp"} placeholder={"12/29"} />
          <InputField label={"CVC"} placeholder={"***"} />
        </div>
        <div className="w-full justify-start items-start">
          <button
            className="bg-[#00BAC2] w-full md:w-[280px] h-[48px] text-white font-[700] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px]"
            onClick={() => {
              if (pathname?.includes("addPayment")) {
                router.push("/sp-payment/paymentAdded");
              } else {
                router.push("/sp-payment/registerationcompleted");
              }
            }}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
