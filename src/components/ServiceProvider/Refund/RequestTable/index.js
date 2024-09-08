"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import phoneIcon from "../../../../../public/assets/images/phone-icon.svg";
import styles from "../../../../styles/homepage.module.scss"

// Function to create data objects for each row
function createData(requestedDate, orderNumber, refundReason, contact) {
  return {
    requestedDate,
    orderNumber,
    refundReason,
    contact,
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

export default function index() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("requestedDate");

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
    <div style={{ width: "100%", overflowX: "auto" }}>
      <TableContainer
        sx={{ maxHeight: 440, overflowX: "auto", overflowY: "auto" }}
        className="rounded-lg border border-[#EAECF0]"
        style={{ width: "100%" }} // Ensure it takes full width of its parent
      >
        <Table aria-label="sticky table" sx={{ minWidth: 300 }}>
          <TableHead className="bg-[#FCFCFD]">
            <TableRow>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "requestedDate"}
                  direction={orderBy === "requestedDate" ? order : "asc"}
                  onClick={() => handleRequestSort("requestedDate")}
                >
                  Requested Date
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "orderNumber"}
                  direction={orderBy === "orderNumber" ? order : "asc"}
                  onClick={() => handleRequestSort("orderNumber")}
                >
                  Order Number
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "refundReason"}
                  direction={orderBy === "refundReason" ? order : "asc"}
                  onClick={() => handleRequestSort("refundReason")}
                >
                  Refund Reason
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "contact"}
                  direction={orderBy === "contact" ? order : "asc"}
                  onClick={() => handleRequestSort("contact")}
                >
                  Contact SP
                </TableSortLabel>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow
                key={row.orderNumber}
                className="font-poppins text-[#667085] text-[14px] font-normal"
              >
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.requestedDate}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.orderNumber}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.refundReason}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  <div className="w-full">
                    <button
                      type="button"
                      className={`${styles.primary_button} !font-[700] flex justify-center items-center gap-2 px-1 !h-[48px] !text-[14px]`}
                    >
                      <Image
                        src={phoneIcon.src}
                        alt="Exit"
                        width={16}
                        height={16}
                      />
                      Contact admin
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
