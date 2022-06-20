import React, { useMemo } from "react";
import TableCell from "@mui/material/TableCell";
import { StyledTableRow } from "../../service/common";
import { randomID } from "../../service/common";

const ModalTableRow = ({ data, abbr, randomUserData }) => {
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

export { ModalTableRow };
