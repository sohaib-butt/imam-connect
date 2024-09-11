"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import purpleEyeIcon from "../../../../../public/assets/images/purple-eye.svg";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";

// Function to create data objects for each row
function createData(customerName, requestedOn, view) {
  return {
    customerName,
    requestedOn,
    view,
  };
}

// Sample data for the table
const rows = [
  createData(
    "Darlene Robertson",
    "30 Mins of Psychology Mind - To Keep You Better",
    "View"
  ),
  createData(
    "Arlene McCoy",
    "30 Mins of Psychology Mind - To Keep You Better",
    "View"
  ),
  createData(
    "Jane Cooper",
    "30 Mins of Psychology Mind - To Keep You Better",
    "View"
  ),
  createData(
    "Darrell Steward",
    "30 Mins of Psychology Mind - To Keep You Better",
    "View"
  ),
  createData(
    "Esther Howard",
    "30 Mins of Psychology Mind - To Keep You Better",
    "View"
  ),
];

export default function index({ setViewModal }) {
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
              {["Customer Name", "Requested On", "View"].map((header) => (
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
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => {
              return (
                <tr
                  key={index}
                  className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]"
                >
                  <td className="px-6 py-6">{row.customerName}</td>
                  <td className="px-6 py-6">{row.requestedOn}</td>
                  <td className="px-6 py-6">
                    <Image
                      src={purpleEyeIcon.src}
                      width={20}
                      height={20}
                      className="cursor-pointer"
                      onClick={() => setViewModal(true)}
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
