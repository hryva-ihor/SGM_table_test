import React, { useMemo } from "react";
import { StyledTableRow, StyledTableCell } from "../../service/common";
import { randomID } from "../../service/common";

const ModalTableRow = ({ data, abbr, randomUserData }) => {
  const ID = useMemo(() => randomID(1, 100), [data]);

  return (
    <>
      <StyledTableRow>
        <StyledTableCell>
          {abbr}: {data[abbr].value}
        </StyledTableCell>
        <StyledTableCell align="center">
          {data[abbr].dateRelease}
        </StyledTableCell>
        <StyledTableCell align="center">
          {randomUserData[ID].username}
        </StyledTableCell>
        <StyledTableCell align="center">
          {randomUserData[ID].comment}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export { ModalTableRow };
