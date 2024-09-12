import React from "react";
import FAQItem from "../../shared/FAQItem";
import { faqs } from "@/utils/constants";
const index = () => {
  return (
    <div className="p-[24px] md:py-[40px] md:px-[40px] lg:px-[100px] flex flex-col gap-4 w-full">
      <span className="font-poppins font-[700] text-[28px] md:text-[32px] lg:text-[40px] tracking-[2%] text-[#442D87]">
        Frequently Asked Questions
      </span>
      <div className="w-full border border-[#E7E7E7] rounded-[16px]">
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
  );
};

export default index;
