"use client";
import { useState } from "react";
import CalendarDesign from "../../shared/CalendarDesign";
import ScheduleModal from "./ScheduleModal";
import styles from "../../../styles/homepage.module.scss";
import Image from "next/image";
import PlusIcon from "../../../../public/assets/images/plus-icon.svg";

const index = () => {
  const [scheduleModal, setScheduleModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-10">
        <div className="w-full flex flex-col xl:flex-row justify-start lg:justify-start xl:justify-between items-start lg:items-start xl:items-center gap-4">
          <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-2">
            <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
              Calendar
            </span>
            <span className="text-[#667085] text-[14px] font-[400] font-poppins text-start">
              You can set the schedule with your service providers
            </span>
          </div>
          <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[30%]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
              onClick={() => setScheduleModal(true)}
            >
              <Image src={PlusIcon.src} alt="Exit" width={20} height={20} />
              Add Schedule
            </button>
          </div>
        </div>
        <CalendarDesign />
      </div>
      {scheduleModal && (
        <ScheduleModal handleClose={() => setScheduleModal(false)} />
      )}
    </>
  );
};

export default index;
