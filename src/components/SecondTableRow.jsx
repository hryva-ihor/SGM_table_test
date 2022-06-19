import React, { useCallback, useEffect, useMemo, useState } from "react";
import TableCell from "@mui/material/TableCell";
import { StyledTableRow } from "./MainTable";

const SecondTableRow = ({ data, abbr, randomUserData }) => {
  const [rowData, setRowData] = useState(data);
  const [rowABBR, setRowABBR] = useState(abbr);
  const [rowRandomUserData, setRowRandomUserData] = useState(randomUserData);
  function randomID() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1);
  }
  const ID = useMemo(() => randomID(), [data]);
  // useMemo(() => {
  //   setRowData(data);
  //   setRowABBR(abbr);
  //   setRowRandomUserData(randomUserData);
  // }, [data, abbr, randomUserData]);

  return (
    <>
      <StyledTableRow>
        <TableCell>
          {rowABBR}: {rowData[rowABBR].value}
        </TableCell>
        <TableCell align="center">{rowData[rowABBR].dateRelease}</TableCell>
        <TableCell align="center">{rowRandomUserData[ID].username}</TableCell>
        <TableCell align="center">{rowRandomUserData[ID].comment}</TableCell>
      </StyledTableRow>
    </>
  );
};

export { SecondTableRow };
