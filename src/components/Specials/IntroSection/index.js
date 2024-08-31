import { PurpleCard } from "@/components/shared";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="w-full bg-white flex item-center justify-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[100px] xl:px-[160px]">
      <PurpleCard
        secondDiv={
          <div className="w-full h-[237px] md:w-[40%] md:h-full relative">
            <Image
              src="assets/images/specials-img.svg"
              layout="fill"
              objectFit="cover"
              alt="Specials Image"
              className="rounded-bl-[24px] rounded-br-[24px] md:rounded-bl-[0px] md:rounded-tr-[24px] md:rounded-br-[24px]"
            />
          </div>
        }
        heading="Specials from ImamConnect."
        content="Be one of our service providers, and worth your value."
        textDivClass="md:w-[50%] gap-4 p-[24px] lg:py-[40px] lg:px-[40px]"
      />
    </section>
  );
};

export default index;
