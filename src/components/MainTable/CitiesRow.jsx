import React from "react";

import { EmptyCell } from "./EmptyCell";
import { StyledTableRow, StyledTableCell } from "../../service/common";
import { CitiesCell } from "./CitiesCell";

const CitiesRow = ({ state, city, getDataId }) => {
  const getDataValue = (e) => {
    getDataId(e);
  };
  return (
    <StyledTableRow>
      <StyledTableCell>{city}</StyledTableCell>
      {Object.keys(state[city].G).includes("2017") ? (
        <CitiesCell
          key={Math.random()}
          year={2017}
          state={state}
          city={city}
          getDataValue={getDataValue}
        />
      ) : (
        <EmptyCell key={Math.random()} />
      )}
      {Object.keys(state[city].G).includes("2018") ? (
        <CitiesCell
          key={Math.random()}
          year={2018}
          state={state}
          city={city}
          getDataValue={getDataValue}
        />
      ) : (
        <EmptyCell key={Math.random()} />
      )}
      {Object.keys(state[city].G).includes("2019") ? (
        <CitiesCell
          key={Math.random()}
          year={2019}
          state={state}
          city={city}
          getDataValue={getDataValue}
        />
      ) : (
        <EmptyCell key={Math.random()} />
      )}
    </StyledTableRow>
  );
};

export { CitiesRow };
