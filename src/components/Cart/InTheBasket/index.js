import React from "react";
import ServiceCard from "./ServiceCard";
import OrderSummary from "../../shared/OrderSummary.js";

const index = () => {
  const breadCrumItems = ["Home", "Cart"];
  return (
    <div className="w-full bg-white flex flex-col item-center justify-center gap-4 p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <span className="font-poppins font-[700] text-[16px] md:text-[20px] lg:text-[24px] tracking-[-0.94px] text-start text-[#442D87]">
        In the basket
      </span>
      <div className="w-full flex flex-col md:flex-row justify-start items-start gap-4">
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
          {[1, 2, 3, 4].map((i, index) => (
            <ServiceCard />
          ))}
        </div>
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default index;
