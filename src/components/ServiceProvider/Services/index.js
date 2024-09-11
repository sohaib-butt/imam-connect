"use client"
import React, { useState } from "react";
import ServicesTable from "./ServicesTable";
import styles from "../../../styles/homepage.module.scss";
import PlusIcon from "../../../../public/assets/images/plus-icon.svg";
import Image from "next/image";
import AddServiceModal from "./AddServiceModal";

const index = () => {
  const [addModal, setAddModal] = useState(false);
  return (
    <>
      <div className="w-full flex flex-col justify-start items-start gap-0">
        <div className="w-full flex flex-col xl:flex-row justify-start lg:justify-start xl:justify-between items-start lg:items-start xl:items-center gap-4 border-b-0 border border-[#E7E7E7] p-[16px]">
          <div className="w-full md:w-[70%] flex flex-col justify-start items-start gap-2">
            <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
              Services listed
            </span>
            <span className="text-[#667085] text-[14px] font-[400] font-poppins text-start">
              The following columns are supported. Some may be required, the
              rest are optional
            </span>
          </div>
          <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[30%]">
            <button
              type="button"
              className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
              onClick={() => setAddModal(true)}
            >
              <Image src={PlusIcon.src} alt="Exit" width={20} height={20} />
              Add New Service
            </button>
          </div>
        </div>
        <ServicesTable />
        <div className="w-full mt-4 flex justify-end">
          <button
            type="button"
            className={`${styles.primary_button} !w-[50%] md:!w-[30%] !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[16px]`}
          >
            Update & Save
          </button>
        </div>
      </div>
      {addModal == true && (
        <AddServiceModal handleClose={() => setAddModal(false)} />
      )}
    </>
  );
};

export default index;
