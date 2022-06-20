import React from "react";
import { StyledTableCell } from "../../service/common";

const EmptyCell = () => {
  return (
    <>
      <StyledTableCell sx={{ opacity: "0.5" }}> empty </StyledTableCell>
      <StyledTableCell sx={{ opacity: "0.5" }}> empty </StyledTableCell>
      <StyledTableCell sx={{ opacity: "0.5" }}> empty </StyledTableCell>
    </>
  );
};

export { EmptyCell };
