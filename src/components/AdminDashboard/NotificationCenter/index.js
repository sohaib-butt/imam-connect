"use client";
import React, { useState } from "react";
import Image from "next/image";
import MediaImage from "../../../../public/assets/images/Media.svg";
import ServiceProviderAcceptModal from "./ServiceProviderModal";
import ServiceProviderRejectModal from "./ServiceProviderRejectModal";

const NotificationCenter = () => {
  const [selectedTab, setSelectedTab] = useState("ServiceProvider");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  // Updated notifications with showPriceChange flag
  const notifications = [
    {
      id: 1,
      imageSrc: MediaImage.src,
      name: "John Doe",
      action: "changed price for this service",
      service: "Counselling for 30 mins in Google Meet",
      oldPrice: "$30",
      newPrice: "$50",
      time: "Today at 9:42 am",
      showPriceChange: true,
    },
    {
      id: 2,
      imageSrc: MediaImage.src,
      name: "John Doe",
      action: "changed price for this service",
      service: "Counselling for 30 mins in Google Meet",
      oldPrice: "$30",
      newPrice: "$50",
      time: "Today at 9:42 am",
      showPriceChange: true,
    },
    {
      id: 3,
      imageSrc: MediaImage.src,
      name: "John Doe",
      action: "changed price for this service",
      service: "Counselling for 30 mins in Google Meet",
      oldPrice: "$30",
      newPrice: "$50",
      time: "Today at 9:42 am",
      showPriceChange: true,
    },
    {
      id: 4,
      imageSrc: MediaImage.src,
      name: "John Doe",
      action: "changed price for this service",
      service: "Counselling for 30 mins in Google Meet",
      oldPrice: "$30",
      newPrice: "$50",
      time: "Today at 9:42 am",
      showPriceChange: true,
    },
    {
      id: 5,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
    {
      id: 6,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
    {
      id: 7,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
    {
      id: 8,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
    {
      id: 9,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
    {
      id: 10,
      imageSrc: MediaImage.src,
      name: "Jane Smith",
      action: "updated service details",
      service: "Yoga class for 1 hour",
      oldPrice: null,
      newPrice: null,
      time: "Today at 10:15 am",
      showPriceChange: false,
    },
  ];

  const handleAcceptClick = () => {
    setIsModalOpen(true);
  };

  const handleRejectClick = () => {
    setIsRejectModalOpen(true);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">
            Notification Center
          </div>
          <div
            className="font-normal text-[#667085]"
            style={{ fontSize: "12px" }}
          >
            You can see all of your notifications here
          </div>
        </div>

        {/* Right Side Notification */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto items-start relative">
          <div className="relative bg-[#E0D6FF] text-[#442D87] text-[12px] font-bold py-2 px-4 rounded-full flex items-center justify-center">
            <div
              className="absolute bg-[#EF4444] rounded-full"
              style={{
                width: "16px",
                height: "16px",
                top: "10%",
                right: "-4px",
                transform: "translateY(-50%)",
              }}
            ></div>
            You have 188 notifications
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative mb-4 flex flex-row py-2 px-4 md:px-0 py-4 lg:px-[160px] lg:py-4">
        <button
          onClick={() => setSelectedTab("ServiceProvider")}
          className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
            selectedTab === "ServiceProvider"
              ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
              : "text-[#999999]"
          } bg-white py-4 rounded-t-lg`}
        >
          Service Providers
        </button>
        <button
          onClick={() => setSelectedTab("Customers")}
          className={`flex items-center justify-center w-full md:w-[169px] h-[60px] text-sm font-bold relative ${
            selectedTab === "Customers"
              ? "text-[#00BAC2] border-b-4 border-[#00BAC2]"
              : "text-[#999999]"
          } bg-white py-4 rounded-t-lg`}
        >
          Customers
        </button>
      </div>

      {/* Tab Content */}
      <div className="py-4 px-4 md:px-0 py-4 lg:px-[160px] lg:py-4">
        {selectedTab === "ServiceProvider" && (
          <div>
            {notifications
              .filter((notification) => notification.showPriceChange)
              .map((notification) => (
                <div
                  key={notification.id}
                  className="flex flex-col border-b border-gray-300 py-4 mb-4"
                >
                  {/* Image and Provider Name Line */}
                  <div className="flex items-center mb-2">
                    <Image
                      src={notification.imageSrc}
                      alt={`${notification.name}'s profile`}
                      width={32}
                      height={32}
                      className="rounded-full"
                      style={{ borderRadius: "32px" }}
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

                  {/* Price Change Line */}
                  <div className="flex items-center mb-2">
                    <Image
                      src={notification.imageSrc}
                      alt={`${notification.name}'s profile`}
                      width={32}
                      height={32}
                      className="rounded-full"
                      style={{ borderRadius: "32px" }}
                    />
                    <div className="text-sm ml-2">
                      <span>Changed price from </span>
                      <span className="font-bold text-[#442D87] ">
                        {notification.oldPrice}
                      </span>{" "}
                      to
                      <span className="font-bold text-[#442D87] ml-1">
                        {notification.newPrice}
                      </span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex mt-2 space-x-2">
                    <button
                      className="bg-[#22C55E] w-[98px] h-[40px] text-white font-bold rounded"
                      onClick={handleAcceptClick}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-white w-[98px] h-[40px] text-[#F43F5E] font-bold border border-[#F43F5E] rounded "
                      onClick={handleRejectClick}
                    >
                      Reject
                    </button>
                  </div>

                  {/* Timestamp */}
                  <div className="text-sm text-[#999999] mt-2">
                    {notification.time}
                  </div>
                </div>
              ))}
          </div>
        )}
        {selectedTab === "Customers" && (
          <div>
            {notifications
              .filter((notification) => !notification.showPriceChange)
              .map((notification) => (
                <div
                  key={notification.id}
                  className="flex flex-col border-b border-gray-300 py-4 mb-4"
                >
                  {/* Image and Provider Name Line */}
                  <div className="flex items-center mb-2">
                    <Image
                      src={notification.imageSrc}
                      alt={`${notification.name}'s profile`}
                      width={32}
                      height={32}
                      className="rounded-full"
                      style={{ borderRadius: "32px" }}
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

                  {/* Action Buttons */}
                  <div className="flex mt-2 space-x-2">
                    <button className="bg-[#22C55E] w-[98px] h-[40px] text-white font-bold rounded">
                      Accept
                    </button>
                    <button className="bg-white w-[98px] h-[40px] text-[#F43F5E] font-bold border border-[#F43F5E] rounded">
                      Reject
                    </button>
                  </div>

                  {/* Timestamp */}
                  <div className="text-sm text-[#999999] mt-2">
                    {notification.time}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {/* Modal */}
      <ServiceProviderAcceptModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <ServiceProviderRejectModal
        isOpen={isRejectModalOpen}
        onClose={() => setIsRejectModalOpen(false)}
      />
    </div>
  );
};

export default NotificationCenter;
