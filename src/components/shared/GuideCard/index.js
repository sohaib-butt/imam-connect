import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = ({ isBtn }) => {
  return (
    <div className="flex-none w-[312px] md:w-[358px] rounded-[18px] border border-[#D7D7D7]">
      <div className="w-full h-[173px] relative">
        <Image
          src="assets/images/guide-img.svg"
          layout="fill"
          objectFit="cover"
          alt="Guide Image"
          className="rounded-tl-[18px] rounded-tr-[18px]"
        />
        {isBtn === true && (
          <div className="absolute z-10 top-3 right-4 h-[40px] py-0 px-[24px] flex justify-center items-center rounded-[100px] bg-[#442D87]">
            <span className="font-poppins text-[16px] text-white font-[700]">
              News
            </span>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col justify-start items-start p-[24px] gap-4">
        <div className="w-[148px] h-[40px] flex justify-start items-center rounded-[8px] p-[11px] bg-[#F8F8F8]">
          <Image src="assets/images/calendar.svg" width={16} height={16} />
          <span className="font-poppins font-[400] text-[12px] text-[#6D8493]">
            12 Oct, 2024
          </span>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="font-poppins font-[600] text-[16px] text-[#2A282F] tracking-[-4%] text-start">
            How Do Service Providers Obtain DBS and/or Criminal Background
            Checks?
          </span>
          <span className="font-poppins font-[400] text-[14px] text-[#625F68] tracking-[-4%] text-start">
            “Help others for those who need”
          </span>
        </div>
      </div>
      {isBtn === true && (
        <div className="w-full text-center py-[16px] px-[24px] border-t-[0.75px] border-[#E2DEE9]">
          <button
            type="button"
            className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[56px] !text-[16px]`}
          >
            Read
          </button>
        </div>
      )}
    </div>
  );
};

export default index;
