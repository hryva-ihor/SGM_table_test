import React from "react";
import { StyledTableRow, StyledTableCell } from "../../service/common";

const NewInputsSeconTable = ({ data, ABBR }) => {
  return (
    <StyledTableRow>
      <StyledTableCell>
        {ABBR}: {data.value}
      </StyledTableCell>
      <StyledTableCell align="center">{data.date}</StyledTableCell>
      <StyledTableCell align="center">{data.username}</StyledTableCell>
      <StyledTableCell align="center">{data.comment}</StyledTableCell>
    </StyledTableRow>
  );
};

export { NewInputsSeconTable };
