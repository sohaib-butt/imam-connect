// components/AdminDashboard/DashboardStats/index.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import CanvasJSChartComponent from "./CanvasChart"; // Adjust path if necessary

const DashboardStats = () => {
  const router = useRouter();
  const [selectedPeriod, setSelectedPeriod] = useState("Today");

  const handlePeriodChange = (e) => {
    setSelectedPeriod(e.target.value);
  };

  return (
    <div className="p-6 space-y-6">
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
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`p-4 border border-gray-200 shadow h-[112px] rounded-[16px] ${
              index === 1 || index === 4 ? "bg-[#E5ECF6]" : "bg-[#E3F5FF]"
            }`}
          >
            <h3 className="text-lg font-semibold text-gray-700">
              Card {index + 1}
            </h3>
            <p className="text-gray-600">Card content goes here.</p>
          </div>
        ))}
      </div>

      {/* Stats Graph */}
      <div
        className="bg-white border border-gray-200 rounded p-6 shadow"
        style={{
          boxShadow: "5.25px 5.25px 47.22px 0px #0000000D", // Apply the box-shadow here
        }}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Stats Graph
        </h2>
        <CanvasJSChartComponent />
      </div>
    </div>
  );
};

export default DashboardStats;
