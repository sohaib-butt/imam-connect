"use client";
import React from "react";
import Image from "next/image";
import { Switch } from "antd";
import AdminImage from "../../../../../public/assets/images/admin-profile.svg";

const onChange = (checked) => {
  console.log(`Switch to ${checked}`);
};

const AddTeamMemberModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        <div>
          <h2 className="text-2xl font-bold mb-4">Team Member Access</h2>
          <p className="mb-6">Please choose the access for this team member</p>

          <h5 className="mb-2">Team Member</h5>
          {/* Single Card Section */}
          <div
            className="bg-white border border-[#E7E7E7] rounded-lg p-6 mb-6"
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
              {/* No Details button here */}
            </div>
          </div>

          {/* Access Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="bg-white border border-[#E7E7E7] rounded-lg p-6 flex items-center justify-between"
                style={{ height: "97px" }}
              >
                <div className="flex items-center space-x-2">
                  <Switch
                    defaultChecked
                    onChange={onChange}
                  />
                  <label
                    htmlFor={`access-switch-${index}`}
                    className="text-sm ml-2"
                  >
                    Orders
                    <br />
                    <span className="text-[#667085]">
                      Admin can accept/reject orders
                    </span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTeamMemberModal;
