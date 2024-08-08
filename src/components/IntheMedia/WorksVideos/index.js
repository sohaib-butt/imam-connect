import VideoPlayer from "@/components/shared/VideoPlayer";
import React from "react";

const index = () => {
  const videoCards = [1, 2, 3, 4, 5, 6];
  return (
    <div className="w-full flex flex-col gap-4 justify-start items-start p-[24px] md:pt-[40px] md:pb-[40px] md:px-[80px] lg:pt-[40px] lg:pb-[80px] lg:px-[160px] bg-white">
      <div className="w-full flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
        <span className="font-poppins text-[40px] md:text-[44px] lg:text-[50px] font-[700] text-[#442D87] text-center tracking-[-0.94px]">
          Our beautiful works.
        </span>
        <span className="font-poppins text-[16px] font-[400] text-[#666666] text-center">
          Let’s embody your beautiful ideas together, simplify the way you
          visualize your next big things.
        </span>
      </div>
      <div className="flex flex-wrap justify-start items-center gap-3">
        {videoCards?.map((v, index) => (
          <div
            key={index}
            className="rounded-[11px] md:rounded-[12px] w-[312px] md:w-[360px] h-[277px] md:h-[320px] relative"
          >
            <VideoPlayer
              videoUrl={
                "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              }
              playIcon={"assets/images/play_icon.svg"}
            />
            <div className="absolute p-[14px] md:p-[16px] bottom-0 w-full rounded-bl-[11px] rounded-br-[11px] md:rounded-bl-[12px] md:rounded-br-[12px] bg-[#2A282F] opacity-80 flex flex-col justify-start items-start">
              <span className="font-poppins text-[13px] md:text-[14px] font-[600] text-white opacity-50 tracking-[-4%]">
                Abdurrahman S.
              </span>
              <span className="font-poppins text-[16px] font-[600] text-white">
                How to teach the epicness
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
