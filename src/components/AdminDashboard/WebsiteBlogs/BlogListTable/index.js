"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";
import editPencilIcon from "../../../../../public/assets/images/edit-pencil.svg";

// Function to create data objects for each row
function createData(title, author, tags, lastEdited) {
  return { title, author, tags, lastEdited };
}

// Sample data for the table
const rows = [
  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),
  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),  createData(
    "This is might be a long blog title that can go for one sentence",
    "Arlene McCoy",
    "#Blog #Content",
    "27 Feb 2024, 12:00pm"
  ),
  // Add more blog data here if needed
];

export default function BlogListTable() {
  const [order, setOrder] = useState("desc"); // Default to descending
  const [orderBy, setOrderBy] = useState("title");

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
    <div className="border border-[#EAECF0] rounded-lg overflow-x-auto pb-2">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-[#EAECF0] rounded-lg">
          <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
            <tr>
              {["title", "author", "tags", "lastEdited"].map((header) => (
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
              <th className="px-6 py-3 border-r border-[#EAECF0] text-left">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => (
              <tr
                key={index}
                className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]"
              >
                <td className="px-6 py-6 truncate">{row.title}</td>
                <td className="px-6 py-6">{row.author}</td>
                <td className="px-6 py-6">{row.tags}</td>
                <td className="px-6 py-6">{row.lastEdited}</td>
                <td className="px-6 py-6">
                  <button>
                    <Image
                      src={editPencilIcon.src}
                      width={24}
                      height={24}
                      alt="Edit icon"
                    />
                  </button>
                </td>
              </tr>
            ))}
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
