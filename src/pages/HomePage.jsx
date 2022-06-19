import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { state } from "../state/state";
import { CitiesRow } from "../components/CitiesRow";
import { XYZcomponent } from "../components/XYZcomponent";
import { YearsCell } from "../components/YearsCell";
import { StyledTableCell, StyledTableRow } from "../service/common";

const HomePage = () => {
  const [dataState, setDataState] = useState({});
  useEffect(() => {
    setDataState(state);
  }, []);

  const getDataFromeTableCell = (e) => {
    let arr = e.target.getAttribute("data-id").split(",");
    localStorage.setItem(
      "SecondTableData",
      JSON.stringify([...arr, dataState[arr[0]].G[arr[1]]])
    );
    window.open(
      "/secondtable",
      "",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=400,left=400,width=800,height=700"
    );
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
                    getDataId={getDataFromeTableCell}
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

export { HomePage };
