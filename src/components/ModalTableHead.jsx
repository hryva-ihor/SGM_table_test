import { TableCell, TableHead } from "@mui/material";
import React from "react";
import { StyledTableCell, StyledTableRow } from "../service/common";

const ModalTableHead = ({ City, Year }) => {
  return (
    <TableHead>
      <StyledTableRow>
        <StyledTableCell>Region</StyledTableCell>
        <StyledTableCell colSpan={4} align="center">
          {City}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell>Year</StyledTableCell>
        <StyledTableCell colSpan={4} align="center">
          {Year}
        </StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <TableCell>Value</TableCell>
        <TableCell align="center">Date release</TableCell>
        <TableCell align="center">User</TableCell>
        <TableCell align="center">Comment</TableCell>
      </StyledTableRow>
    </TableHead>
  );
};

export { ModalTableHead };
