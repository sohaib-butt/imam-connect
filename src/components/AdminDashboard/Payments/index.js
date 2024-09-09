"use client";
import React, { useState } from 'react';
import { Input, DatePicker } from 'antd';
import 'antd/dist/reset.css'; // Import Ant Design CSS
import { SearchOutlined } from '@ant-design/icons';

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
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Handle status click
  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };
  return (
    <div className="flex flex-col p-4">
    {/* Header Section */}
    <div className="flex flex-col md:flex-row justify-between items-start  space-y-4 md:space-y-0 mb-4">
        <div className="text-2xl font-bold text-[#161616]">
          Payments
        </div>
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


    </div>
  )
}

export default Payments