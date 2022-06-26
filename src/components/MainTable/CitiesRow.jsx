import React from "react";

import { EmptyCell } from "./EmptyCell";
import { StyledTableRow, StyledTableCell } from "../../service/common";
import { CitiesCell } from "./CitiesCell";

const CitiesRow = ({ state, city, getDataId, arrABBR, arrYears }) => {
  const getDataValue = (e) => {
    getDataId(e);
  };
  return (
    <StyledTableRow>
      <StyledTableCell>{city}</StyledTableCell>
      {arrYears.map((year) => {
        return Object.keys(state[city].G).includes(year) ? (
          <CitiesCell
            key={Math.random()}
            year={year}
            state={state}
            city={city}
            getDataValue={getDataValue}
          />
        ) : (
          <EmptyCell arrABBR={arrABBR} key={Math.random()} />
        );
      })}
    </StyledTableRow>
  );
};

export { CitiesRow };
