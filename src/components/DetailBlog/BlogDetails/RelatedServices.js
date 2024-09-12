"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "../../../styles/homepage.module.scss";

const RelatedServices = () => {
  const [clickedIndex, setClickedIndex] = useState(0);
  const relatedServices = [
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
    {
      blogOwner: "ImamConnect Official",
      img: "assets/images/service-img.svg",
      title: "Classes, Training & Support from Imam Connect",
    },
  ];
  return (
    <div
      className="w-full overflow-x-auto md:w-[40%] md:h-full md:overflow-y-auto flex flex-none md:flex-col justify-start items-start md:items-end gap-4 mt-10 md:mt-0"
      style={{ scrollbarWidth: "none" }}
    >
      <div className="hidden md:w-[90%] lg:w-[80%] xl:w-[70%] h-[40px] md:flex justify-center items-center bg-[#442D87] rounded-[100px]">
        <span className="font-poppins font-[700] text-white text-[16px]">
          Related service for you
        </span>
      </div>
      {relatedServices?.map((s, index) => (
        <div
          key={index}
          className="md:w-[90%] lg:w-[80%] xl:w-[70%] flex flex-col justify-start items-start gap-2"
        >
          <div
            className="w-full flex flex-col justify-start items-start gap-2 cursor-pointer"
            onClick={() => setClickedIndex(index)}
          >
            <div className="w-full flex justify-start items-start gap-2">
              <Image
                src="assets/images/purple-circle.svg"
                width={28}
                height={28}
                alt="Purple Circle"
              />
              <span className="font-poppins font-[400] text-[#000000] text-[11.5px]">
                {s?.blogOwner}
              </span>
            </div>
            <div className="w-[260px] md:w-full h-[150px] relative">
              <Image
                src={s?.img}
                layout="fill"
                objectFit="cover"
                alt={`Image for content ${index + 1}`}
              />
            </div>
            <span className="font-poppins font-[500] text-[#000000] text-[11.5px]">
              {s?.title}
            </span>
          </div>
          {clickedIndex === index && (
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-3 px-1 !h-[40px] !text-[12px]`}
            >
              Book Service
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RelatedServices;
