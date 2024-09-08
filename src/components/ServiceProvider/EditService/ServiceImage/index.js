import DropZone from "@/components/shared/Dropzone";
import React from "react";

const index = () => {
  return (
    <div className="border border-[#E7E7E7] p-[16px] flex flex-col justify-start items-start w-full gap-4">
      <span className="text-[#202124] text-[18px] lg:text-[20px] font-[700] text-start">
        Service Image
      </span>
      <div className="w-full">
        <DropZone
          label={""}
        />
      </div>
    </div>
  );
};

export default index;
