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
import purpleEyeIcon from "../../../../../public/assets/images/purple-eye.svg";

// Function to create data objects for each row
function createData(customerName, requestedOn, action) {
  return {
    customerName,
    requestedOn,
    action,
  };
}

// Sample data for the table
const rows = [
  createData(
    "Darlene Robertson",
    "30 Mins of Psychology Mind - To Keep You Better",
    "Action"
  ),
  createData(
    "Arlene McCoy",
    "30 Mins of Psychology Mind - To Keep You Better",
    "Action"
  ),
  createData(
    "Jane Cooper",
    "30 Mins of Psychology Mind - To Keep You Better",
    "Action"
  ),
  createData(
    "Darrell Steward",
    "30 Mins of Psychology Mind - To Keep You Better",
    "Action"
  ),
  createData(
    "Esther Howard",
    "30 Mins of Psychology Mind - To Keep You Better",
    "Action"
  ),
];

export default function index() {
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
                  active={orderBy === "customerName"}
                  direction={orderBy === "customerName" ? order : "asc"}
                  onClick={() => handleRequestSort("customerName")}
                >
                  Customer Name
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "requestedOn"}
                  direction={orderBy === "requestedOn" ? order : "asc"}
                  onClick={() => handleRequestSort("requestedOn")}
                >
                  Requested On
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow
                key={row.customerName}
                className="font-poppins text-[#667085] text-[14px] font-normal"
              >
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.customerName}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.requestedOn}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  <div className="flex space-x-2">
                    <button className="bg-[#22C55E] w-[67px] h-[35px] text-white font-bold rounded-[8px]">
                      Accept
                    </button>
                    <button className="bg-white w-[67px] h-[35px] text-[#F43F5E] font-bold border border-[#F43F5E] rounded">
                      Reject
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
