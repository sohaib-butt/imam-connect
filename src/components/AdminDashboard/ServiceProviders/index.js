"use client"
import React, { useState } from 'react';
import RevenueTable from './RevenueTable';
import AddNewModal from './AddNewModal';

const ServiceProviders = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">
            Service Providers
          </div>
          <div
            className="font-normal text-[#667085]"
            style={{ fontSize: '12px' }}
          >
            Total Revenue listed in the last 24 hours
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button
            className="w-full md:w-[224px] h-[56px] border-2 border-[#00BAC2] bg-white text-[#00BAC2] font-bold text-[14px] rounded-lg hover:bg-[#00BAC2] hover:text-white"
            onClick={openModal}
          >
            + Add New SP
          </button>
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            Need Approval (10)
          </button>
        </div>
      </div>

      {/* Revenue Table */}
      <div className="pt-4 md:pt-6">
        <RevenueTable />
      </div>

      {/* Modal Component */}
      <AddNewModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default ServiceProviders;