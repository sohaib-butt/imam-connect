import Image from "next/image";
import React from "react";
import styles from "../../../styles/homepage.module.scss";

const LatestTopics = () => {
  const latestTopics = [
    {
      title: "Family services",
      img: "assets/images/latest-img.svg",
      heading: "Marriage and Family Services",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      title: "Life services",
      img: "assets/images/latest-img1.svg",
      heading: "Birth & Death",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      title: "Development services",
      img: "assets/images/latest-img2.svg",
      heading: "Classes, Training & Services",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
    {
      title: "Support services",
      img: "assets/images/latest-img3.svg",
      heading: "Counselling & Support",
      content:
        "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
    },
  ];
  return (
    <div className="hidden w-full md:flex flex-col justify-start items-start gap-4 mt-10">
      <span className="font-poppins font-[700] text-[32px] text-[#202124] text-start">
        Latest topics
      </span>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {latestTopics?.map((l, index) => (
          <div
            key={index}
            className="flex flex-col justify-start items-start w-full gap-2"
          >
            <span className="font-poppins font-[400] text-[12px] text-[#999999] text-start tracking-[-0.5px]">
              {l?.title}
            </span>
            <div className="w-full h-[165px] relative">
              <Image
                src={l?.img}
                fill
                className="!object-cover border border-[#E7E9ED] rounded-[12px]"
              />
              <div className="absolute top-3 right-3 bg-[#442D87] px-2 h-[30px] rounded-[8px] flex justify-center items-center z-10">
                <span className="font-poppins font-[700] text-[12px] text-white">
                  Family
                </span>
              </div>
            </div>
            <span className="font-poppins font-[500] text-[20px] text-[#161C2D] text-start">
              {l?.heading}
            </span>
            <span className="font-poppins font-[400] text-[14px] text-[#161C2D] text-start">
              {l?.content}
            </span>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-10">
        <div className="w-[324px] text-center">
          <button
            type="button"
            className={`${styles.primary_button} !font-[700] flex justify-center items-center !h-[56px] !text-[16px]`}
          >
            Discover more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LatestTopics;
