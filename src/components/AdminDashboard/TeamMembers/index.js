"use client";
import React, { useState } from "react";
import Image from "next/image";
import AdminImage from "../../../../public/assets/images/admin-profile.svg";
import AddTeamMemberModal from "./AddTeamMemberModal"; 

const TeamMembers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">
            ImamConnect Team Members
          </div>
          <div className="font-normal text-[#667085]" style={{ fontSize: "12px" }}>
            You can list all the team members and grant them access in the platform.
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button
            className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]"
            onClick={openModal}
          >
            + Add Team Members
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className="bg-white border border-[#E7E7E7] rounded-lg p-6"
            style={{ height: "97px" }}
          >
            <div className="flex items-center justify-between">
              {/* Left Side */}
              <div className="flex items-center space-x-2">
                <Image
                  src={AdminImage}
                  alt="Admin"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <div className="font-bold text-[#161616]">Admin1</div>
                  <div className="text-[#667085]">Marketing</div>
                </div>
              </div>
              {/* Right Side */}
              <button className="bg-[#00BAC2] width-[47px] height-[21px] text-white font-bold text-xs rounded px-4 py-2 hover:bg-[#00a6a6]">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Team Member Modal */}
      <AddTeamMemberModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default TeamMembers;
