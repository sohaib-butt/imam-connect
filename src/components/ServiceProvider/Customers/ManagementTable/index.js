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
  createData("28 Dec 2021", "Darlene Robertson", "“I think it’s nice to ha...", "United Kingdom", "View"),
  createData("29 Dec 2021", "Arlene McCoy", "“I think it’s nice to ha...", "Indonesia", "View"),
  createData("30 Dec 2021", "Jane Cooper", "“I think it’s nice to ha...", "USA", "View"),
  createData("01 Jan 2021", "Darrell Steward", "“I think it’s nice to ha...", "Thailand", "View"),
  createData("02 Jan 2021", "Esther Howard", "“I think it’s nice to ha...", "United Kingdom", "View"),
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
                  active={orderBy === "date"}
                  direction={orderBy === "date" ? order : "asc"}
                  onClick={() => handleRequestSort("date")}
                >
                  Date
                </TableSortLabel>
              </TableCell>
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
                  active={orderBy === "feedback"}
                  direction={orderBy === "feedback" ? order : "asc"}
                  onClick={() => handleRequestSort("feedback")}
                >
                  Feedback
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "location"}
                  direction={orderBy === "location" ? order : "asc"}
                  onClick={() => handleRequestSort("location")}
                >
                  Location
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                View
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
                  {row.date}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.customerName}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.feedback}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.location}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  <Image
                    src={purpleEyeIcon.src}
                    width={20}
                    height={20}
                    className="cursor-pointer"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
