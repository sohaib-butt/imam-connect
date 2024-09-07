import { OrderSummary } from "@/components/shared";
import Image from "next/image";
import React from "react";

const index = () => {
  const paymentImages = [
    "assets/images/Visa.svg",
    "assets/images/Mastercard.svg",
    "assets/images/Stripe.svg",
    "assets/images/PayPal.svg",
    "assets/images/GooglePay.svg",
    "assets/images/ApplePay.svg",
    "assets/images/Klarna.svg",
  ];
  return (
    <div className="w-full bg-white flex flex-col md:flex-row items-center justify-center gap-4 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <div className="w-full md:w-[60%] flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-3">
          <span className="font-poppins font-[700] text-[16px] md:text-[20px] lg:text-[24px] tracking-[-0.94px] text-center text-[#161616]">
            Payment Method
          </span>
          <div className="w-full flex justify-start items-center gap-4">
            {paymentImages?.map((i, index) => (
              <div key={index}>
                <Image src={i} width={60} height={41} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-10">
          <span className="font-poppins font-[700] text-[16px] md:text-[20px] lg:text-[24px] tracking-[-0.94px] text-center text-[#161616]">
            Fill information
          </span>
          <form className="space-y-5">
            <div className="relative flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
              <label
                htmlFor="country"
                className="font-[400] transition-all text-[#707070] text-[12px]"
              >
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000] cursor-pointer"
              >
                <option value="" disabled selected></option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="uk">United Kingdom</option>
              </select>
              <Image
                src="assets/images/chevronRight.svg"
                width={10}
                height={10}
                className="absolute right-2 top-5 rotate-90"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
                <label
                  htmlFor="firstName"
                  className="font-[400] transition-all text-[#707070] text-[12px]"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                  placeholder="First Name"
                />
              </div>

              <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
                <label
                  htmlFor="lastName"
                  className="font-[400] transition-all text-[#707070] text-[12px]"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
              <label
                htmlFor="email"
                className="font-[400] transition-all text-[#707070] text-[12px]"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                placeholder="Email"
              />
            </div>

            <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
              <label
                htmlFor="unit"
                className="font-[400] transition-all text-[#707070] text-[12px]"
              >
                Apartment, Suite, etc. (optional)
              </label>
              <input
                type="text"
                id="unit"
                name="unit"
                className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                placeholder="Apartment, Suite, etc. (optional)"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
                <label
                  htmlFor="city"
                  className="font-[400] transition-all text-[#707070] text-[12px]"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                  placeholder="City"
                />
              </div>

              <div className="relative flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
                <label
                  htmlFor="province"
                  className="font-[400] transition-all text-[#707070] text-[12px]"
                >
                  Province
                </label>
                <select
                  id="province"
                  name="province"
                  className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000] cursor-pointer"
                >
                  <option value="" disabled selected></option>
                  <option value="ontario">Ontario</option>
                  <option value="quebec">Quebec</option>
                  <option value="alberta">Alberta</option>
                  <option value="bc">British Columbia</option>
                </select>
                <Image
                  src="assets/images/chevronRight.svg"
                  width={10}
                  height={10}
                  className="absolute right-2 top-5 rotate-90"
                />
              </div>

              <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
                <label
                  htmlFor="postalCode"
                  className="font-[400] transition-all text-[#707070] text-[12px]"
                >
                  Postal Code
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                  placeholder="Postal Code"
                />
              </div>
            </div>

            <div className="flex flex-col justify-start items-start border border-[#DEDEDE] h-[52px] p-2 rounded-[8px]">
              <label
                htmlFor="address"
                className="font-[400] transition-all text-[#707070] text-[12px]"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                className="w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none font-[400] text-[14px] text-[#000000]"
                placeholder="Address"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <OrderSummary success={true} user={"user"}/>
      </div>
    </div>
  );
};

export default index;
