import Image from "next/image";
import React from "react";
import ArrowRight from "../../../../public/assets/images/arrow_right.svg";
import CardsImg from "../../../../public/assets/images/cards-img.svg";
import CheckIcon from "../../../../public/assets/images/check-icon.svg";
import styles from "../../../styles/homepage.module.scss";

import PaymentForm from "./PaymentForm";

const index = ({ paymentAdded }) => {
  return (
    <div
      className={`w-full flex flex-col justify-start items-start gap-5 md:gap-10 ${
        paymentAdded == true ? "relative" : ""
      }`}
    >
      {paymentAdded == true && (
        <div
          className={`${styles.primary_button} md:!w-[300px] !shadow-[0px_3px_4px_0px_rgba(0,0,0,0.15)] !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !rounded-[10px] !bg-[#22C55E] z-20 absolute top-[-15px] right-[-10px] md:right-[-15px] lg:top-[-40px] lg:right-[-40px]`}
        >
          <Image src={CheckIcon.src} alt="Exit" width={24} height={24} />
          <span className="text-[16px] whitespace-nowrap">Payment added to your account</span>
        </div>
      )}
      <div className="w-full flex justify-start items-center gap-4">
        <Image src={ArrowRight.src} alt="Exit" width={30} height={30} />
        <span className="text-[#202124] md:text-[20px] lg:text-[24px] font-[600] tracking-[0.2px]">
          Add Payment Info
        </span>
      </div>
      <div className="w-full hidden md:flex justify-around items-center gap-4">
        <Image src={CardsImg.src} alt="Exit" width={256} height={256} />
        <PaymentForm />
      </div>
      <div className="w-full block md:hidden">
        <PaymentForm />
      </div>
    </div>
  );
};

export default index;
