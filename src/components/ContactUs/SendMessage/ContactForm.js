import React from "react";
import styles from "../../../styles/homepage.module.scss";

const ContactForm = () => {
  const inputFields = [
    { name: "First Name" },
    { name: "Last Name" },
    { name: "Contact Name" },
    { name: "Contact Phone" },
    { name: "Email" },
    { name: "Your Message" },
  ];
  return (
    <form className="w-full md:w-[70%] rounded-[16px] p-[24px] border border-[#D7D7D7]">
      <div className="w-full flex flex-col justify-center items-center gap-10">
        {inputFields?.map((i, index) => (
          <input
            key={index}
            placeholder={i?.name}
            className="w-full h-[38px] border-b-[1px] border-b-[#E7E7E7] font-poppins font-[400] text-[16px] text-[#8E8E8E] focus:outline-none"
          />
        ))}
      </div>
      <div className="w-full md:w-[40%] lg:w-[30%] text-center pt-[24px]">
        <button
          type="button"
          className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[56px] !text-[16px]`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
