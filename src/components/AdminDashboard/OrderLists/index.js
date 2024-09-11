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

// Updated card data with four cards
const cardData = [
  {
    name: 'Jhonny',
    date: '10 Dec 2022',
    service: 'Physiotherapist',
    price: '$100.00',
    status: 'completed',
  },
  {
    name: 'Sara',
    date: '15 Jan 2023',
    service: 'Chiropractor',
    price: '$120.00',
    status: 'on Process',
  },
  {
    name: 'Mike',
    date: '20 Feb 2023',
    service: 'Massage Therapist',
    price: '$80.00',
    status: 'pending',
  },
  {
    name: 'Anna',
    date: '05 Mar 2023',
    service: 'Acupuncturist',
    price: '$150.00',
    status: 'rejected',
  },{
    name: 'Jhonny',
    date: '10 Dec 2022',
    service: 'Physiotherapist',
    price: '$100.00',
    status: 'completed',
  },
  {
    name: 'Sara',
    date: '15 Jan 2023',
    service: 'Chiropractor',
    price: '$120.00',
    status: 'on Process',
  },
  {
    name: 'Mike',
    date: '20 Feb 2023',
    service: 'Massage Therapist',
    price: '$80.00',
    status: 'pending',
  },
  {
    name: 'Anna',
    date: '05 Mar 2023',
    service: 'Acupuncturist',
    price: '$150.00',
    status: 'rejected',
  },{
    name: 'Jhonny',
    date: '10 Dec 2022',
    service: 'Physiotherapist',
    price: '$100.00',
    status: 'completed',
  },
  {
    name: 'Sara',
    date: '15 Jan 2023',
    service: 'Chiropractor',
    price: '$120.00',
    status: 'on Process',
  },
  {
    name: 'Mike',
    date: '20 Feb 2023',
    service: 'Massage Therapist',
    price: '$80.00',
    status: 'pending',
  },
  {
    name: 'Anna',
    date: '05 Mar 2023',
    service: 'Acupuncturist',
    price: '$150.00',
    status: 'rejected',
  },{
    name: 'Jhonny',
    date: '10 Dec 2022',
    service: 'Physiotherapist',
    price: '$100.00',
    status: 'completed',
  },
  {
    name: 'Sara',
    date: '15 Jan 2023',
    service: 'Chiropractor',
    price: '$120.00',
    status: 'on Process',
  },
  {
    name: 'Mike',
    date: '20 Feb 2023',
    service: 'Massage Therapist',
    price: '$80.00',
    status: 'pending',
  },
  {
    name: 'Anna',
    date: '05 Mar 2023',
    service: 'Acupuncturist',
    price: '$150.00',
    status: 'rejected',
  },
];

const OrderLists = () => {
  const [selectedStatus, setSelectedStatus] = useState(null);

  // Handle status click
  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        <div className="text-2xl font-bold text-[#161616]">
          Order lists
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

      {/* Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border border-[#E3E3E3] rounded-[5.68px] shadow-[0px 1.42px 14.21px 0px #00000014] p-[15.65px]"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex flex-col">
                <div className="text-[11.37px] font-semibold mb-1 text-[#284B80]">{card.name}</div>
                <div className="text-[7.82px] text-[#8D98AA]">{card.date}</div>
              </div>
              <div
                className={`inline-flex items-center px-2 py-1 text-[7.82px] font-semibold rounded-full ${
                  card.status === 'completed'
                    ? 'bg-[#E9F9EF] text-[#22C55E]'
                    : card.status === 'on Process'
                    ? 'bg-[#FDF7E6] text-[#EAB308]'
                    : card.status === 'pending'
                    ? 'bg-[#FDF7E6] text-[#EAB308]'
                    : 'bg-[#FDECEC] text-[#EF4444]'
                }`}
              >
                <span
                  className={`w-1 h-1 rounded-full mr-1 ${
                    card.status === 'completed'
                      ? 'bg-[#1FB356]'
                      : card.status === 'onProcess'
                      ? 'bg-[#FBBF24]'
                      : card.status === 'pending'
                      ? 'bg-[#F97316]'
                      : 'bg-[#EF4444]'
                  }`}
                ></span>
                {card.status.charAt(0).toUpperCase() + card.status.slice(1)}
              </div>
            </div>
            <hr className="border-[#DFDFDF] mb-2" style={{ borderWidth: '0.5px' }} />
            <button
              className="block w-full bg-[#F7F9FF] text-[#8D98AA] text-center rounded-[5px] mb-2 py-1"
            >
              <div className="text-[#8D98AA] text-[7.82px]">Service</div>
              <div className="text-[#284B80] font-bold text-[9.95px]">{card.service}</div>
            </button>
            <button
              className="block w-full bg-[#F7F9FF] text-[#8D98AA] text-center rounded-[5px] mb-2 py-1"
            >
              <div className="text-[#8D98AA] text-[7.82px]">Total Price</div>
              <div className="text-[#284B80] font-bold text-[9.95px]">{card.price}</div>
            </button>
            <button
              className="block w-full h-[23.47px] text-[9.95px] text-[#F2F2F2] bg-[#00BAC2] text-center rounded-[6.79px]"
            >
              Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderLists;
