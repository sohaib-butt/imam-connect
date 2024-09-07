"use client";
import React from "react";

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
                <option value="denom1">Denomination 1</option>
                <option value="denom2">Denomination 2</option>
                <option value="denom3">Denomination 3</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="language"
              className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
            >
              Language
            </label>
            <select
              id="language"
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
            >
              <option value="">Select</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="country"
              className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
            >
              Country
            </label>
            <select
              id="country"
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
            >
              <option value="">Select</option>
              <option value="usa">United States</option>
              <option value="canada">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="australia">Australia</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="city"
              className="block font-poppins text-[16px] font-normal leading-[20px] tracking-wide text-[#666666]"
            >
              City
            </label>
            <select
              id="city"
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
            >
              <option value="">Select</option>
              <option value="nyc">New York City</option>
              <option value="la">Los Angeles</option>
              <option value="sf">San Francisco</option>
              <option value="chicago">Chicago</option>
            </select>
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
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
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
              <input
                type="file"
                id="qualifications"
                className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
              />
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
              className="border border-gray-300 p-2 rounded w-full mt-1 focus:ring-0 focus:border-[#00BAC2]"
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
