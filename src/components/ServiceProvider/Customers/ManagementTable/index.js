"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import purpleEyeIcon from "../../../../../public/assets/images/purple-eye.svg";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";

// Function to create data objects for each row
function createData(date, customerName, feedback, location, view) {
  return {
    date,
    customerName,
    feedback,
    location,
    view,
  };
}

// Sample data for the table
const rows = [
  createData(
    "28 Dec 2021",
    "Darlene Robertson",
    "“I think it’s nice to ha...",
    "United Kingdom",
    "View"
  ),
  createData(
    "29 Dec 2021",
    "Arlene McCoy",
    "“I think it’s nice to ha...",
    "Indonesia",
    "View"
  ),
  createData(
    "30 Dec 2021",
    "Jane Cooper",
    "“I think it’s nice to ha...",
    "USA",
    "View"
  ),
  createData(
    "01 Jan 2021",
    "Darrell Steward",
    "“I think it’s nice to ha...",
    "Thailand",
    "View"
  ),
  createData(
    "02 Jan 2021",
    "Esther Howard",
    "“I think it’s nice to ha...",
    "United Kingdom",
    "View"
  ),
];

export default function index({setViewDetails}) {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("date");

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
    <div className="border border-[#EAECF0] rounded-lg overflow-x-auto pb-2 w-full">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-[#EAECF0] rounded-lg">
          <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
            <tr>
              {["Date", "Customer Name", "Feedback", "Location", "View"].map(
                (header) => (
                  <th
                    key={header}
                    className="px-6 py-3 cursor-pointer text-left hover:bg-[#F5F5F5]"
                    onClick={() => handleRequestSort(header)}
                  >
                    <div className="flex items-center gap-2">
                      <span>{capitalizeFirstLetter(header)}</span>
                      <span className="text-[#667085] text-[10px]">
                        {orderBy === header ? (
                          <Image
                            src={ArrowDownIcon.src}
                            width={16}
                            height={16}
                            alt="Sort icon"
                          />
                        ) : (
                          <Image
                            src={ArrowDownIcon.src}
                            width={16}
                            height={16}
                            alt="Sort icon"
                          />
                        )}
                      </span>
                    </div>
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => {
              return (
                <tr
                  key={index}
                  className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]"
                >
                  <td className="px-6 py-6">{row.date}</td>
                  <td className="px-6 py-6">{row.customerName}</td>
                  <td className="px-6 py-6">{row.feedback}</td>
                  <td className="px-6 py-6">{row.location}</td>
                  <td className="px-6 py-6">
                    <Image
                      src={purpleEyeIcon.src}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={() => setViewDetails(true)}
                    />
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

// Helper function to capitalize the first letter of the string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
