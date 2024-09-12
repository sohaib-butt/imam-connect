"use client";

import React, { useState } from "react";
import editIcon from "../../../../public/assets/images/edit-pencil.svg";
import ArrowDownIcon from "../../../../public/assets/images/arrow-down.svg";

const pageData = [
  {
    pageName: "Homepage",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Active",
  },
  {
    pageName: "About us",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Draft",
  },
  {
    pageName: "Contact us",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Active",
  },
  {
    pageName: "FAQs",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },
  {
    pageName: "About",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },  {
    pageName: "Team",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },  {
    pageName: "Privacy Policy",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },  {
    pageName: "Support",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },  {
    pageName: "Code of Conduct",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },
  {
    pageName: "FAQ",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  }, {
    pageName: "Contact Us",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },
  {
    pageName: "Payment",
    dateCreated: "23 Feb 2024 at 9.04pm",
    lastEdited: "28 Feb 2024 at 9.04pm",
    status: "Inactive",
  },
  
  // Add more rows as needed
];

const statusStyle = (status) => {
  let bgColor, dotColor;
  switch (status) {
    case "Active":
      bgColor = "#ECFDF3";
      dotColor = "#14BA6D";
      break;
    case "Draft":
      bgColor = "#F2F4F7";
      dotColor = "#364254";
      break;
    case "Inactive":
      bgColor = "#FDF7E6";
      dotColor = "#EAB308";
      break;
    default:
      bgColor = "#FFFFFF";
      dotColor = "#CCCCCC";
  }
  return { bgColor, dotColor };
};

const ListedPages = () => {
  const [sortDirection, setSortDirection] = useState("asc"); 
  const [sortedData, setSortedData] = useState(pageData);

  const handleSort = (column) => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);

    const sorted = [...pageData].sort((a, b) => {
      if (a[column] < b[column]) return newDirection === "asc" ? -1 : 1;
      if (a[column] > b[column]) return newDirection === "asc" ? 1 : -1;
      return 0;
    });
    setSortedData(sorted);
  };

  return (
    <div className="flex flex-col p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0 mb-4">
        {/* Left Side */}
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-[#161616]">Listed Pages</div>
          <div className="font-normal text-[#667085] text-[12px]">
            This is all listed pages that you can create for building a website.
          </div>
        </div>

        {/* Right Side Button */}
        <div className="flex flex-col md:flex-row md:ml-auto space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">
          <button className="w-full md:w-[224px] h-[56px] bg-[#00BAC2] text-white font-bold text-[14px] rounded-lg hover:bg-[#00a6a6]">
            + New Page
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="border border-[#EAECF0] rounded-lg overflow-x-auto">
        <table className="min-w-full bg-white border border-[#EAECF0] rounded-lg">
          <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
            <tr>
              {["Pages name", "Date created", "Last edited", "Status", "Edit"].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 text-left cursor-pointer"
                  onClick={() => handleSort(header.replace(" ", "").toLowerCase())}
                >
                  <div className="flex items-center gap-2">
                    <span>{header}</span>
                    {header !== "Edit" && (
                      <img
                        src={ArrowDownIcon.src}
                        alt="Sort Icon"
                        className="w-4 h-4"
                      />
                    )}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedData.map((page, index) => {
              const { bgColor, dotColor } = statusStyle(page.status);
              return (
                <tr
                  key={index}
                  className="px-[24px] py-[16px] text-[#667085] text-[14px] font-normal border-b border-[#EAECF0] hover:bg-[#F9FAFB]"
                >
                  <td className="px-[24px] py-[16px]">{page.pageName}</td>
                  <td className="px-[24px] py-[16px]">{page.dateCreated}</td>
                  <td className="px-[24px] py-[16px]">{page.lastEdited}</td>
                  <td className="px-[24px] py-[16px]">
                    <div
                      className="inline-flex items-center px-2 py-1 rounded-full"
                      style={{ backgroundColor: bgColor }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: dotColor }}
                      />
                      <span className="ml-2 text-[12px]" style={{ color: dotColor }}>
                        {page.status}
                      </span>
                    </div>
                  </td>
                  <td className="px-[24px] py-[16px]">
                    <button className="flex items-center justify-center">
                      <img src={editIcon.src} alt="Edit" className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListedPages;