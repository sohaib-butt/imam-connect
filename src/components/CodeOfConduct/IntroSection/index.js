import { PurpleCard } from "@/components/shared";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="w-full bg-white flex flex-col item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <PurpleCard
        parentDivClass="p-[24px] lg:p-[30px] gap-5 md:gap-2"
        secondDiv={
          <div className="w-[50%] md:w-[30%] relative">
            <Image
              src="assets/images/imamLogo.svg"
              width={250}
              height={50}
              alt="Logo Image"
            />
          </div>
        }
        heading="Code of Conduct"
        content="www.imamconnect.com"
        textDivClass="md:w-[70%] gap-0"
      />
    </section>
  );
};

export default index;
