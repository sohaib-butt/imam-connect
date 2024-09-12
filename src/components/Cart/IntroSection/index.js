import Image from "next/image";
import React from "react";

const index = () => {
  const breadCrumItems = ["Home", "Cart"];
  return (
    <div className="w-full bg-white flex flex-col item-center justify-center gap-4 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <div className="w-full flex justify-start items-center gap-2">
        <Image src="assets/images/shopping-cart.svg" width={64} height={64} />
        <span className="font-poppins font-[700] text-[24px] md:text-[32px] lg:text-[40px] tracking-[-0.94px] text-center text-[#442D87]">
          Cart
        </span>
      </div>
      <div className="w-full flex justify-start items-center gap-2">
        {breadCrumItems?.map((b, index) => (
          <div key={index} className="flex justify-start items-center gap-2">
            <span
              className={`font-poppins text-[12px] text-center ${
                index == breadCrumItems?.length - 1
                  ? "font-[700] text-[#442D87]"
                  : "font-[400] text-[#707070]"
              }`}
            >
              {b}
            </span>
            <Image
              src="assets/images/chevronRight.svg"
              width={10}
              height={10}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
