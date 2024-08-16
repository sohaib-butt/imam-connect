import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const SearchSection = () => {
  return (
    <div className="w-full bg-white p-[16px] flex flex-col justify-center items-center gap-2">
      <div className="w-full flex justify-start items-center gap-4 relative">
        <input
          className={`${styles.header_search_div} !border-[1px] !h-[56px] !text-[16px] placeholder:!text-[16px] !pl-8`}
          placeholder="Search"
        />
        <Image
          src="assets/images/searchIcon.svg"
          width={24}
          height={24}
          alt="search"
          className="absolute top-[15px] right-[8%] md:right-[30%] xl:right-[28%]"
        />
        <button
          className={` ${styles.primary_button} !text-[16px] !font-[700] !w-[30%] !h-[56px] text-center !hidden md:!block`}
        >
          Search
        </button>
      </div>
      <div className="w-full">
        <select className="w-full h-[48px] border border-[#E7E7E7] rounded-[8px] pr-[12px] pl-[16px] focus:outline-none">
          <option className="font-poppins font-[500] text-[16px] text-[#202124]">
            Popular
          </option>
        </select>
      </div>
    </div>
  );
};

export default SearchSection;
