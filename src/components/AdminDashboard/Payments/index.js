"use client";
import React, { useState } from 'react';
import { Input, DatePicker } from 'antd';
import 'antd/dist/reset.css'; 
import { SearchOutlined } from '@ant-design/icons';
import WithdrawHistoryTable from './WithdrawHistoryTable'; 

// Status styles based on selection
const statusStyles = {
  completed: {
    selected: {
      backgroundColor: '#B9FCFF',
      color: '#00BAC2',
      borderColor: '#00BAC2',
    },
    unselected: {
      backgroundColor: '#FFFFFF',
      color: '#D7D7D7',
      borderColor: '#D7D7D7',
    },
  },
  onProcess: {
    selected: {
      backgroundColor: '#B9FCFF',
      color: '#00BAC2',
      borderColor: '#00BAC2',
    },
    unselected: {
      backgroundColor: '#FFFFFF',
      color: '#D7D7D7',
      borderColor: '#D7D7D7',
    },
  },
  pending: {
    selected: {
      backgroundColor: '#B9FCFF',
      color: '#00BAC2',
      borderColor: '#00BAC2',
    },
    unselected: {
      backgroundColor: '#FFFFFF',
      color: '#D7D7D7',
      borderColor: '#D7D7D7',
    },
  },
  rejected: {
    selected: {
      backgroundColor: '#B9FCFF',
      color: '#00BAC2',
      borderColor: '#00BAC2',
    },
    unselected: {
      backgroundColor: '#FFFFFF',
      color: '#D7D7D7',
      borderColor: '#D7D7D7',
    },
  },
};

const Payments = () => {
  const [selectedTab, setSelectedTab] = useState("Total Income Funds");
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Handle tab click
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  // Handle status click
  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start space-y-4 md:space-y-0 mb-4">
        <div className="text-2xl font-bold text-[#161616]">Payments</div>
        {/* Right Side Buttons */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            Add Payment Method
          </button>
        </div>
      </div>

      {/* Search and Date Picker Section */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Input
          placeholder="Search"
          suffix={<SearchOutlined style={{ width: '26.68px', height: '26.68px', color: '#C4C4C4' }} />}
          className="w-full md:w-[317px] h-[42.37px] border border-gray-300 rounded-none"
        />
        <DatePicker
          placeholder="Choose transaction date"
          className="w-full md:w-[317px] h-[42.37px] rounded-none"
        />
      </div>

      {/* Status Capsules Section */}
      <div className="overflow-x-auto hide-scrollbar mb-6">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <span className="font-bold text-[#161616] text-[16px] mr-2">Status</span>
          {['completed', 'onProcess', 'pending', 'rejected'].map((status) => (
            <button
              key={status}
              onClick={() => handleStatusClick(status)}
              className={`px-4 py-2 text-[12px] font-semibold rounded-full border-2 ${
                selectedStatus === status
                  ? `bg-[${statusStyles[status].selected.backgroundColor}] text-[${statusStyles[status].selected.color}] border-[${statusStyles[status].selected.borderColor}]`
                  : `bg-[${statusStyles[status].unselected.backgroundColor}] text-[${statusStyles[status].unselected.color}] border-[${statusStyles[status].unselected.borderColor}]`
              }`}
              style={{
                borderRadius: '65px',
              }}
            >
              {status.charAt(0).toUpperCase() + status.slice(1).replace(/([A-Z])/g, ' $1')}
            </button>
          ))}
        </div>
      </div>

      {/* Tabs Section */}
      <div className="border border-[#D0D5DD] rounded-lg shadow-[0px 1px 2px 0px #1018280D] mb-6 overflow-x-scroll">
        <div className="flex flex-row overflow-x-auto p-4">
          {["Total Income Funds", "Pending", "Available to withdraw"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`flex-1 py-2 text-center text-sm font-semibold rounded-t-lg border-b-4 ${
                selectedTab === tab
                  ? "text-[#00BAC2] border-[#00BAC2]"
                  : "text-[#999999] border-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="p-4 flex flex-col items-center gap-4">
          {selectedTab === "Total Income Funds" && (
            <div className="flex flex-col items-center gap-4">
              <div className="text-[#000000]  font-bold md:text-[28px] sm:text-[24px]">$200,000</div>
              <div className="text-[#202124]  md:text-[18px] sm:text-[16px] text-center">
                Total funds from service providers
              </div>
            </div>
          )}
          {selectedTab === "Pending" && (
            <div className="flex flex-col items-center gap-4">
              {/* Content for "Pending" tab */}
              <div className="text-[#000000]  font-bold md:text-[28px] sm:text-[24px]">$Pending Amount</div>
              <div className="text-[#202124]  md:text-[18px] sm:text-[16px] text-center">
                Pending amount details
              </div>
            </div>
          )}
          {selectedTab === "Available to withdraw" && (
            <div className="flex flex-col items-center gap-4">
              {/* Content for "Available to withdraw" tab */}
              <div className="text-[#000000] font-bold md:text-[28px] sm:text-[24px]">$Withdrawable Amount</div>
              <div className="text-[#202124]  md:text-[18px] sm:text-[16px] text-center">
                Amount available for withdrawal
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Withdraw History Table Section */}
      <div className="mt-8">
        <div className="text-2xl font-bold text-[#161616] mb-4">Withdraw History</div>
        <WithdrawHistoryTable />
      </div>
    </div>
  );
};

export default Payments;
