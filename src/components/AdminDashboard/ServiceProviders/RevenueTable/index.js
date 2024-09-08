"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import purpleEyeIcon from "../../../../../public/assets/images/purple-eye.svg";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";

// Function to create data objects for each row
function createData(dateJoined, name, service, location, price, status) {
  return { dateJoined, name, service, location, price, status };
}

// Sample data for the table
const rows = [
  createData("2024-01-15", "John Doe", "Service A", "New York", "$120", "Active"),
  createData("2024-03-22", "Jane Smith", "Service B", "Los Angeles", "$150", "Inactive"),
  createData("2024-05-30", "Alice Johnson", "Service C", "Chicago", "$200", "Active"),
  createData("2024-07-18", "Bob Brown", "Service A", "Houston", "$180", "Pending"),
  createData("2024-09-01", "Charlie Davis", "Service D", "Phoenix", "$210", "Active"),
  // Additional rows...
];

export default function RevenueTable() {
  const [order, setOrder] = useState("desc"); // Default to descending
  const [orderBy, setOrderBy] = useState("date joined");

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedRows = useMemo(() => {
    return rows.slice().sort((a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === "asc" ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [order, orderBy]);

  return (
    <div className="overflow-x-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
      <table className="min-w-full bg-white rounded-lg border border-[#EAECF0]">
        <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
          <tr>
            {["date joined", "name", "service", "location", "price", "status"].map((header) => (
              <th
                key={header}
                className="px-6 py-3 cursor-pointer text-left hover:bg-[#F5F5F5]"
                onClick={() => handleRequestSort(header)}
              >
                <div className="flex items-center gap-2">
                  <span>{capitalizeFirstLetter(header)}</span>
                  <span className="text-[#667085] text-[10px]">
                    {orderBy === header ? (
                      <Image src={ArrowDownIcon.src} width={16} height={16} alt="Sort icon" />
                    ) : (
                      <Image src={ArrowDownIcon.src} width={16} height={16} alt="Sort icon" />
                    )}
                  </span>
                </div>
              </th>
            ))}
            <th className="px-6 py-3 border-r border-[#EAECF0] text-left">View</th>
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row, index) => (
            <tr key={index} className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]">
              <td className="px-6 py-3">{row.dateJoined}</td>
              <td className="px-6 py-3">{row.name}</td>
              <td className="px-6 py-3">{row.service}</td>
              <td className="px-6 py-3">{row.location}</td>
              <td className="px-6 py-3">{row.price}</td>
              <td className="px-6 py-3">{row.status}</td>
              <td className="px-6 py-3">
                <Image src={purpleEyeIcon.src} width={15.58} height={10} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Helper function to capitalize the first letter of the string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
