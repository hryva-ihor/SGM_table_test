import { TableHead } from "@mui/material";
import React from "react";
import { StyledTableCell, StyledTableRow } from "../../service/common";

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
        <StyledTableCell>Value</StyledTableCell>
        <StyledTableCell align="center">Date release</StyledTableCell>
        <StyledTableCell align="center">User</StyledTableCell>
        <StyledTableCell align="center">Comment</StyledTableCell>
      </StyledTableRow>
    </TableHead>
  );
};

export { ModalTableHead };
