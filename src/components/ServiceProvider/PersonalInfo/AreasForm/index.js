"use client";
import { SelectField } from "@/components/shared";
import React, { useState } from "react";
import downArrow from "../../../../../public/assets/images/black-down-arrow.svg";
import Image from "next/image";

const index = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full flex flex-col item-start justify-start gap-4 p-[24px] border border-[#E7E7E7] rounded-[12px] bg-[#FFFAED]">
      <div className="w-full flex justify-between items-center md:hidden">
        <span className="text-[20] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
          Areas you able to serve
        </span>
        <Image
          src={downArrow.src}
          width={14}
          height={7}
          className={`cursor-pointer ${open ? "rotate-[-90deg]" : ""}`}
          onClick={() => setOpen(!open)}
          alt="Toggle Answer"
        />
      </div>
      <span className="hidden md:block text-[20px] md:text-[22px] lg:text-[24px] font-[600] text-[#202124] font-poppins">
        Areas you able to serve
      </span>
      <div className={`${open ? "block" : "hidden"} md:block`}>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <SelectField
            label={"Marriage & Family"}
            placeholder={"Match-Making"}
            options={[
              "Match-Making",
              "Marriage: Independent Level",
              "Divorce Counselling",
              "Family Mediation",
              "Family: Child Minding",
              "Nikah",
              "Parenting/Parent-Child Coaching",
              "Post Marriage Counselling",
            ]}
          />
          <SelectField
            label={"Birth & Death"}
            placeholder={"Aqiqah"}
            options={[
              "Aqiqah",
              "Birth: Circumcision",
              "Birth: Doula & Mother’s Help",
              "Funerals",
              "Gravestone Engraving",
              "Support: Grief Counselling",
              "Visiting the Sick",
              "Wills & Inheritence",
            ]}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <SelectField
            label={"Tech Services"}
            placeholder={"SEO"}
            options={["SEO", "Online Marketing", "Social Media Management"]}
          />
          <SelectField
            label={"Classes, Training & Services"}
            placeholder={"Arabic Language"}
            options={[
              "Al-Qur’an Studies - Memorization, Tajweed &  Others",
              "Arabic Language",
              "Business, Finance & Marketing",
              "Celebratory Services",
              "Coaching, Leadership & Mentoring",
              "Dietary, Fitness, Health & Nutrition",
              "Friday Khutba",
              "Islamic Art, Design & Architecture",
              "Islamic Studies & Halaqas",
              "Media Engagement & Public Speaking",
              "Mosque Consultancy",
              "Research & Translation",
              "Seerah & Storytelling",
              "Sustainable Living",
              "Videography & Photography",
            ]}
          />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4 mb-4">
          <SelectField
            label={"Counselling & Support"}
            placeholder={"Certified Counselling"}
            options={[
              "Advice on Shariah Matters",
              "Certified Counselling",
              "Counselling: General & Pastoral",
              "Dream Interpretation",
              "Interfaith Engagement",
              "New Muslims & Shahadah",
              "Support: Addiction & Mental Health",
              "Visiting Mosques",
              "Visiting Prisons",
            ]}
          />
          <SelectField
            label={"Islamic Financing"}
            placeholder={"Halal Investing"}
            options={["Halal Investing"]}
          />
        </div>
      </div>
    </div>
  );
};

export default index;
