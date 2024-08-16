import Image from "next/image";
import React from "react";

const TrendingTopic = () => {
  return (
    <div className="hidden w-full md:flex flex-col justify-start items-start gap-4 mt-10">
      <span className="font-poppins font-[700] text-[32px] text-[#202124] text-start">
        Trending topic
      </span>
      <div className="w-full flex justify-between items-center gap-10">
        <Image
          src="assets/images/trending-img.svg"
          alt="Trending"
          width={690}
          height={269}
          className="rounded-[22px]"
        />
        <div className="flex flex-col justify-start items-start gap-4">
          <span className="font-poppins font-[700] text-[24px] text-[#202124] text-start leading-[36px]">
            Is Counselling Important to Our life? Here’s reason why, we have to
            take it serious.
          </span>
          <span className="font-poppins font-[400] text-[16px] text-[#666666] text-start leading-[35px]">
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
            Sub-title Sub-title Sub-title Sub-title Sub-title Sub-title
            Sub-title Sub-title Sub-title Sub-title Sub-title
          </span>
        </div>
      </div>
    </div>
  );
};

export default TrendingTopic;
