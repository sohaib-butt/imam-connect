import React from "react";
import SearchSection from "./SearchSection";
import Tags from "./Tags";

const index = () => {
  return (
    <div className="w-full text-center p-[24px] md:py-[40px] md:px-[80px] lg:px-[160px]">
      <span className="font-poppins font-[700] text-[#442D87] text-[32px] md:text-[36px] lg:text-[40px]">
        Blogs
      </span>
      <SearchSection />
      <Tags />
    </div>
  );
};

export default index;
