import React from "react";
import { StyledTableCell } from "./MainTable";

const YearsCell = ({ year }) => {
  return (
    <>
      <StyledTableCell align="center" colSpan={3}>
        {year}
      </StyledTableCell>
    </>
  );
};

export { YearsCell };
