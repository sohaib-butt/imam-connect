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
    <div className={styles.search_section}>
      <div className="flex justify-start items-center gap-4">
        <Image src="assets/images/magnify-icon.svg" width={48} height={48} />
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
          <div key={index} className="flex flex-col justify-start items-start gap-1">
            <span className="font-poppins font-[600] text-[14px] leading-[18px] tracking-[0.07px]">
              {s?.heading}
            </span>
            <select defaultValue={s?.option_txt}>
              <option>{s?.option_txt}</option>
            </select>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end">
        <button className={styles.search_submit}>Search</button>
      </div>
    </div>
  );
};

export default index;
