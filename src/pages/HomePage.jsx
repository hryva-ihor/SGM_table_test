import React, { useEffect, useMemo, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { XYZcomponent } from "../components/MainTable/XYZcomponent";
import { YearsCell } from "../components/MainTable/YearsCell";
import { StyledTableCell, StyledTableRow } from "../service/common";
import { CitiesRow } from "../components/MainTable/CitiesRow";
import { Box } from "@mui/system";
import { List, ListItem } from "@mui/material";
export const REGION_DATA = "REGION_DATA";
const HomePage = () => {
  const [dataState, setDataState] = useState({});
  const [state, setState] = useState(data);
  const [modifiedState, setModifiedState] = useState(false);
  useMemo(() => {
    localStorage.removeItem("SecondTableData");
    !localStorage.getItem(REGION_DATA) &&
      localStorage.setItem(REGION_DATA, JSON.stringify(state));
  }, [state]);

  useEffect(() => {
    let storageState = localStorage.getItem(REGION_DATA);
    setDataState(JSON.parse(storageState));
  }, [modifiedState]);
  // The modified state event listener
  window.addEventListener("storage", storage_handler, false);
  function storage_handler() {
    setModifiedState(!modifiedState);
  }
  const getDataFromeTableCell = (e) => {
    let arr = e.target.getAttribute("data-id").split(",");
    localStorage.setItem(
      "SecondTableData",
      JSON.stringify([...arr, dataState[arr[0]].G[arr[1]]])
    );
    window.open(
      "/secondtable",
      "",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=700"
    );
  };

  let setYears = new Set();
  //get unique years
  Object.keys(state).forEach((city) => {
    Object.keys(state[city].G).forEach((year) => {
      setYears.add(year);
    });
  });
  let arrYears = Array.from(setYears);

  //get unique abbreviations
  let setABBR = new Set();
  Object.keys(state).forEach((city) => {
    arrYears.map((year) => {
      state[city].G[year] &&
        Object.keys(state[city].G[year]).forEach((abbr) => {
          setABBR.add(abbr);
        });
    });
  });
  let arrABBR = Array.from(setABBR);
  return (
    <Box
      sx={{ width: "100%" }}
      display="flex"
      alignItems="center"
      flexDirection="column"
    >
      <Paper sx={{ width: 1400 }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell align="center" rowSpan={2}>
                  Regions
                </StyledTableCell>
                {arrYears.sort().map((year) => {
                  return <YearsCell year={year} key={Math.random()} />;
                })}
              </StyledTableRow>
              <StyledTableRow>
                {arrABBR.map(() => {
                  return <XYZcomponent key={Math.random()} arrABBR={arrABBR} />;
                })}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {Object.keys(dataState).map((city) => {
                return (
                  <CitiesRow
                    state={dataState}
                    getDataId={getDataFromeTableCell}
                    arrYears={arrYears.sort()}
                    arrABBR={arrABBR}
                    key={city}
                    city={city}
                  />
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box sx={{ width: 1400 }}>
        <List className="about">
          <ListItem>Thank you for an interesting task)</ListItem>
          <ListItem>
            *by clicking on the cell you get a window with information about the
            cell year, region, value
          </ListItem>
          <ListItem>
            *after adding data, a new row with new data appears, updating the
            cell in the main table with new data
          </ListItem>
          <ListItem>
            *local storage is used to transfer data to the modal window
          </ListItem>
          <ListItem>
            *communication between two windows passes through local storage
          </ListItem>
          <ListItem>
            *trigger to update the data in the main table eventlistener on
            localstorage by key
          </ListItem>
          <ListItem>
            *to generate users and comments I created an array with mockapi.io
          </ListItem>
          <ListItem>*used Axios to work with the API</ListItem>
          <ListItem>
            P.S. I see that the logic is a bit confusing and I understand that
            need to refactor it, but the problem is solved
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export { HomePage };

const data = {
  Kyivska: {
    G: {
      2017: {
        XX: {
          value: 150000,
          dateRelease: "2017-12-31",
        },
        YY: {
          value: 100000,
          dateRelease: "2017-12-31",
        },
        ZZ: {
          value: 77,
          dateRelease: "2017-12-31",
        },
      },
      2018: {
        XX: {
          value: 160000,
          dateRelease: "2018-12-31",
        },
        YY: {
          value: 110000,
          dateRelease: "2018-12-31",
        },
        ZZ: {
          value: 72,
          dateRelease: "2018-12-31",
        },
      },
      2019: {
        XX: {
          value: 130000,
          dateRelease: "2019-12-31",
        },
        YY: {
          value: 85000,
          dateRelease: "2019-12-31",
        },
        ZZ: {
          value: 72,
          dateRelease: "2019-12-31",
        },
      },
    },
  },
  Odeska: {
    G: {
      2017: {
        XX: {
          value: 10000,
          dateRelease: "2017-12-31",
        },
        YY: {
          value: 5000,
          dateRelease: "2017-12-31",
        },
        ZZ: {
          value: 45,
          dateRelease: "2017-12-31",
        },
      },
      2019: {
        XX: {
          value: 15000,
          dateRelease: "2019-12-01",
        },
        YY: {
          value: 0,
          dateRelease: "2022-02-18",
        },
        ZZ: {
          value: 0,
          dateRelease: "2022-02-18",
        },
      },
    },
  },
  Lvivska: {
    G: {
      2017: {
        XX: {
          value: 640000,
          dateRelease: "2017-12-31",
        },
        YY: {
          value: 510000,
          dateRelease: "2017-08-01",
        },
        ZZ: {
          value: 67,
          dateRelease: "2017-08-01",
        },
      },
      2018: {
        XX: {
          value: 740000,
          dateRelease: "2018-12-31",
        },
        YY: {
          value: 530000,
          dateRelease: "2018-08-01",
        },
        ZZ: {
          value: 61,
          dateRelease: "2018-08-01",
        },
      },
    },
  },
};
