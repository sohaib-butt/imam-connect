"use client";
import React from "react";
import InputField from "@/components/shared/InputField";
import DropZone from "@/components/shared/Dropzone";

const AddMediaModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-4xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">Add Media</h2>
        <p className="text-gray-600 mb-4">Please upload your image here</p>

        {/* Fields Section */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Alt Text Field */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="alt-text" className="font-medium text-gray-700">
              Alt Text
            </label>
            <InputField
              id="alt-text"
              type="text"
              placeholder="Enter alt text"
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Title Field */}
          <div className="flex flex-col space-y-2">
            <label htmlFor="title" className="font-medium text-gray-700">
              Title
            </label>
            <InputField
              id="title"
              type="text"
              placeholder="Enter title"
              className="border border-gray-300 rounded-lg p-2"
            />
          </div>
        </div>

        {/* Description Textarea */}
        <div className="flex flex-col space-y-2 mt-4">
          <label htmlFor="description" className="font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            placeholder="Enter description"
            className="border border-gray-300 rounded-lg p-2 resize-none"
            rows="4"
          />
        </div>

        {/* DropZone */}
        <DropZone className="mt-4" />

        {/* Add Media Button */}
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="w-full md:w-[197px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]"
          >
            Add Media
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddMediaModal;
