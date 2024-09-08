import Image from "next/image";
import React from "react";
import GoogleCalendar from "../../../../../public/assets/images/google-calendar.svg";
import ExternalLink from "../../../../../public/assets/images/external-link.svg";
import styles from "../../../../styles/homepage.module.scss"

const index = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10">
      <Image src={GoogleCalendar.src} width={96} height={96} />
      <span className="text-[18px] md:text-[22px] lg:text-[24px] font-[500] text-[#161616] font-poppins text-center">
        You haven’t set up your Google Calendar
      </span>
      <div className="w-full md:w-[50%] lg:w-[40%]">
        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-3 px-1 !h-[56px] !text-[16px]`}
        >
          <Image src={ExternalLink.src} alt="Link" width={24} height={24} />
          Integrate Google Calendar
        </button>
      </div>
    </div>
  );
};

export default index;
