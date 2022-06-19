import { TableCell } from "@mui/material";
import React from "react";
import { StyledTableRow } from "./MainTable";

const NewInputsSeconTable = ({ data }) => {
  // console.log(data);
  return (
    <StyledTableRow>
      <TableCell>{data.value}</TableCell>
      <TableCell align="center">{data.date}</TableCell>
      <TableCell align="center">{data.username}</TableCell>
      <TableCell align="center">{data.comment}</TableCell>
    </StyledTableRow>
  );
};

export { NewInputsSeconTable };
