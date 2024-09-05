import React from "react";
import styles from "../../styles/homepage.module.scss";
import Image from "next/image";
import { Cost, Tags } from ".";

const Card = () => {
  return (
    <div className="w-full border border-[#D7D7D7] rounded-[8px] p-[14px] flex flex-col items-center justify-center gap-2">
      <Image src="assets/images/avatar-cart.svg" width={90} height={90} />
      <div>
        <Cost price={"$10.00"} />
      </div>
      <div className={styles.location_div}>
        <img src="assets/images/location-icon.svg" />
        <span className={styles.location}>London, UK</span>
      </div>
      <div className="h-[1px] bg-[#E7E7E7] w-[80%] text-center"></div>
      <div className="w-full flex flex-col justify-start items-start gap-1">
        <span className="w-full text-[#2A282F] font-poppins font-[600] text-[16px] text-start leading-[24px]">
          Putri Azzahra
        </span>
        <span class="text-[14px] font-[700] font-poppins text-[#625F68] text-start leading-[18px]">
          “Help others for those who need”
        </span>
      </div>
      <Tags />
    </div>
  );
};
const CheckoutServiceCard = () => {
  return (
    <div className="w-full border border-[#D7D7D7] rounded-[8px] p-[24px] flex flex-col items-start justify-start gap-3">
      <div className="w-full flex flex-col justify-start items-start gap-2 border-b-[1px] border-b-[#D7D7D7] pb-2">
        <span className="text-[#442D87] font-poppins font-[700] text-[16px] md:text-[18px] lg:text-[20px]">
          Might be you want to see another services
        </span>
        <span class="block text-[14px] font-[500] font-poppins text-[#442D87] text-start">
          `{`Description to engage`}`
        </span>
      </div>
      <div className="w-full flex flex-col 2xl:flex-row justify-center items-center gap-3">
        {[1, 2].map((i, index) => <Card/>)}
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default CheckoutServiceCard;
