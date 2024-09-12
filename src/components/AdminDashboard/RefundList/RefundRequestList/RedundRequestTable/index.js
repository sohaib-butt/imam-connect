
"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import ArrowDownIcon from "../../../../../../public/assets/images/arrow-down.svg";
import ContactIcon from "../../../../../../public/assets/images/phone.svg"; // Add path to your contact icon


// Function to create data objects for each row
function createData(
  customerName,
  orderNumber,
  refundReason,
  requestDate,
  contactSP,
  actions
) {
  return {
    customerName,
    orderNumber,
    refundReason,
    requestDate,
    contactSP,
    actions,
  };
}

// Sample data for the table
const rows = [
  createData(
    "Dianne Russell",
    "#12812918381921",
    "Not satisfied",
    "28 Feb 2024 at 9.04pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "John Doe",
    "#12812918381922",
    "Late delivery",
    "01 Mar 2024 at 10.15am",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Jane Smith",
    "#12812918381923",
    "Wrong item",
    "02 Mar 2024 at 11.30am",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Alice Johnson",
    "#12812918381924",
    "Defective product",
    "03 Mar 2024 at 12.45pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
  createData(
    "Bob Brown",
    "#12812918381925",
    "Not as described",
    "04 Mar 2024 at 1.00pm",
    "Contact SP",
    "Actions"
  ),
];

export default function RefundRequestTable() {
  const [order, setOrder] = useState("desc");
  const [orderBy, setOrderBy] = useState("requestDate");

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
              {[
                "Customer Name",
                "Order Number",
                "refund Reason",
                "request date",
                "Contact SP",
                "Actions",
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
            {sortedRows.map((row, index) => (
              <tr
                key={index}
                className="text-[#667085] text-[14px] font-normal border-b border-[#EAECF0]"
              >
                <td className="px-6 py-6">{row.customerName}</td>
                <td className="px-6 py-6">{row.orderNumber}</td>
                <td className="px-6 py-6">{row.refundReason}</td>
                <td className="px-6 py-6">{row.requestDate}</td>
                <td className="px-6 py-6">
                <button className="bg-[#00BAC2] w-[134px] h-[40px] text-white font-bold py-2 px-4 rounded flex items-center justify-center space-x-2">
                    <Image
                      src={ContactIcon.src}
                      width={16}
                      height={16}
                      alt="Contact icon"
                    />
                    <span>{row.contactSP}</span>
                  </button>
                </td>
                <td className="px-6 py-6 flex space-x-2">
                  <button className="bg-[#22C55E]  h-[40px]  text-white font-bold py-2 px-4 rounded">
                    Accept
                  </button>
                  <button className="bg-white h-[40px]  text-[#F43F5E] font-bold py-2 px-4 border border-[#F43F5E] rounded">
                    Reject
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
