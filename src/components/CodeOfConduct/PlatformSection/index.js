import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full bg-white flex flex-col item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px] gap-10">
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5">
        <span className="font-poppins text-[24px] md:text-[28px] lg:text-[32px] font-[600] text-start text-[#442D87]">
          At ImamConnect, it is our privilege to offer a robust and convenient
          platform that meets the needs of a global Muslim Community by
          connecting qualified Muslim Service Providerrs to Users who require
          them.
        </span>

        <Image
          src="/assets/images/platform-img.svg"
          alt="Platform"
          width={400}
          height={250}
        />
        {/* <span className="font-poppins text-[16px] md:text-[18px] lg:text-[20px] font-[400] tracking-[-0.2px] text-start text-white opacity-60 leading-[29px]">
          www.imamconnect.com
        </span> */}
      </div>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-5">
        <span className="font-poppins text-[14px] md:text-[16px] font-[400] text-start text-[#2D2E2E]">
          As Users and Services Providers join the ImamConnect community, both
          are expected to uphold a code of professional conduct and are bound to
          adhere to a specific set of moral and ethical principles as detailed
          below.
        </span>
        <span className="font-poppins text-[14px] md:text-[16px] font-[400] tracking-[-0.2px] text-start text-[#2D2E2E]">
          Members who transgrees these principles or are found to act in bad
          faith are immediately removed and barred from the ImamConnect
          platform, and relevant authorities notified, if necessary.
        </span>
      </div>
    </div>
  );
};

export default index;
