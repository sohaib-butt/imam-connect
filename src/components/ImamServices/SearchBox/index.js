import React from "react";
import styles from "./searchbox.module.scss";
import Image from "next/image";

const index = () => {
  const selectors = [
    { heading: "Location", option_txt: "Choose Location" },
    { heading: "Category", option_txt: "Choose" },
    { heading: "Filter by price", option_txt: "$50- $150" },
    { heading: "Speciality", option_txt: "Counsellors" },
    { heading: "Language", option_txt: "Counsellors" },
  ];

  return (
    <>
      <div className="relative w-full bg-white h-[150px] hidden md:flex justify-center">
        <div className={styles.search_section}>
          <div className="flex justify-start items-center gap-4">
            <Image
              src="assets/images/magnify-icon.svg"
              width={48}
              height={48}
            />
            <span className="font-poppins font-[700] text-[24px] leading-[36px] text-black">
              Find your needs
            </span>
          </div>
          <div style={{ width: "100%", position: "relative" }}>
            <input
              name="name"
              id="name"
              type="text"
              className={styles.intro_search_div}
              placeholder="Try Search: Nikah"
            />
            <div className={styles.intro_search_icon}>
              <Image src="assets/images/searchIcon.svg" fill />
            </div>
          </div>
          <div className={styles.filters}>
            {selectors?.map((s, index) => (
              <div
                key={index}
                className="flex flex-col justify-start items-start gap-1"
              >
                <span className="font-poppins font-[600] text-[14px] leading-[18px] tracking-[0.07px]">
                  {s?.heading}
                </span>
                <select defaultValue={s?.option_txt} className="focus:outline-none">
                  <option>{s?.option_txt}</option>
                </select>
              </div>
            ))}
          </div>
          <div className="w-full flex justify-end">
            <button className={styles.search_submit}>Search</button>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-[16px] flex flex-col justify-center items-center gap-2 md:hidden">
        <div className="w-full flex justify-start items-center gap-4 relative">
          <input
            className="w-[70%] pl-[30px] h-[44px] p-[8px] bg-[#F8F8F8] border-[0.5px] border-[#DCDCDC] rounded-[5px] focus:outline-none"
            placeholder="Search"
          />
          <Image
            src="assets/images/primary_search.svg"
            width={14}
            height={14}
            className="absolute top-[15px] left-[10px]"
          />
          <button className="w-[30%] h-[44px] pt-[7.9px] pr-[11.85px] pb-[7.9px] pl-[11.85px] border-[0.5px] border-[#DCDCDC] rounded-[5px] font-poppins text-[#00BAC2] font-[700] tracking-[2%] text-center cursor-pointer">
            Filter
          </button>
        </div>
        <div className="w-full">
          <select className="w-full h-[48px] border border-[#E7E7E7] rounded-[8px] pr-[12px] pl-[16px] focus:outline-none">
            <option className="font-poppins font-[500] text-[14px] text-[#202124]">Popular</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default index;
