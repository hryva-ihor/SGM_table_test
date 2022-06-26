import React from "react";
import { StyledTableCell } from "../../service/common";

const EmptyCell = ({ arrABBR }) => {
  return (
    <>
      {arrABBR.map(() => {
        return <StyledTableCell key={Math.random()}> empty </StyledTableCell>;
      })}
    </>
  );
};

export { EmptyCell };
