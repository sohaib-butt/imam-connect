import Image from "next/image";
import React from "react";
import ArrowRight from "../../../../public/assets/images/arrow_right.svg";
import CardsImg from "../../../../public/assets/images/cards-img.svg";
import CheckIcon from "../../../../public/assets/images/check-icon.svg";
import styles from "../../../styles/homepage.module.scss";

import PasswordForm from "./PasswordForm";
import PasswordDesc from "./PasswordDesc";

const index = () => {
  return (
    <div
      className={
        "w-full flex flex-col justify-start items-start gap-5 md:gap-10"
      }
    >
      <div className="w-full flex justify-start items-center gap-4">
        <Image src={ArrowRight.src} alt="Exit" width={30} height={30} />
        <span className="text-[#202124] md:text-[20px] lg:text-[24px] font-[600] tracking-[0.2px]">
          Create Password
        </span>
      </div>
      <div className="w-full flex flex-col justify-start items-start md:flex-row md:justify-around md:items-start gap-6 md:gap-5 lg:gap-8">
        <div className="w-full md:w-[50%]">
          <PasswordDesc />
        </div>
        <div className="w-full md:w-[50%]">
          <PasswordForm />
        </div>
      </div>
    </div>
  );
};

export default index;
