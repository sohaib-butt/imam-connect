import React from "react";
import Header from "@/components/shared/Header/Header";
import Footer from "@/components/shared/Footer";
import RegisterNow from "@/components/shared/RegisterNow";
import VideoPlayer from "@/components/shared/VideoPlayer";
import { Span } from "next/dist/trace";
const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div className="w-full text-center p-[24px] md:py-[30px] md:px-[80px] lg:py-[40px] lg:px-[160px]">
        <span className="font-poppins text-[64px] font-[700] text-[#442D87] text-center tracking-[-0.94px]">Video & Galleries</span>
      </div>
      <div className="relative w-full h-[513px]">
        <VideoPlayer />
      </div>
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
