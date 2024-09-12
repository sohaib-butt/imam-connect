import React from "react";

const index = ({
  parentDivClass,
  secondDiv,
  heading,
  content,
  btnDiv,
  textDivClass,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row justify-between items-start w-full bg-[#442D87] rounded-[24px] ${parentDivClass}`}
    >
      <div
        className={`w-full flex flex-col justify-start items-start ${textDivClass}`}
      >
        <span className="font-poppins text-[32px] md:text-[48px] lg:text-[64px] font-[700] tracking-[-1.2px] text-start text-white leading-[48px] md:leading-[76px]">
          {heading}
        </span>
        <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] tracking-[-0.2px] text-start text-white opacity-60">
          {content}
        </span>
        {btnDiv ? btnDiv : null}
      </div>
      {secondDiv}
    </div>
  );
};

export default index;
