import React from "react";
import { Header, Footer, RegisterNow, VideoPlayer } from "@/components/shared";
import { TextSection } from "@/components/TermsOfUse";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div className="w-full text-center p-[24px] md:py-[30px] md:px-[80px] lg:py-[40px] lg:px-[160px] flex flex-col justify-center items-center gap-5">
        <span className="font-poppins text-[32px] md:text[36px] lg:text-[40px] font-[700] text-[#442D87] text-center tracking-[-0.94px]">
          Information About ImamConnect
        </span>
        <span className="font-poppins text-[20px] md:text[22px] lg:text-[24px] font-[600] text-[#442D87] text-center tracking-[-0.94px]">
          TERMS OF USE
        </span>
      </div>
      <TextSection />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
