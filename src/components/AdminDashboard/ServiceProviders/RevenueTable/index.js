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
function createData(dateJoined, name, service, location, price, status) {
  return {
    dateJoined,
    name,
    service,
    location,
    price,
    status
  };
}

// Sample data for the table
const rows = [
  createData("2024-01-15", "John Doe", "Service A", "New York", "$120", "Active"),
  createData("2024-03-22", "Jane Smith", "Service B", "Los Angeles", "$150", "Inactive"),
  createData("2024-05-30", "Alice Johnson", "Service C", "Chicago", "$200", "Active"),
  createData("2024-07-18", "Bob Brown", "Service A", "Houston", "$180", "Pending"),
  createData("2024-09-01", "Charlie Davis", "Service D", "Phoenix", "$210", "Active"),
  // Additional rows...
];

export default function RevenueTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("dateJoined");

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
    <div style={{ width: '100%', overflowX: 'auto' }}>
      <TableContainer
        sx={{ maxHeight: 440, overflowX: "auto", overflowY: "auto" }}
        className="rounded-lg border border-[#EAECF0]"
        style={{ width: '100%' }} // Ensure it takes full width of its parent
      >
        <Table
          aria-label="sticky table"
          sx={{ minWidth: 300 }}
        >
          <TableHead className="bg-[#FCFCFD]">
            <TableRow>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "dateJoined"}
                  direction={orderBy === "dateJoined" ? order : "asc"}
                  onClick={() => handleRequestSort("dateJoined")}
                >
                  Date Joined
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "name"}
                  direction={orderBy === "name" ? order : "asc"}
                  onClick={() => handleRequestSort("name")}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "service"}
                  direction={orderBy === "service" ? order : "asc"}
                  onClick={() => handleRequestSort("service")}
                >
                  Service
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
                <TableSortLabel
                  active={orderBy === "price"}
                  direction={orderBy === "price" ? order : "asc"}
                  onClick={() => handleRequestSort("price")}
                >
                  Price
                </TableSortLabel>
              </TableCell>
              <TableCell className="font-bold text-[#667085] text-[12px] border-[#EAECF0]">
                <TableSortLabel
                  active={orderBy === "status"}
                  direction={orderBy === "status" ? order : "asc"}
                  onClick={() => handleRequestSort("status")}
                >
                  Status
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
                key={row.name}
                className="font-poppins text-[#667085] text-[14px] font-normal"
              >
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.dateJoined}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.name}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.service}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.location}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.price}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.status}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  <Image src={purpleEyeIcon.src} width={15.58} height={10} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}