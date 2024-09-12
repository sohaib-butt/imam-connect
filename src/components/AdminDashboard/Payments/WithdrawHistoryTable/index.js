"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg"; 
import ArrowUpIcon from "../../../../../public/assets/images/arrow-down.svg"; 

// Sample data for the table
const rows = [
  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Pending",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },  {
    date: "15 May 2020 9:00 am",
    name: "Darlene Robertson",
    paymentMethod: "MasterCard (xxxx-xxxx-xxxx)",
    fundsWithdrawn: "$500.00",
    status: "Accepted",
  },


  // Add more rows as needed
];

export default function WithdrawHistoryTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("date");

  // Function to handle sorting
  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Sorting logic
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

  const statusStyle = (status) => {
    let bgColor, dotColor;

    switch (status) {
      case "Accepted":
        bgColor = "#ECFDF3";
        dotColor = "#14BA6D";
        break;
      case "Pending":
        bgColor = "#FFF3E0";
        dotColor = "#FF9800";
        break;
      default:
        bgColor = "#FFFFFF";
        dotColor = "#CCCCCC";
    }

    return { bgColor, dotColor };
  };

  return (
    <div className="border border-[#EAECF0] rounded-lg overflow-x-auto pb-2">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-[#EAECF0] rounded-lg">
          <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
            <tr>
              {["Date", "Name", "Withdraw Payment Method", "Funds Withdrawn", "Status"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left cursor-pointer"
                  onClick={() => handleRequestSort(header.toLowerCase().replace(/ /g, ''))}
                >
                  <div className="flex items-center gap-2">
                    <span>{header}</span>
                    {orderBy === header.toLowerCase().replace(/ /g, '') ? (
                      <Image
                        src={order === "asc" ? ArrowUpIcon.src : ArrowDownIcon.src}
                        width={16}
                        height={16}
                        alt="Sort icon"
                      />
                    ) : (
                      <Image src={ArrowDownIcon.src} width={16} height={16} alt="Sort icon" />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => {
              const { bgColor, dotColor } = statusStyle(row.status);
              return (
                <tr
                  key={index}
                  className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0] hover:bg-[#F9FAFB]"
                >
                  <td className="px-6 py-3">{row.date}</td>
                  <td className="px-6 py-3">{row.name}</td>
                  <td className="px-6 py-3">{row.paymentMethod}</td>
                  <td className="px-6 py-3">{row.fundsWithdrawn}</td>
                  <td className="px-6 py-3">
                    <div
                      className="inline-flex items-center px-2 py-1 rounded-full"
                      style={{ backgroundColor: bgColor }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: dotColor }}
                      />
                      <span className="ml-2 text-[12px] text-[#333333]">{row.status}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
