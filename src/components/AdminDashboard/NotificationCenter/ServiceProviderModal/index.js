"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import AdminImage from "../../../../../public/assets/images/admin-profile.svg";

const ServiceProviderAcceptModal = ({ isOpen, onClose }) => {
    const [selectedProvider, setSelectedProvider] = useState(null);

    if (!isOpen) return null;

    const serviceProviders = [
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$10,00' },
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$20,00' },
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$30,00' },
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$10,00' },
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$20,00' },
        { name: 'Abdul Rozak', offer: 'I Offer - Counselling session for 30 mins', price: '$30,00' },
    ];

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
                <div className="pb-4 z-10">
                    <h2 className="text-[24px] font-bold">Allocate to another SP</h2>
                    <h2 className="text-[16px] font-bold text-[#666666]">Please choose the suitable service providers for {'{Customer-Name}'}</h2>

                    <h2 className="text-[14px] font-bold text-[#344054] mt-6">Notification</h2>
                    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
                        <div className="flex items-center space-x-4">
                            <Image
                                src={AdminImage.src}
                                alt="Customer"
                                width={50}
                                height={50}
                                className="rounded-full border border-gray-300"
                            />
                            <div>
                                <p className="text-[14px] font-semibold text-[#1A1F36]">{'{Customer-Name} requested to allocate SP for a service from SP Name'}</p>
                                <p className="text-gray-500"></p>
                                <p className="text-gray-400 text-xs mt-1">Today at 9:42 am</p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-[14px] font-bold mb-2 text-[#344054]">Select Service Providers</h2>
                    <p className="mb-4 text-[#344054] text-[12px]">These service providers are curated to suit the customer’s requirements.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                        {serviceProviders.map((provider, index) => (
                            <div
                                key={index}
                                onClick={() => setSelectedProvider(index)}
                                className={`border-2 rounded-lg flex flex-col cursor-pointer p-[8px_16px] transition-colors
                                    ${selectedProvider === index ? 'border-[#442D87]' : 'border-gray-200'}`}
                            >
                                <div className="flex items-center space-x-2 mb-2">
                                    <Image
                                        src={AdminImage.src}
                                        alt={provider.name}
                                        width={16}
                                        height={16}
                                        className="rounded-full"
                                    />
                                    <p className="font-semibold text-[#442D87] text-[12px] m-0">{provider.name}</p>
                                </div>
                                <hr className="mb-2 border-t border-[#E7E7E7]" />
                                <div className="flex-1">
                                    <p className="text-[#2A282F] text-[12px] font-semibold rounded mb-2">{provider.offer}</p>
                                    <p className="text-green-600 text-[12px] font-semibold bg-[#22C55E] text-white inline-block px-2 py-1 rounded-full">{provider.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                  {/* Allocate Button */}
                  <div className="flex justify-center lg:justify-end mt-4">
                        <button
                            className="bg-[#00BAC2] text-white font-semibold py-2 px-4 rounded-lg w-full lg:w-[197px] h-[56px]"
                            onClick={() => alert('SP Allocated')}
                        >
                            Allocate this SP
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceProviderAcceptModal;