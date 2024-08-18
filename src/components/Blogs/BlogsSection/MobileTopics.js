import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const MobileTopics = () => {
  const allTopics = [
    {
      img: "assets/images/latest-img.svg",
      heading: "Marriage and Family Services",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      img: "assets/images/latest-img1.svg",
      heading: "Birth & Death",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      img: "assets/images/latest-img2.svg",
      heading: "Classes, Training & Services",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      img: "assets/images/latest-img3.svg",
      heading: "Counselling & Support",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      img: "assets/images/latest-img3.svg",
      heading: "Counselling & Support",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
  ];
  return (
    <div
      className="md:hidden flex justify-start items-start gap-2 overflow-x-scroll"
      style={{ scrollbarWidth: "none" }}
    >
      {allTopics?.map((l, index) => (
        <div
          key={index}
          className="flex-none w-[260px] flex flex-col justify-start items-start gap-2"
        >
          <Image
            src={l?.img}
            width={260}
            height={165}
            className=" border border-[#E7E9ED] rounded-[12px]"
          />
          <span className="font-poppins font-[500] text-[20px] text-[#161C2D] text-start tracking-[-0.38px]">
            {l?.heading}
          </span>
          <span className="font-poppins font-[400] text-[14px] text-[#161C2D] text-start tracking-[-0.2px]">
            {l?.content}
          </span>
        </div>
      ))}
    </div>
  );
};

export default MobileTopics;
