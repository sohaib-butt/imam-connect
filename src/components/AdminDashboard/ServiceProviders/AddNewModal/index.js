"use client";
import React from "react";
import DropZone from "@/components/shared/Dropzone";

const AddNewModal = ({ isOpen, onClose }) => {
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
        <div className="bg-white pb-4 z-10">
          <h2 className="text-2xl font-bold">Add New Service Provider</h2>
        </div>
        <form className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Last Name"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="email"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="dob"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
            <div>
              <label
                htmlFor="denomination"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Denomination
              </label>
              <select
                id="denomination"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              >
                <option value="">Select</option>
                {/* Add options here */}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
            >
              Languages
            </label>
            <select
              id="language"
              multiple
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
            >
              {/* Add options here */}
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="country"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Country"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="City"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="experience"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Relevant Work Experience
              </label>
              <textarea
                id="experience"
                placeholder="Tell us about your story!"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2] h-40 resize-none"
                rows="4"
              />
            </div>
            <div>
              <label
                htmlFor="qualifications"
                className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
              >
                Qualifications and Certificates
              </label>
              <DropZone className="h-40" />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
            >
              Description of Yourself
            </label>
            <textarea
              id="description"
              placeholder="Tell us about your story!"
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2] h-48 resize-none"
              rows="6"
            />
          </div>
          <div className="flex justify-end mb-4">
            <button
              type="submit"
              className="w-[311px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]"
            >
              + Add New Service Provider
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewModal;