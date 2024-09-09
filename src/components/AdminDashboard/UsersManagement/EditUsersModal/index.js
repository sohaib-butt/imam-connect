import React, { useState } from 'react';

// RatingStars component to display star ratings
const RatingStars = ({ rating }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 15.27L16.18 18l-1.64-7.03L20 6.25l-7.19-.62L10 0 7.19 5.63 0 6.25l5.46 4.72L3.82 18 10 15.27z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

const EditUsersModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [rating, setRating] = useState('5'); // Default rating value

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
          <h2 className="text-2xl font-bold">Edit User</h2>
        </div>
        <form className="pt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:grid-rows-3">
          {/* First Name and Last Name */}
          <div className="flex flex-col">
            <label htmlFor="firstName" className="text-sm  text-[#666666]">First Name</label>
            <input
              id="firstName"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter first name"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastName" className="text-sm  text-[#666666]">Last Name</label>
            <input
              id="lastName"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter last name"
            />
          </div>
          {/* Email and Phone Number */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm text-[#666666]">Email</label>
            <input
              id="email"
              type="email"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="phoneNumber" className="text-sm  text-[#666666]">Phone Number</label>
            <input
              id="phoneNumber"
              type="tel"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter phone number"
            />
          </div>
          {/* Address */}
          <div className="col-span-1 lg:col-span-2">
            <label htmlFor="address" className="text-sm text-[#666666]">Address</label>
            <input
              id="address"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
              placeholder="Enter address"
            />
          </div>
          {/* Birthday and Opening Code */}
          <div className="flex flex-col">
            <label htmlFor="birthday" className="text-sm font-semibold text-[#666666]">Birthday</label>
            <input
              id="birthday"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter birthday"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="openingCode" className="text-sm  text-[#666666]">Opening Code</label>
            <input
              id="openingCode"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter opening code"
            />
          </div>
          {/* Tags and Email Marketing */}
          <div className="flex flex-col">
            <label htmlFor="tags" className="text-sm  text-[#666666]">Tags</label>
            <input
              id="tags"
              type="text"
              className="mt-1 p-2 border border-gray-300 rounded-lg"
              placeholder="Enter tags"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emailMarketing" className="text-sm  text-[#666666]">Email Marketing</label>
            <select
              id="emailMarketing"
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            >
              <option
                value="subscribed"
                className="bg-[#E9F9EF] text-[#1FB356] rounded-lg"
              >
                Subscribed
              </option>
              <option
                value="notSubscribed"
                className="bg-[#E9F9EF] text-[#1FB356] rounded-lg"
              >
                Not Subscribed
              </option>
            </select>
          </div>
          {/* Ratings */}
          <div className="flex flex-col lg:col-span-1">
            <label htmlFor="rating" className="text-sm 0 text-[#666666]">Ratings</label>
            <select
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  <div className="flex items-center">
                    <RatingStars rating={value} />
                    <span className="ml-2">{value} Star{value > 1 ? 's' : ''}</span>
                  </div>
                </option>
              ))}
            </select>
          </div>
          {/* Submit Button */}
          <div className="col-span-1 lg:col-span-2 flex justify-end mt-4">
            <button
              type="submit"
              className="w-full md:w-auto h-[56px] font-bold bg-[#00BAC2] text-white py-2 px-4 rounded-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUsersModal;