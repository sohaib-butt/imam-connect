import React from "react";
import FAQItem from "../../shared/FAQItem";
import { faqs } from "@/utils/constants";
import Image from "next/image";
const index = () => {
  return (
    <div className="p-[24px] md:py-[40px] md:px-[40px] lg:px-[100px] flex flex-col gap-4 md:gap-16 w-full">
      <span className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] tracking-[2%] text-[#442D87] text-center">
        Frequently Asked Questions
      </span>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-4 md:gap-8">
        <div className="w-full md:w-[30%] lg:w-[30%] xl:w-[35%] flex flex-col gap-2 md:gap-4 justify-center md:justify-start items-center md:items-start">
          <span className="font-poppins font-[600] text-[24px] md:text-[28px] lg:text-[32px] text-[#442D87] text-center md:text-start leading-[36px] md:leading-[48px]">
            You got questions?
          </span>
          <span className="font-poppins font-[400] text-[14px] md:text-[14px] lg:text-[16px] text-[#2D2E2E] text-center md:text-start leading-[22px]">
            Look at these answers, it will help you much!
          </span>
          <Image
            src={"assets/images/faq-img.svg"}
            width={334}
            height={250}
            className="hidden md:block"
          />
        </div>
        <div className="w-full md:w-[70%] lg:w-[70%] xl:w-[65%] border border-[#E7E7E7] rounded-[16px]">
          {faqs?.map((f, index) => (
            <div className="w-full" key={index}>
              <FAQItem
                question={f?.question}
                answer={f?.answer}
                lastIndex={faqs?.length - 1 === index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;
