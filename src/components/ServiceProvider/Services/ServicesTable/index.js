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
import tableEditIcon from "../../../../../public/assets/images/table-editIcon.svg";
import acceptedBadge from "../../../../../public/assets/images/accepted-badge.svg";
import awaitingBadge from "../../../../../public/assets/images/awaiting-badge.svg";
import rejectedBadge from "../../../../../public/assets/images/rejected-badge.svg";
import { useRouter } from "next/navigation";

// Function to create data objects for each row
function createData(serviceName, price, category, status, edit) {
  return {
    serviceName,
    price,
    category,
    status,
    edit,
  };
}

// Sample data for the table
const rows = [
  createData("Physcologist", "$10,000", "Nikah", "Accepted", "Edit"),
  createData("Marriage Counselling", "$10,000", "Nikah", "Rejected", "Edit"),
  createData("Physcologist", "$10,000", "Nikah", "Rejected", "Edit"),
  createData("Life Coaching", "$10,000", "Nikah", "Awaiting", "Edit"),
  createData("Physcologist", "$10,000", "Nikah", "Accepted", "Edit"),
];

export default function index() {
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
                  active={orderBy === "serviceName"}
                  direction={orderBy === "serviceName" ? order : "asc"}
                  onClick={() => handleRequestSort("serviceName")}
                >
                  Service Name
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
                  active={orderBy === "category"}
                  direction={orderBy === "category" ? order : "asc"}
                  onClick={() => handleRequestSort("category")}
                >
                  Category
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
                Edit
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedRows.map((row) => (
              <TableRow
                key={row.price}
                className="font-poppins text-[#667085] text-[14px] font-normal"
              >
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.serviceName}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.price}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.category}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  {row.status == "Accepted" ? (
                    <Image src={acceptedBadge.src} width={87} height={22} />
                  ) : row.status == "Awaiting" ? (
                    <Image src={awaitingBadge.src} width={87} height={22} />
                  ) : (
                    <Image src={rejectedBadge.src} width={87} height={22} />
                  )}
                </TableCell>
                <TableCell className="text-[#667085] border-[#EAECF0]">
                  <Image
                    src={tableEditIcon.src}
                    width={15.58}
                    height={10}
                    className="cursor-pointer"
                    onClick={() => router.push("/serviceprovider/services/editservice")}
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
