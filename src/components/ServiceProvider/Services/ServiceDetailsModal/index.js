import Image from "next/image";
import React from "react";
import styles from "../../../../styles/homepage.module.scss";
import closeIcon from "../../../../../public/assets/images/x-close.svg";
import trendingUp from "../../../../../public/assets/images/trending-up.svg";
import groupIcon from "../../../../../public/assets/images/group-icon.svg";
import starIcon from "../../../../../public/assets/images/star-icon.svg";
import boxIcon from "../../../../../public/assets/images/box-icon.svg";
import trendingDown from "../../../../../public/assets/images/trending-down.svg";
import Table from "./table";

const index = ({ popupClassName, handleClose, primaryBtnClick }) => {
  const performanceList = [
    {
      title: "Total Customer",
      number: "402",
      percentage: "8.5%",
      img: groupIcon,
      color: "#8280FF",
      trending: "up",
      trendingTxt: "Up from yesterday",
      opacity: 0.21,
    },
    {
      title: "Total Customer",
      number: "402",
      percentage: "8.5%",
      img: boxIcon,
      color: "#FEC53D",
      trending: "up",
      trendingTxt: "Up from past week",
      opacity: 0.21,
    },
    {
      title: "Total Customer",
      number: "402",
      percentage: "4.3%",
      img: starIcon,
      color: "#FDF7E6",
      trending: "down",
      trendingTxt: "Down from yesterday",
      opacity: 1,
    },
  ];
  return (
    <div className={styles.popup_container}>
      <div
        className={`${styles.popup} w-[90%] md:w-[70%] flex flex-col items-center bg-white rounded-[12px] relative p-[24px] gap-10 ${popupClassName}`}
      >
        <div className="w-full">
          <span className="text-[16px] md:text-[18px] lg:text-[20px] font-[600] font-poppins text-[#101828] text-start">
            Service Name - Details
          </span>
        </div>
        {handleClose && (
          <Image
            src={closeIcon}
            width={24}
            height={24}
            onClick={handleClose}
            className="absolute cursor-pointer top-5 right-4 z-10"
          />
        )}
        <div className="w-full flex flex-col justify-center items-center gap-4">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <span className="text-[14px] md:text-[16px] font-[600] font-poppins text-[#161616] text-start">
              Performance
            </span>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {performanceList?.map((p, index) => (
                <div
                  key={index}
                  className="p-4 shadow-[6px_6px_54px_0px_rgba(0,0,0,0.05)] bg-white rounded-[16px] flex justify-between items-start"
                >
                  <div className="flex flex-col justify-start items-start gap-5">
                    <span className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#202224] text-start">
                      {p.title}
                    </span>
                    <span className="text-[20px] md:text-[24px] lg:text-[28px] font-[700] font-poppins text-[#202224] text-start">
                      {p?.number}
                    </span>
                    <div className="flex justify-start items-start gap-2">
                      {p?.trending == "up" ? (
                        <Image src={trendingUp.src} width={30} height={24} />
                      ) : (
                        <Image src={trendingDown.src} width={30} height={24} />
                      )}
                      <span className="text-[14px] md:text-[16px] font-[400] font-poppins text-[#606060] text-start">
                        <span
                          className={`${
                            p?.trending == "up"
                              ? "text-[#00BAC2]"
                              : "text-[#F93C65]"
                          }`}
                        >
                          {p?.percentage}
                        </span>{" "}
                        {p?.trendingTxt}
                      </span>
                    </div>
                  </div>
                  <div className="relative w-[60px] h-[55px] rounded-[42%] flex justify-center items-center overflow-hidden">
                    <div
                      className="absolute inset-0 rounded-[42%]"
                      style={{ backgroundColor: p?.color, opacity: p?.opacity }}
                    />
                    <Image
                      src={p?.img}
                      width={30}
                      height={30}
                      className="relative z-10"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <span className="text-[14px] md:text-[16px] font-[600] font-poppins text-[#161616] text-start">
              Customer paid for this service
            </span>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
