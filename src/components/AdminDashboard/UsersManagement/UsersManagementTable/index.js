"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";
import editIcon from "../../../../../public/assets/images/edit-pencil.svg";

// Function to create data objects for each row
function createData(
  email,
  firstName,
  lastName,
  address,
  phoneNumber,
  birthday,
  openingCode,
  tags,
  emailMarketing,
  source,
  rating,
  lastChanged
) {
  return { email, firstName, lastName, address, phoneNumber, birthday, openingCode, tags, emailMarketing, source, rating, lastChanged };
}

// Sample data for the table
const rows = [
  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
    "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", 
    "28 Feb 2024 at 9.04pm"
  ),
  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
    "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
    "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
    "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
   "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
    "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),  createData(
    "ann@example.com",
    "Ann",
    "Fox",
    "8080 Railroad St.",
    "(217) 555-0113",
    "1990/12/14",
    "NEWUSER",
  "#NEWUSER",
    "Subscribed",
    "Website",
    "4.5", // Example rating
    "28 Feb 2024 at 9.04pm"
  ),
  // Add more rows as needed
];

const UsersManagementTable = () => {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("lastChanged");

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

  // Component to render rating stars
  const RatingStars = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex">
        {Array.from({ length: 5 }, (_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < fullStars ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 15.27L16.18 18l-1.64-7.03L20 6.25l-7.19-.62L10 0 7.19 5.63 0 6.25l5.46 4.72L3.82 18 10 15.27z"
              clipRule="evenodd"
            />
          </svg>
        ))}
        {hasHalfStar && (
          <svg
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 15.27L16.18 18l-1.64-7.03L20 6.25l-7.19-.62L10 0 7.19 5.63 0 6.25l5.46 4.72L3.82 18 10 15.27z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    );
  };

  return (
    <div className="border border-[#EAECF0] rounded-lg overflow-x-auto pb-2">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-[#EAECF0] rounded-lg">
          <thead className="bg-[#FCFCFD] text-[#667085] text-[12px] font-[700] font-Poppins border-b border-[#EAECF0]">
            <tr>
              {[
                { label: "Email", width: "200px" },
                { label: "First Name", width: "150px" },
                { label: "Last Name", width: "150px" },
                { label: "Address", width: "250px" },
                { label: "Phone Number", width: "150px" },
                { label: "Birthday", width: "150px" },
                { label: "Opening Code", width: "150px" },
                { label: "Tags", width: "150px" },
                { label: "Email Marketing", width: "150px" },
                { label: "Source", width: "150px" },
                { label: "Rating", width: "100px" },
                { label: "Last Changed", width: "200px" },
                { label: "Edit", width: "100px" }
              ].map(({ label, width }) => (
                <th
                  key={label}
                  className="cursor-pointer text-left hover:bg-[#F5F5F5] whitespace-nowrap"
                  onClick={() => handleRequestSort(label)}
                  style={{
                    width: width,
                    padding: "12px 24px",
                    position: "relative"
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span>{capitalizeFirstLetter(label)}</span>
                    <Image
                      src={ArrowDownIcon.src}
                      width={16}
                      height={16}
                      alt="Sort icon"
                      className="ml-1" // Add some margin to the left of the icon
                    />
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => (
              <tr key={index} className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]">
                <td className="px-4 py-6" style={{ width: "200px" }}>{row.email}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.firstName}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.lastName}</td>
                <td className="px-4 py-6" style={{ width: "250px" }}>{row.address}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.phoneNumber}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.birthday}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.openingCode}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.tags}</td>
                <td className="px-4 py-6" style={{ width: "150px" }}>
                  <div
                    className={'inline-flex items-center px-2 py-1 bg-[#E9F9EF] border border-[#E9F9EF]'}
                    style={{ borderRadius: '4px' }}
                  >
                    <span className="text-[12px] text-[#1FB356]">{row.emailMarketing}</span>
                  </div>
                </td>
                <td className="px-4 py-6" style={{ width: "150px" }}>{row.source}</td>
                <td className="px-4 py-6" style={{ width: "100px" }}>
                  <RatingStars rating={parseFloat(row.rating)} />
                </td>
                <td className="px-4 py-6" style={{ width: "200px" }}>{row.lastChanged}</td>
                <td className="px-4 py-6" style={{ width: "100px" }}>
                  <Image src={editIcon.src} width={24} height={24} alt="Edit icon" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Helper function to capitalize the first letter of the string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default UsersManagementTable;