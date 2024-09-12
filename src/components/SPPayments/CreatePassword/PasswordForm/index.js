"use client";
import { InputField } from "@/components/shared";
import React from "react";
import { useRouter } from "next/navigation";

const index = () => {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px]">
      <InputField
        label={"Password"}
        placeholder={"*****************"}
        type={"password"}
      />
      <InputField
        label={"Confirm Password"}
        placeholder={"*****************"}
        type={"password"}
      />
      <div className="w-full">
        <button
          className="bg-[#00BAC2] w-full h-[46px] text-white font-[700] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px]"
          onClick={() => router.push("/sp-payment/addpayment")}
        >
          Set Up New Password
        </button>
      </div>
    </div>
  );
};

export default index;
