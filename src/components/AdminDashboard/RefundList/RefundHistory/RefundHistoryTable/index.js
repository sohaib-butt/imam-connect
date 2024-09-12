"use client";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import ArrowDownIcon from "../../../../../../public/assets/images/arrow-down.svg";

// Function to create data objects for each row
function createData(refundDate, customerName, paymentMethod, refundAmount, refundStatus) {
  return { refundDate, customerName, paymentMethod, refundAmount, refundStatus };
}

// Sample data for the table
const rows = [
  createData("28 Feb 2024 at 9.04pm", "Dianne Russell", "Debit Card", "$700", "Accepted"),
  createData("01 Mar 2024 at 10.15am", "John Doe", "Credit Card", "$150", "Pending"),
  createData("02 Mar 2024 at 11.30am", "Jane Smith", "PayPal", "$200", "Rejected"),
  createData("03 Mar 2024 at 12.45pm", "Alice Johnson", "Bank Transfer", "$180", "Accepted"),
  createData("04 Mar 2024 at 1.00pm", "Bob Brown", "Debit Card", "$210", "Pending"),
  createData("04 Mar 2024 at 1.00pm", "Bob Brown", "Debit Card", "$210", "Pending"),
  createData("04 Mar 2024 at 1.00pm", "Bob Brown", "Debit Card", "$210", "Pending"),
  createData("04 Mar 2024 at 1.00pm", "Bob Brown", "Debit Card", "$210", "Pending"),
  createData("04 Mar 2024 at 1.00pm", "Bob Brown", "Debit Card", "$210", "Pending"),

];

// Status colors
const statusStyles = {
  Accepted: { bgColor: "#ECFDF3", dotColor: "#14BA6D" },
  Pending: { bgColor: "#FFF3E0", dotColor: "#FF9800" },
  Rejected: { bgColor: "#FCE4E4", dotColor: "#F44336" },
};

export default function RefundHistoryTable() {
  const [order, setOrder] = useState("desc"); 
  const [orderBy, setOrderBy] = useState("refundDate");

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
              {["refundDate", "customerName", "paymentMethod", "refundAmount", "refundStatus"].map((header) => (
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
  
            </tr>
          </thead>
          <tbody>
            {sortedRows.map((row, index) => {
              const { bgColor, dotColor } = statusStyles[row.refundStatus] || {};
              return (
                <tr key={index} className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]">
                  <td className="px-6 py-6">{row.refundDate}</td>
                  <td className="px-6 py-6">{row.customerName}</td>
                  <td className="px-6 py-6">{row.paymentMethod}</td>
                  <td className="px-6 py-6">{row.refundAmount}</td>
                  <td className="px-6 py-6">
                    <div
                      className="inline-flex items-center px-2 py-1 rounded-full"
                      style={{ backgroundColor: bgColor }}
                    >
                      <div
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: dotColor }}
                      />
                      <span className="ml-2 text-[12px] text-[#333333]">{row.refundStatus}</span>
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

// Helper function to capitalize the first letter of the string
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

