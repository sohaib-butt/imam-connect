import { InputField, SelectField, TextAreaField } from "@/components/shared";
import React from "react";

const index = () => {
  return (
    <div className="border border-[#E7E7E7] p-[16px] flex flex-col justify-start items-start w-full gap-4">
      <span className="text-[#202124] text-[18px] lg:text-[20px] font-[700] text-start">
        Areas you able to serve
      </span>
      <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
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
      <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
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
      <div className="w-full flex flex-col lg:flex-row justify-center md:justify-between items-center gap-4">
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
  );
};

export default index;
