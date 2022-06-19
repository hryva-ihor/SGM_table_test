import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableHead,
  TableCell,
  TableContainer,
  Table,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { SecondTableRow } from "./ModalTableRow";
import { Box } from "@mui/material";
import { NewInputsSeconTable } from "./NewInputsSeconTable";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { randomID, StyledTableRow } from "../service/common";
import { getRandomUserData } from "../service/index";
import { ModalTableHead } from "./ModalTableHead";

const ModalTable = () => {
  let date = new Date();
  const [newTableData, setNewTableData] = useState([]);
  const [randomUserData, setRandomUserData] = useState([]);
  const [newInputsValue, setNewInputsValue] = useState([]);
  const [valueNum, setValueNum] = useState(randomID(0, 100000));
  const [dataRelease, setDataRelease] = useState(date);
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [userNameArr, setUserNameArr] = useState([]);
  let retrievedObject = localStorage.getItem("SecondTableData");
  const filterNameFromUserData = (data) => {
    let arr = data.map((user) => {
      return { label: user.username };
    });
    setUserNameArr(arr);
  };
  useEffect(() => {
    getRandomUserData().then(({ data }) => {
      setNewTableData(JSON.parse(retrievedObject));
      setRandomUserData(data);
      setUserName(data[randomID(1, 100)].username);
      setComment(data[randomID(1, 100)].comment);
      filterNameFromUserData(data);
    });
  }, [retrievedObject]);
  const handleChange = (newValue) => {
    setDataRelease(newValue);
  };
  const [City, Year, , Obj] = newTableData; //ABRR is (XX,YY,ZZ)
  const handleInputsValue = (e) => {
    switch (e.target.id) {
      case "valueNum":
        setValueNum(e.target.value);
        break;
      case "comment":
        setComment(e.target.value);
        break;

      default:
        break;
    }
  };
  const handleAddTableRow = () => {
    if (valueNum && dataRelease && userName && comment) {
      let newInputsData = {
        value: valueNum,
        date: dataRelease.toLocaleDateString(),
        username: userName,
        comment: comment,
      };
      setNewInputsValue([...newInputsValue, newInputsData]);
      setValueNum(randomID(0, 100000));
      setDataRelease(date);
      setUserName(randomUserData[randomID(1, 100)].username);
      setComment(randomUserData[randomID(1, 100)].comment);
    } else {
      return false;
    }
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper sx={{ maxWidth: "800px" }}>
        <TableContainer>
          <Table>
            <ModalTableHead City={City} Year={Year} />
            <TableBody>
              {Obj &&
                Object.keys(Obj).map((abbr) => {
                  return (
                    <SecondTableRow
                      data={Obj}
                      key={abbr}
                      abbr={abbr}
                      randomUserData={randomUserData}
                    />
                  );
                })}
              {newInputsValue.map((obj, index) => {
                return <NewInputsSeconTable key={index} data={obj} />;
              })}
              <StyledTableRow>
                <TableCell>
                  <TextField
                    onChange={(e) => {
                      handleInputsValue(e);
                    }}
                    error={!valueNum}
                    value={valueNum}
                    id="valueNum"
                    label="Value"
                    variant="standard"
                    helperText={!valueNum ? `empty` : ""}
                  />
                </TableCell>
                <TableCell align="center">
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={dataRelease}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </TableCell>
                <TableCell align="center">
                  <Autocomplete
                    id="userName"
                    value={userName}
                    onInputChange={(e, newInputValue) => {
                      setUserName(newInputValue);
                    }}
                    options={userNameArr}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="User name" />
                    )}
                  />
                </TableCell>
                <TableCell align="center">
                  <TextField
                    error={!comment}
                    helperText={!comment ? `empty` : ""}
                    onChange={(e) => {
                      handleInputsValue(e);
                    }}
                    value={comment}
                    id="comment"
                    label="Comment"
                    variant="standard"
                  />
                </TableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={() => {
              handleAddTableRow();
            }}
            sx={{ m: 2 }}
            variant="contained"
          >
            Add
          </Button>
          <Button
            sx={{ m: 2 }}
            variant="contained"
            onClick={() => {
              window.close();
            }}
          >
            Close
          </Button>
        </Box>
      </Paper>
    </LocalizationProvider>
  );
};
export { ModalTable };
