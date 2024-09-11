"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import rejectedBadge from "../../../../../public/assets/images/rejected-badge.svg";
import completedBadge from "../../../../../public/assets/images/completed-badge.svg";
import pendingBadge from "../../../../../public/assets/images/pending-badge.svg";
import { useRouter } from "next/navigation";
import ArrowDownIcon from "../../../../../public/assets/images/arrow-down.svg";
// Function to create data objects for each row
function createData(customerName, servicePaid, sessionStatus) {
  return {
    customerName,
    servicePaid,
    sessionStatus,
  };
}

// Sample data for the table
const rows = [
  createData("Dianne Russell", "$10,000", "Completed"),
  createData("Arlene McCoy", "$10,000", "Pending"),
  createData("Robert Fox", "$10,000", "Rejected"),
  createData("Jane Cooper", "$10,000", "Pending"),
  createData("Esther Howard", "$10,000", "Completed"),
];

export default function index({ setDetailModal }) {
  const router = useRouter();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("serviceName");

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
              {[
                "Customer Name",
                "Service Paid",
                "Session Status",
              ].map((header) => (
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
                  className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0] cursor-pointer"
                  onClick={() => setDetailModal(true)}
                >
                  <td className="px-6 py-6">{row.customerName}</td>
                  <td className="px-6 py-6">{row.servicePaid}</td>
                  <td className="px-6 py-6">
                    {row.sessionStatus == "Completed" ? (
                      <Image src={completedBadge.src} width={87} height={22} />
                    ) : row.status == "Pending" ? (
                      <Image src={pendingBadge.src} width={87} height={22} />
                    ) : (
                      <Image src={rejectedBadge.src} width={87} height={22} />
                    )}
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
