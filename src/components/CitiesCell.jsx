import React from "react";
import { StyledTableCell } from "./MainTable";

const CitiesCell = ({ year, state, city, getDataValue }) => {
  // const yearArr = [2017, 2018, 2019];
  // console.log(Object.keys(state[city].G));
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
