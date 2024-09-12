import React from "react";
import PasswordImg from "../../../../../public/assets/images/password-img.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-full flex flex-col item-start justify-start gap-6">
      <Image src={PasswordImg.src} width={85} height={85} />
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <span className="font-poppins text-[24px] md:text[28px] lg:text-[32px] font-[700] text-[#202124] text-start">
          Secure Your Account, Set a New Password
        </span>
        <span className="font-poppins text-[16px] md:text[18px] lg:text-[20px] font-[400] text-[#202124] text-start">
          Set a new password for your account, after that it’s all set!
        </span>
      </div>
    </div>
  );
};

export default index;
