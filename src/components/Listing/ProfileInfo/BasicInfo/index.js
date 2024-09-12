import React from "react";

const index = () => {
  const infos = [
    {
      heading: "Key Areas",
      content: "Personal growth, Child rearing, Tarbiyat,...",
    },
    {
      heading: "Qualification & Certificate",
      content: "M.Phil Counseling Pscycholog and M.A Islamic studies",
    },
    { heading: "Vetting level", content: "Basic" },
    { heading: "Method", content: "Online" },
  ];

  const counselCards = [
    {
      heading: "Counselling and Support",
      content:
        "Counselling General & Pastoral, Support Addiction &  Mental Health",
    },
    {
      heading: "Classes, Training & Services",
      content: "Coaching, Leadership & Mentoring, Islamic Studies &  Halaqas",
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      <span className="font-poppins font-[700] text-[20px] text-[#202124] tracking-[2%] mb-2">
        Basic Info
      </span>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {infos?.map((i, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center p-[19px] border-[0.77px] border-[#DCDCDC] bg-white rounded-[8px]"
          >
            <span className="font-poppins font-[400] text-[16px] text-[#999999]">
              {i?.heading}
            </span>
            <span className="font-poppins font-[600] text-[12px] text-[#000000]">
              {i?.content}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3">
        {counselCards?.map((c, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start p-[19px] bg-[#F8F8F8] rounded-[8px]"
          >
            <span className="font-poppins font-[600] text-[16px] text-[#000000] tracking-[2%]">
              {c?.heading}
            </span>
            <span className="font-poppins font-[400] text-[12px] text-[#1F1F1F] tracking-[-2%]">
              {c?.content}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
