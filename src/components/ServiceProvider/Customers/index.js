import React from "react";
import ManagementTable from "./ManagementTable";
import styles from "../../../styles/homepage.module.scss";
import PlusIcon from "../../../../public/assets/images/plus-icon.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-0">
      <div className="w-full flex flex-col justify-start items-start gap-2 border-b-0 border border-[#E7E7E7] p-[16px]">
        <span className="text-[#101828] text-[18px] lg:text-[20px] font-[700] text-start">
          Customer Management
        </span>
        <span className="text-[#667085] text-[14px] font-[400] text-start">
          The following columns are supported. Some may be required, the rest
          are optional
        </span>
      </div>
      <ManagementTable />
    </div>
  );
};

export default index;
