"use client";
import React, { useState } from "react";
import Image from "next/image";
import AdminImage from "../../../../../public/assets/images/admin-profile.svg";

const ServiceProviderRejectModal = ({ isOpen, onClose }) => {
  const [reason, setReason] = useState("");

  if (!isOpen) return null;

  const notification = {
    id: 1,
    name: 'John Doe',
    action: 'changed price for this service',
    service: 'Counselling for 30 mins in Google Meet',
    oldPrice: '$30',
    newPrice: '$50',
    time: 'Today at 9:42 am',
    showPriceChange: true,
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[658px] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Close"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold">Reason for Rejection</h2>
        <p className="text-sm text-gray-600 mt-1">
          Please insert your reason to reject this change.
        </p>

        <h2 className="text-[14px] font-bold text-[#344054] mt-6">Notification</h2>

        <div className="bg-white border border-gray-200 rounded-lg p-4 mt-2 mb-4">
          <div className="flex items-center mb-4">
            <Image
              src={AdminImage.src}
              alt={`${notification.name}'s profile`}
              width={32}
              height={32}
              className="rounded-full"
            />
            <div className="ml-2">
              <span className="font-bold text-[#442D87] text-sm">
                {notification.name}
              </span>
              <span className="text-sm ml-1">
                {notification.action}{" "}
                <span className="font-bold text-[#442D87]">
                  {notification.service}
                </span>
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600">
            <div className="flex items-center mb-2">
              <Image
                src={AdminImage.src}
                alt={`${notification.name}'s profile`}
                width={32}
                height={32}
                className="rounded-full"
              />
              <div className="ml-2">
                <span>Changed price from </span>
                <span className="font-bold text-[#442D87] mr-1">
                  {notification.oldPrice}
                </span>
                to
                <span className="font-bold text-[#442D87] ml-1">
                  {notification.newPrice}
                </span>
              </div>
            </div>
            <div className="text-sm text-gray-400 mt-2">
              {notification.time}
            </div>
          </div>
        </div>

        <h2 className="text-[14px] font-bold text-[#344054] mt-6">Reason for rejection</h2>

        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mt-2 resize-none"
          rows="4"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="The reason why I’m rejecting this change is..."
        ></textarea>

        <div className="flex flex-col sm:flex-row sm:justify-end mt-4 space-y-2 sm:space-y-0 sm:space-x-2">
          <button
            className="bg-[#F43F5E] text-white font-bold py-2 px-4 rounded-lg w-full sm:w-[197px] h-[56px]"
            onClick={() => {
              alert("Rejected");
              onClose();
            }}
          >
            Reject
          </button>
          <button
            className="bg-white text-[#F43F5E] font-bold py-2 px-4 rounded-lg border border-[#F43F5E] w-full sm:w-[197px] h-[56px]"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderRejectModal;
