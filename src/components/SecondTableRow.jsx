import React, { useMemo } from "react";
import TableCell from "@mui/material/TableCell";
import { randomID } from "../service/common";
import { StyledTableRow } from "../service/common";
const SecondTableRow = ({ data, abbr, randomUserData }) => {
  const ID = useMemo(() => randomID(1, 100), [data]);

  return (
    <>
      <StyledTableRow>
        <TableCell>
          {abbr}: {data[abbr].value}
        </TableCell>
        <TableCell align="center">{data[abbr].dateRelease}</TableCell>
        <TableCell align="center">{randomUserData[ID].username}</TableCell>
        <TableCell align="center">{randomUserData[ID].comment}</TableCell>
      </StyledTableRow>
    </>
  );
};

export { SecondTableRow };
