"use client";
import React, { useState } from "react";
import RegisterationInfo from "./RegisterationInfo";
import UnderReviewPopup from "../UnderReviewPopup";

const index = () => {
  const [agree, setAgree] = useState(false);
  const [openReviewPopup, setOpenReviewPopup] = useState(false);

  const handleCloseReview = () => {
    setOpenReviewPopup(false);
  };
  return (
    <>
      <div className="w-full flex flex-col gap-4 justify-start items-start">
        <RegisterationInfo />
        <div className="w-full">
          <label key={"agree"} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={"agree"}
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="form-checkbox h-4 w-4 text-green-500"
            />
            <span className="text-[14px] lg:text-[16px] font-[400] text-[#161616] leading-[20px]">
              By clicking this, you are agreed with our terms and conditions.
              <span className="text-[#00BAC2]">Learn more</span>
            </span>
          </label>
        </div>
        <div className="w-full">
          <button
            className="bg-[#00BAC2] w-full h-[56px] text-white font-[700] rounded-[8px] flex justify-center items-center text-[14px] md:text-[16px]"
            onClick={() => setOpenReviewPopup(true)}
          >
            Register
          </button>
        </div>
      </div>
      {openReviewPopup == true && (
        <UnderReviewPopup handleClose={handleCloseReview} />
      )}
    </>
  );
};

export default index;
