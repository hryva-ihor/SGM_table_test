import React, { useEffect, useState } from "react";
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
      "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=1000,height=700"
    );
  };
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
      <Box sx={{ width: 1400 }}>
        <List className="about">
          <ListItem>Thank you for an interesting task)</ListItem>
          <ListItem>
            *by clicking on the cell you get a window with information about the
            cell year, region, value
          </ListItem>
          <ListItem>
            *to generate users and comments I created an array with mockapi.io
          </ListItem>
          <ListItem>*used Axios to work with the API</ListItem>
          <ListItem>
            *there were problems working on the object that was added to the
            tas, but it seems I did it
          </ListItem>
          <ListItem>
            *local storage is used to transfer data to the modal window
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export { HomePage };

const state = {
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
