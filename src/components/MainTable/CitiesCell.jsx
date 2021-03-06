import React from "react";
import { StyledTableCell } from "../../service/common";

const CitiesCell = ({ year, state, city, getDataValue }) => {
  return Object.keys(state[city].G[year]).map((key, index) => {
    return (
      <StyledTableCell
        className="hover-effect"
        key={Math.random() + index}
        data-id={city + "," + year + "," + key}
        onClick={getDataValue}
      >
        value: {state[city].G[year][key].value}
        <br />
        date: {state[city].G[year][key].dateRelease}
      </StyledTableCell>
    );
  });
};

export { CitiesCell };
