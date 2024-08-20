import React from "react";
import { Header, Footer, RegisterNow, VideoPlayer } from "@/components/shared";
import { Qualities, Team } from "@/components/AboutUs";
import { TextSection } from "@/components/PrivacyPolicy";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div className="w-full text-center p-[24px] md:py-[30px] md:px-[80px] lg:py-[40px] lg:px-[160px]">
        <span className="font-poppins text-[32px] md:text[36px] lg:text-[40px] font-[700] text-[#442D87] text-center tracking-[-0.94px]">
          Privacy Policy
        </span>
      </div>
      <TextSection />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
