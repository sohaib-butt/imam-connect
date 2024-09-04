"use client";
import { AccCreatedPopup, CreateAccPopup, Recommended } from "@/components/shared";
import Image from "next/image";
import React, { useState } from "react";

const index = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openFormPopup, setOpenFormPopup] = useState(false);
  const [openSuccessPopup, setOpenSuccessPopup] = useState(false);
  const languages = ["English", "Urdu", "Pushto"];
  const serviceProvide = [
    "Islamic Pshycotheraphy",
    "Hypnotheraphy",
    "Cognitive behavior theraphy",
    "Meditation theraphy",
  ];

  const handleClose = () => {
    setOpenPopup(false);
  };

  const handleOpenForm = () => {
    setOpenPopup(false);
    setOpenFormPopup(true);
  };

  const handleCloseForm = () => {
    setOpenFormPopup(false);
  };

  const handleOpenSuccess = () => {
    setOpenFormPopup(false);
    setOpenSuccessPopup(true);
  };

  const handleCloseSuccess = () => {
    setOpenSuccessPopup(false);
  };

  return (
    <>
      <div className="relative py-[32px] px-[16px] border border-[#DCDCDC] rounded-[18px] md:rounded-[20px] w-full flex flex-col justify-start items-start gap-4">
        <Image
          src="assets/images/heart.svg"
          width={27}
          height={24}
          alt="Heart"
          className="cursor-pointer absolute top-2 right-2"
        />
        <Recommended />
        <span className="font-poppins font-[700] text-[33px] md:text-[36px] tracking-[2%] text-[#25335C]">
          Hajira Karamat{" "}
        </span>
        <div className="flex justify-start items-center gap-2">
          <span className="font-poppins font-[600] text-[16px] tracking-[2%] text-[#442D87]">
            In service from 2018
          </span>
          <span className="h-[26px] py-[4px] px-[16px] rounded-[13px] font-poppins font-[700] text-[12px] bg-[#E0D6FF] text-[#442D87] whitespace-nowrap">
            Level 1
          </span>
        </div>
        <span className="font-poppins font-[400] text-[14.6px] md:text-[16px] tracking-[2%] text-[#25335C]">
          Speaking language:
        </span>
        <div className="flex flex-wrap justify-start items-center gap-1">
          {languages?.map((l, index) => (
            <div
              key={index}
              className="h-[40px] border border-[#442D87] px-5 flex justify-center items-center rounded-[100px]"
            >
              <span className="font-poppins font-[400] text-[14.6px] md:text-[16px] tracking-[2%] text-[#25335C]">
                {l}
              </span>
            </div>
          ))}
        </div>
        <div className="bg-[#E0D6FF] py-[8px] px-[16px] rounded-[1666px] h-[34px] flex justify-start items-center gap-4">
          <Image
            src="assets/images/clock-icon.svg"
            width={12}
            height={13}
            alt="Heart"
          />
          <span className="font-poppins font-[700] text-[12px] text-[#442D87]">
            Availablity: Monday to Friday
          </span>
        </div>
        <span className="font-poppins font-[600] text-[16px] tracking-[2%] text-[#000000]">
          Reviews
        </span>
        <div className="flex justify-start items-center gap-2">
          <Image
            src="assets/images/rating.svg"
            alt="Rating Stars"
            width={143}
            height={25}
          />
          <span className="font-poppins font-[400] text-[16px] tracking-[2%] text-[#000000]">
            (4.9 ratings)
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <button
            type="button"
            className="w-full rounded-[8px] py-[12px] px-[30px] h-[68px] text-center bg-[#00BAC2] text-white font-poppins font-[700] text-[16px] lg:text-[20px]"
            onClick={() => setOpenPopup(true)}
          >
            Book My Service
          </button>
          <button
            type="button"
            className="w-full rounded-[8px] py-[12px] px-[30px] h-[68px] text-center bg-white text-[#00BAC2] font-poppins font-[700] text-[16px] lg:text-[20px] border border-[#00BAC2]"
          >
            Send me a message
          </button>
        </div>
        <div className="p-[24px] rounded-[10px] bg-[#F8F8F8] flex flex-col justify-start items-start gap-2">
          <span className="font-poppins font-[600] text-[22px] md:text-[24px] tracking-[2%] text-[#000000]">
            About me
          </span>
          <span className="font-poppins font-[400] text-[13px] md:text-[14px] tracking-[-2%] text-[#1F1F1F]">
            My name is Hajira Karamat and I am a cliniclal pshycologist. I have
            completed 4 years of experience in providing mental health services
            to muslim females regarding diverse issues they face during heir
            life journey.
          </span>
          <span className="font-poppins font-[600] text-[15px] md:text-[16px] tracking-[2%] text-[#000000]">
            Service I provide
          </span>
          <div className="w-full flex flex-col justify-start items-start gap-4">
            {serviceProvide?.map((s, index) => (
              <div
                key={index}
                className="w-full flex justify-start items-center gap-2"
              >
                <Image
                  src="assets/images/user-role.svg"
                  width={16}
                  height={16}
                />
                <span className="font-poppins font-[500] text-[13px] md:text-[14px] tracking-[-2%] text-[#6D8493]">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>
        <span className="font-poppins font-[600] text-[22px] md:text-[24px] tracking-[2%] text-[#202124]">
          Location
        </span>
        <span className="font-poppins font-[600] text-[13px] md:text-[14px] tracking-[2%] text-[#279FFF]">
          Rewalpindi, Punjab, Pakistan
        </span>
      </div>
      {openPopup && (
        <CreateAccPopup
          title="It looks like you don’t have account yet."
          titleDesc="To continue chatting with Service Provider, you need to create one."
          handleClose={handleClose}
          question="Do you wish to create an account?"
          txt="You just have to input an password, and we will create the account quick for you!"
          isForm={false}
          primaryBtnClick={handleOpenForm}
          mainImg="assets/images/messages-img.svg"
        />
      )}

      {openFormPopup && (
        <CreateAccPopup
          title="Create account"
          titleDesc="Just create a password, and you are done!"
          handleClose={handleCloseForm}
          question="Create a password to set up account"
          txt="Choose your password to set a quick action for creating account for faster process. "
          isForm={true}
          primaryBtnClick={handleOpenSuccess}
          mainImg="assets/images/chat-img.svg"
        />
      )}

      {openSuccessPopup && (
        <AccCreatedPopup
          title="Create account"
          handleClose={handleCloseSuccess}
        />
      )}
    </>
  );
};

export default index;
