import React from "react";
import { Header, Footer, RegisterNow, VideoPlayer } from "@/components/shared";
import { WorksVideos, Galleries, WorksImages } from "@/components/Videos&Galleries";

const page = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div className="w-full text-center p-[24px] md:py-[30px] md:px-[80px] lg:py-[40px] lg:px-[160px]">
        <span className="font-poppins text-[48px] md:text[54px] lg:text-[64px] font-[700] text-[#442D87] text-center tracking-[-0.94px]">
          Video & Galleries
        </span>
      </div>
      <div className="relative w-full h-[513px]">
        <VideoPlayer
          videoUrl={
            "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
          playIcon={"assets/images/play_icon.svg"}
        />
      </div>
      <WorksVideos />
      <WorksImages />
      <Galleries />
      <RegisterNow />
      <Footer />
    </div>
  );
};

export default page;
