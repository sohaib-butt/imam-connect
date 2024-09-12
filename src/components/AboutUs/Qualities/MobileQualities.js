"use client";
import React, { useState } from "react";
import QualityItem from "./QualityItem";

const MobileQualities = ({ qualities }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <div className="w-full p-[24px] bg-white flex flex-col justify-center items-center gap-8 relative md:hidden">
      <QualityItem
        img={qualities[0]?.img}
        heading={qualities[0]?.heading}
        content={qualities[0]?.content}
        imgFirst={qualities[0]?.imgFirst}
      />
      {readMore ? (
        <>
          <QualityItem
            img={qualities[1]?.img}
            heading={qualities[1]?.heading}
            content={qualities[1]?.content}
            imgFirst={qualities[1]?.imgFirst}
          />
          <QualityItem
            img={qualities[2]?.img}
            heading={qualities[2]?.heading}
            content={qualities[2]?.content}
            imgFirst={qualities[2]?.imgFirst}
          />
          <button
            className="w-full border-[2px] border-[#00BAC2] rounded-[8px] font-poppins font-[700] text-[#00BAC2] text-[16px] text-center h-[56px] bg-transparent"
            onClick={() => setReadMore(false)}
          >
            Show Less
          </button>
        </>
      ) : (
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF00] z-50 h-[264px] flex justify-center items-end">
          <button
            className="w-[90%] border-[2px] border-[#00BAC2] rounded-[8px] font-poppins font-[700] text-[#00BAC2] text-[16px] text-center h-[56px] bg-transparent"
            onClick={() => setReadMore(true)}
          >
            Read more
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileQualities;
