import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";
import closeIcon from "../../../../public/assets/images/x-close.svg";
import tickImg from "../../../../public/assets/images/tickMark-img.svg";
import { useRouter } from "next/navigation";

const index = ({ popupClassName, handleClose }) => {
  const router = useRouter();

  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] sm:w-[70%] md:w-[70%] lg:w-[50%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-3 ${popupClassName}`}
      >
        <div className="w-full flex flex-col justify-start items-start gap-2">
          <span className="text-[20px] md:text-[22px] lg:text-[24px] font-[600] font-poppins text-[#101828] text-start">
            Registration
          </span>
        </div>
        {handleClose && (
          <Image
            src={closeIcon.src}
            width={24}
            height={24}
            onClick={handleClose}
            className="absolute cursor-pointer top-5 right-4 z-10"
          />
        )}
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <Image src={tickImg.src} width={128} height={128} />
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <span className="text-[24px] md:text-[28px] lg:text-[32px] font-[700] font-poppins text-[#161616] text-center">
              Your account is under review
            </span>
            <span className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#161616] text-center">
              Don’t worry! We just want to verified your account. We will let
              you know shortly to your email.
            </span>
          </div>
          <div className="w-full flex justify-center items-center py-[16px]">
            <button
              type="button"
              className={`${styles.primary_button} !w-[30%] !font-[700] flex justify-center items-center !h-[48px] !text-[14px]`}
              onClick={() => router.push("/")}
            >
              Back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
