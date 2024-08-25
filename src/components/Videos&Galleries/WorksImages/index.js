import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-start items-start p-[24px] md:pt-[40px] md:pb-[40px] md:px-[90px] lg:pt-[40px] lg:pb-[80px] lg:px-[180px] bg-white">
      <div className="w-full md:w-[40%] flex flex-col justify-start items-end gap-4">
        <div className="w-full flex flex-col gap-2 justify-center items-center md:justify-start md:items-start">
          <span className="font-poppins text-[40px] md:text-[44px] lg:text-[50px] font-[700] text-[#442D87] text-center md:text-start tracking-[-0.94px]">
            Our beautiful works.
          </span>
          <span className="font-poppins text-[16px] font-[400] text-[#666666] text-center md:text-start">
            Let’s embody your beautiful ideas together, simplify the way you
            visualize your next big things.
          </span>
        </div>
        <Image
          src="assets/images/work_image1.svg"
          alt="work_image1"
          width={290}
          height={448}
          className="rounded-[8px] hidden md:block"
        />
      </div>
      <div className="w-full md:w-[60%] flex gap-4 justify-start items-start">
        <div className="w-[50%] flex flex-col justify-start items-start gap-4">
          <Image
            src="assets/images/work_image2.svg"
            alt="work_image1"
            width={290}
            height={448}
            className="rounded-[8px]"
          />
          <Image
            src="assets/images/work_image3.svg"
            alt="work_image1"
            width={290}
            height={224}
            className="rounded-[8px]"
          />
        </div>
        <div className="w-[50%] flex flex-col justify-start items-start gap-4">
          <Image
            src="assets/images/work_image4.svg"
            alt="work_image1"
            width={290}
            height={224}
            className="rounded-[8px]"
          />
          <Image
            src="assets/images/work_image5.svg"
            alt="work_image1"
            width={290}
            height={448}
            className="rounded-[8px]"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
