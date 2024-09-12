import Image from "next/image";
import React from "react";
import styles from "../../../../styles/homepage.module.scss";
import { InputField, TextAreaField } from "@/components/shared";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import chatIcon from "../../../../../public/assets/images/chat-icon.svg";
import completedBadge from "../../../../../public/assets/images/completed-badge.svg";

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Customer details
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
          <InputField
            label={"Customer name"}
            placeholder={"Abdurrahman S"}
            inputClass={"!bg-[#F8F8F8]"}
          />
          <TextAreaField
            label={"Address"}
            placeholder={"123 Main St, Anytown, USA"}
            areaClass={"!bg-[#F8F8F8] !h-[141px]"}
          />
          <TextAreaField
            label={"Feedback and Reviews"}
            placeholder={
              "“I think it’s nice to have a feature such as reply feature in the listing section, or we can chat with the service providers. It would be nice!Also great service!"
            }
            areaClass={"!h-[112px]"}
          />
          <div className="w-full flex flex-col gap-[8px]">
            <span className="text-[14px] lg:text-[16px] font-[400] text-[#666666] leading-[20px]">
              Service Booking History
            </span>
            <div className="p-[16px] border border-[#E7E7E7] text-[14px] lg:text-[16px] placeholder:text-[14px] placeholder:lg:text-[16px] rounded-[12px] placeholder-[#999999] focus:outline-none resize-none bg-[#F8F8F8] flex justify-between items-start">
              <div className="w-full flex flex-col justify-start items-start gap-1">
                <span className="text-[14px] md:text-[16px] font-[700] font-poppins text-[#101828] text-start">
                  Counselling Physical Support, Meditation
                </span>
                <span className="text-[14px] font-[400] font-poppins text-[#666666] text-start">
                  $10.00/h
                </span>
              </div>
              <Image src={completedBadge.src} width={96} height={22} />
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <span className="text-[14px] md:text-[16px] font-[600] font-poppins text-[#161616] text-start">
              Additional Notes
            </span>
            <TextAreaField
              label={"Notes"}
              placeholder={"Customer is very interested in stress management."}
              areaClass={"!h-[165px]"}
            />
          </div>
        </div>
        <div className="w-full flex flex-col justify-center md:flex-row md:justify-end items-center gap-4">
          <button
            type="button"
            className={`w-full md:!w-[40%] lg:!w-[35%] rounded-[8px] !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[16px] !bg-white !border-[1px] !border-[#00BAC2] !text-[#00BAC2]`}
          >
            <Image src={chatIcon.src} alt="Chat" width={20} height={20} />
            Go to Inbox
          </button>
          <button
            type="button"
            className={`${styles.primary_button} md:!w-[40%] lg:!w-[35%] !font-[700] flex justify-center items-center !h-[48px] !text-[14px] !px-[10px]`}
            onClick={primaryBtnClick}
          >
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
