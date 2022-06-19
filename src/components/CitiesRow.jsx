import React from "react";
import { CitiesCell } from "./CitiesCell";
import { EmptyCell } from "./EmptyCell";
import { StyledTableRow, StyledTableCell } from "../service/common";

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

// Object.keys(state[city].G).includes(2017) ? (
//   <CitiesCell
//     key={Math.random() + index}
//     year={2017}
//     state={state}
//     city={city}
//     getDataValue={getDataValue}
//   />
// ) : (
//   <StyledTableCell></StyledTableCell>
// );
// Object.keys(state[city].G).includes(2018) ? (
//   <CitiesCell
//     key={Math.random() + index}
//     year={2018}
//     state={state}
//     city={city}
//     getDataValue={getDataValue}
//   />
// ) : (
//   <StyledTableCell></StyledTableCell>
// );
// Object.keys(state[city].G).includes(2019) ? (
//   <CitiesCell
//     key={Math.random() + index}
//     year={2019}
//     state={state}
//     city={city}
//     getDataValue={getDataValue}
//   />
// ) : (
//   <StyledTableCell></StyledTableCell>
// );
// console.log(Object.keys(state[city].G));
// const cellObj = () => {
//   return Object.keys(state[city].G).map((year, index) => {
//     // console.log(year);
//     return (
//       <CitiesCell
//         key={Math.random() + index}
//         year={year}
//         state={state}
//         city={city}
//         getDataValue={getDataValue}
//       />
//     );
//   });
// };
// const yearArr = [2017, 2018, 2019];
// const checkYear = () => {
//   Object.keys(state[city].G).filter((years) => {
//     years.includes(2017) ? cellObj() : EmptyCell;
//     years.includes(2018) ? cellObj() : EmptyCell;
//     years.includes(2019) ? cellObj() : EmptyCell;
//   });
// };
// console.log(Object.keys(state[city].G));
// <StyledTableRow>
//   <StyledTableCell>{city}</StyledTableCell>
//   {Object.keys(state[city].G).filter((years) => {
//     console.log(Object.keys(state[city].G));
//     return (
//       Object.keys(state[city].G).includes("2017")
//         ? console.log(true)
//         : console.log(false),
//       Object.keys(state[city].G).includes("2018")
//         ? cellObj()
//         : console.log(false),
//       Object.keys(state[city].G).includes("2019")
//         ? cellObj()
//         : console.log(false)
//     );
//   })}
// </StyledTableRow>
