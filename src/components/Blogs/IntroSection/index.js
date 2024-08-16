import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = () => {
  return (
    <>
      <div className="w-full h-[599px] hidden md:block relative">
        <Image
          src="assets/images/blogs-intro.svg"
          fill
          className="object-cover"
        />
        <div className="w-full h-[306px] absolute bottom-0 bg-gradient-to-t from-[#000000] to-[#00000000] z-10 flex flex-col justify-center items-center gap-4">
          <span className="font-poppins font-[700] text-[36px] lg:text-[48px] tracking-[0.5px] text-center text-white">
            CONNECT WITH US, TO A BETTER LIFE.
          </span>
          <span className="font-poppins font-[400] text-[20px] lg:text-[24px] text-center text-white">
            Counselling, and talk with much easier.
          </span>
          <div className="w-[207px]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-3 px-1 !h-[56px]`}
            >
              Book Service Now
              <Image
                src="assets/images/arrow.svg"
                alt="Arrow"
                width={14}
                height={12}
                className="!font-[700]"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-[380px] block md:hidden relative">
        <Image
          src="assets/images/blogs-intro-mb.svg"
          fill
          className="object-cover"
        />
        <div className="w-full h-[290px] absolute bottom-0 bg-gradient-to-t from-[#000000] to-[#00000000] z-10 flex flex-col justify-center items-center gap-4">
          <span className="font-poppins font-[700] text-[24px] tracking-[0.5px] text-center text-white">
            CONNECT WITH US, TO A BETTER LIFE.
          </span>
          <span className="font-poppins font-[400] text-[14px] text-center text-white">
            Counselling, and talk with much easier.
          </span>
          <div className="w-[207px]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-3 px-1 !h-[56px]`}
            >
              Book Service Now
              <Image
                src="assets/images/arrow.svg"
                alt="Arrow"
                width={14}
                height={12}
                className="!font-[700]"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
