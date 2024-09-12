import React from "react";

const index = () => {
  return (
    <div className="w-full bg-white flex flex-col item-center justify-center pt-[24px] px-[24px] md:pt-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px] gap-5">
      <span className="font-poppins font-[700] text-[24px] md:text-[32px] lg:text-[40px] tracking-[0.94px] text-[#442D87] text-center">
        Payment
      </span>
      <span className="font-poppins font-[400] text-[14px] md:text-[18px] lg:text-[24px] text-[#442D87] tracking-[0.94px] text-center">
        You can use one of these payment gateaways foor ImamConnect.
      </span>
    </div>
  );
};

export default index;
