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
          <form className="space-y-10">
            <div className="relative">
              <select
                id="country"
                name="country"
                className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
              >
                <option value="" disabled selected></option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                <option value="uk">United Kingdom</option>
                {/* Add more countries as needed */}
              </select>
              <label
                htmlFor="country"
                className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
              >
                Country/Region
              </label>
              <Image
                src="assets/images/chevronRight.svg"
                width={10}
                height={10}
                className="absolute right-2 top-3 rotate-90"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                  placeholder=" " // Keeps the placeholder hidden but used to trigger the peer interactions
                />
                <label
                  htmlFor="firstName"
                  className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
                >
                  First Name (optional)
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                  placeholder=" "
                />
                <label
                  htmlFor="lastName"
                  className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <input
                type="text"
                id="unit"
                name="unit"
                className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                placeholder=" "
              />
              <label
                htmlFor="unit"
                className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
              >
                Apartment, Suite, etc. (optional)
              </label>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="relative">
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                  placeholder=" "
                />
                <label
                  htmlFor="city"
                  className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
                >
                  City
                </label>
              </div>

              <div className="relative">
                <select
                  id="province"
                  name="province"
                  className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                >
                  <option value="" disabled selected></option>
                  <option value="ontario">Ontario</option>
                  <option value="quebec">Quebec</option>
                  <option value="alberta">Alberta</option>
                  <option value="bc">British Columbia</option>
                </select>
                <label
                  htmlFor="province"
                  className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
                >
                  Province
                </label>
                <Image
                  src="assets/images/chevronRight.svg"
                  width={10}
                  height={10}
                  className="absolute right-2 top-3 rotate-90"
                />
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                  placeholder=" "
                />
                <label
                  htmlFor="postalCode"
                  className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
                >
                  Postal Code
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="text"
                id="address"
                name="address"
                className="peer h-8 w-full bg-transparent focus:outline-none focus:ring-0 transition-all appearance-none cursor-pointer border-b border-[#DEDEDE] font-[400] text-[14px] text-[#000000]"
                placeholder=" "
              />
              <label
                htmlFor="address"
                className="text-[14px] font-[400] absolute left-0 top-3 text-[#707070] transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-[#707070] peer-focus:top-[-1rem] peer-focus:text-[12px] peer-valid:top-[-1rem] peer-valid:text-[12px] peer-valid:text-[#000000]"
              >
                Address
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="w-full md:w-[40%]">
        <OrderSummary />
      </div>
    </div>
  );
};

export default index;
