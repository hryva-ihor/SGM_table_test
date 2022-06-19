import { TableCell } from "@mui/material";
import React from "react";
import { StyledTableRow } from "../service/common";

const NewInputsSeconTable = ({ data }) => {
  // console.log(data);

  return (
    <StyledTableRow>
      <TableCell>new value: {data.value}</TableCell>
      <TableCell align="center">{data.date}</TableCell>
      <TableCell align="center">{data.username}</TableCell>
      <TableCell align="center">{data.comment}</TableCell>
    </StyledTableRow>
  );
};

export { NewInputsSeconTable };
