import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <>
      <div className="w-full h-[599px] hidden md:block relative">
        <Image
          src="assets/images/blogs-intro.svg"
          fill
          className="object-cover"
        />
        <div className="w-full h-[306px] absolute bottom-0 bg-gradient-to-t from-[#000000] to-[#00000000] z-10 flex flex-col justify-start items-center gap-2">
          <span className="font-poppins font-[700] text-[42px] lg:text-[48px] tracking-[0.5px] text-center text-white mt-6">
            IN THE MEDIA AROUND THE WORLD
          </span>
          <span className="font-poppins font-[400] text-[24px] text-center text-white">
            We are seen in a lot of media
          </span>
        </div>
      </div>
      <div className="w-full h-[380px] block md:hidden relative">
        <Image
          src="assets/images/blogs-intro-mb.svg"
          fill
          className="object-cover"
        />
        <div className="w-full h-[290px] absolute bottom-0 bg-gradient-to-t from-[#000000] to-[#00000000] z-10 flex flex-col justify-center items-center gap-2">
          <span className="font-poppins font-[700] text-[32px] tracking-[0.5px] text-center text-white">
            IN THE MEDIA AROUND THE WORLD
          </span>
          <span className="font-poppins font-[400] text-[24px] text-center text-white">
            We are seen in a lot of media
          </span>
        </div>
      </div>
    </>
  );
};

export default index;
