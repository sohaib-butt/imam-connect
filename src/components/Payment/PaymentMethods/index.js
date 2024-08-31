import { PurpleCard } from "@/components/shared";
import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = () => {
  return (
    <section className="w-full bg-white flex flex-col item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <PurpleCard
        parentDivClass="p-[24px] lg:p-[30px] gap-5 md:gap-2 mb-8"
        secondDiv={
          <div className="w-full md:w-[35%] xl:w-[30%] h-[150px] md:h-[200px] bg-white rounded-[16px] flex justify-center items-center relative">
            <Image
              src="assets/images/stripe-logo.svg"
              width={260}
              height={124}
              alt="Stripe Image"
            />
          </div>
        }
        heading="Stripe"
        content="We are ready for you 24/7. Please feel free to reach us!"
        textDivClass="md:w-[50%] gap-3"
        btnDiv={
          <div className="w-full md:w-[40%] text-center md:text-start">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[56px] !text-[16px] gap-4`}
            >
              Go to Stripe
              <Image
                src="assets/images/arrow.svg"
                alt="Arrow"
                width={14}
                height={12}
                className="!font-[700]"
              />
            </button>
          </div>
        }
      />
      <PurpleCard
        parentDivClass="p-[24px] lg:p-[30px] gap-5 md:gap-2 md:!flex-row-reverse"
        secondDiv={
          <div className="w-full md:w-[35%] xl:w-[30%] h-[150px] md:h-[200px] bg-white rounded-[16px] flex justify-center items-center relative">
            <Image
              src="assets/images/paypal-logo.svg"
              width={123}
              height={121}
              alt="Stripe Image"
            />
          </div>
        }
        heading="Paypal"
        content="We are ready for you 24/7. Please feel free to reach us!"
        textDivClass="md:w-[50%] gap-3"
        btnDiv={
          <div className="w-full md:w-[40%] text-center md:text-start">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[56px] !text-[16px] gap-4`}
            >
              Go to Paypal
              <Image
                src="assets/images/arrow.svg"
                alt="Arrow"
                width={14}
                height={12}
                className="!font-[700]"
              />
            </button>
          </div>
        }
      />
    </section>
  );
};

export default index;
