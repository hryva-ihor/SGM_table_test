import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { state } from "../state/state";
import { CitiesRow } from "./CitiesRow";

import { XYZcomponent } from "./XYZcomponent";
import { YearsCell } from "./YearsCell";

const MainTable = () => {
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    setDataState(state);
  }, []);

  const getDataId = (e) => {
    let arr = e.target.getAttribute("data-id").split(",");
    localStorage.setItem(
      "SecondTableData",
      JSON.stringify([...arr, dataState[arr[0]].G[arr[1]]])
    );
    window.open("/secondtable");
  };
  return (
    <>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center" rowSpan={2}>
                  Regions
                </StyledTableCell>
                {Object.keys(state.Kyivska.G).map((year) => {
                  return <YearsCell year={year} key={Math.random()} />;
                })}
              </StyledTableRow>
              <StyledTableRow>
                {Object.keys(state).map((city) => {
                  return <XYZcomponent key={city} />;
                })}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {Object.keys(dataState).map((city) => {
                return (
                  <CitiesRow
                    state={dataState}
                    getDataId={getDataId}
                    key={city}
                    city={city}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export { MainTable };

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    border: "1px solid white",
    borderCollapse: "collapse",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    whiteSpace: "nowrap",
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
}));
