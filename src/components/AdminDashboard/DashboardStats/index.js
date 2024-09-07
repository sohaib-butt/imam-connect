"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CanvasJSChartComponent from "./CanvasChart"; // Adjust path if necessary
import ArrowRiseIcon from "../../../../public/assets/images/ArrowRise.svg";

const DashboardStats = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState("Today");
  const [selectedMonth, setSelectedMonth] = useState("January");

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const cardData = [
    {
      title: "Total Revenue",
      content: "$3,335.00",
      percentageChange: "+11.01%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
    {
      title: "Total Orders",
      content: "1,234",
      percentageChange: "+8.25%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
    {
      title: "Total Users",
      content: "5,678",
      percentageChange: "-3.45%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
    {
      title: "New Signups",
      content: "456",
      percentageChange: "+12.34%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
    {
      title: "Product Views",
      content: "8,910",
      percentageChange: "-2.22%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
    {
      title: "Cart Abandonments",
      content: "789",
      percentageChange: "+5.67%",
      icon: <Image src={ArrowRiseIcon.src} width={16} height={16} />,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <select
          value={selectedPeriod}
          onChange={handlePeriodChange}
          className="border border-gray-300 rounded p-2 mt-2"
        >
          <option value="Today">Today</option>
          <option value="Tomorrow">Tomorrow</option>
          <option value="Yesterday">Yesterday</option>
        </select>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between p-4 border border-gray-200 shadow h-[112px] rounded-[16px] ${
              index === 1 || index === 4 ? "bg-[#E5ECF6]" : "bg-[#E3F5FF]"
            }`}
          >
            <h3 className="text-[14px] font-normal text-[#1C1C1C] mb-2">
              {card.title}
            </h3>
            <div className="flex items-center justify-between mt-1">
              <p className="text-[#1C1C1C] text-[20px] font-bold">
                {card.content}
              </p>
              <div className="flex items-center space-x-1">
                <span
                  className={`text-[12px] ${
                    card.percentageChange.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {card.percentageChange}
                </span>
                {card.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Graph */}
      <div
        className="bg-white border border-gray-200 rounded-[12px] p-6 shadow"
        style={{
          boxShadow: "5.25px 5.25px 47.22px 0px #0000000D", // Apply the box-shadow here
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Sales Details</h2>
          <select
            value={selectedMonth}
            onChange={handleMonthChange}
            className="border border-gray-300 rounded p-2"
          >
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>
        </div>
        <CanvasJSChartComponent />
      </div>
    </div>
  );
};

export default DashboardStats;
