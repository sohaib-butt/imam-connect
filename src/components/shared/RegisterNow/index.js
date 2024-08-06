import React from "react";
import styles from "../../../styles/homepage.module.scss";

const index = () => {
  return (
    <section className="bg-[#442D87] flex flex-col justify-center items-center gap-4 p-[24px] md:py-[40px] md:px-[80px] lg:py-[80px] lg:px-[160px]">
      <span className="font-poppins font-[700] text-white text-[24px] md:text-[32px] lg:text-[40px] tracking-[-1.2px] text-center">
        Lifetime Muslim Service on One Platform
      </span>
      <span className="opacity-70 font-poppins font-[700] text-white text-[14px] md:text-[16px] lg:text-[20px] tracking-[-0.2px] text-center">
        Be one of our service providers, and worth your value.
      </span>
      <div className="text-center w-full md:w-[50%] lg:w-[30%]">
        <button className={styles.needs_primary_button}>Register Now</button>
      </div>
    </section>
  );
};

export default index;
