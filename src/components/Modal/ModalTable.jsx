import React, { useEffect, useState } from "react";
import {
  TableBody,
  TableContainer,
  Table,
  Button,
  TextField,
  Autocomplete,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {
  randomID,
  StyledTableRow,
  StyledTableCell,
} from "../../service/common";
import { getRandomUserData } from "../../service/index";
import { ModalTableHead } from "./ModalTableHead";
import { SimpleBackdrop } from "../Loader";
import { REGION_DATA } from "../../pages/HomePage";
import { NewInputsSeconTable } from "./NewInputsModal";

const ModalTable = () => {
  let date = new Date();
  const [newTableData, setNewTableData] = useState([]);
  const [valueNum, setValueNum] = useState(Number);
  const [NewDataRelease, setNewDataRelease] = useState("");
  const [userName, setUserName] = useState("");
  const [comment, setComment] = useState("");
  const [userNameArr, setUserNameArr] = useState([]);
  const [openLoader, setOpenLoader] = useState(false);
  const [storageState, setStorageState] = useState({});
  const [newInputsValue, setNewInputsValue] = useState([]);
  console.log(valueNum);
  const [retrievedObject, setRetrievedObject] = useState(
    localStorage.getItem("SecondTableData")
  );
  const [localStorageState, setLocalStorageState] = useState(
    localStorage.getItem(REGION_DATA)
  );
  const filterNameFromUserData = (data) => {
    let arr = data.map((user) => {
      return { label: user.username };
    });
    setUserNameArr(arr);
  };
  useEffect(() => {
    setOpenLoader(true);
    getRandomUserData()
      .then(({ data }) => {
        setOpenLoader(false);
        setNewTableData(JSON.parse(retrievedObject));
        setStorageState(JSON.parse(localStorageState));
        setUserName(data[randomID(1, 100)].username);
        setComment(data[randomID(1, 100)].comment);
        setValueNum(randomID(0, 100000));
        filterNameFromUserData(data);
        setNewDataRelease(date);
      })
      .catch((error) => {
        setOpenLoader(false);
        alert(error.message);
      });
  }, [retrievedObject, localStorageState]);
  const handleChange = (newValue) => {
    setNewDataRelease(newValue);
  };
  useEffect(() => {
    getRandomUserData().then(({ data }) => {
      let dataFromMainTable = JSON.parse(retrievedObject);
      let newInputsData = {
        value: dataFromMainTable[3][dataFromMainTable[2]].value,
        date: dataFromMainTable[3][dataFromMainTable[2]].dateRelease,
        username: data[randomID(1, 100)].username,
        comment: data[randomID(1, 100)].comment,
      };
      setNewInputsValue([...newInputsValue, newInputsData]);
    });
  }, []);

  const [City, Year, ABBR, Obj] = newTableData; //ABRR is (XX,YY,ZZ)
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
  const handleAdd = () => {
    if (valueNum && NewDataRelease && userName && comment) {
      let newInputsData = {
        value: valueNum,
        date: NewDataRelease.toLocaleDateString(),
        username: userName,
        comment: comment,
      };
      setNewInputsValue([...newInputsValue, newInputsData]);
    }
    let newStorageState = { ...storageState };
    newStorageState[newTableData[0]].G[newTableData[1]][newTableData[2]].value =
      valueNum;
    newStorageState[newTableData[0]].G[newTableData[1]][
      newTableData[2]
    ].dateRelease = NewDataRelease.toLocaleDateString().replaceAll(".", "-");
    let addedTableData = [...newTableData];
    addedTableData[3][addedTableData[2]].value = valueNum;
    addedTableData[3][addedTableData[2]].dateRelease =
      NewDataRelease.toLocaleDateString().replaceAll(".", "-");
    localStorage.setItem("SecondTableData", JSON.stringify(addedTableData));
    localStorage.setItem(REGION_DATA, JSON.stringify(newStorageState));
    setRetrievedObject(localStorage.getItem("SecondTableData"));
    setLocalStorageState(localStorage.getItem(REGION_DATA));
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Paper>
        <TableContainer>
          <Table>
            <ModalTableHead City={City} Year={Year} />
            <TableBody>
              {newInputsValue.map((obj, index) => {
                return (
                  <NewInputsSeconTable key={index} ABBR={ABBR} data={obj} />
                );
              })}
              <StyledTableRow>
                <StyledTableCell>
                  <TextField
                    onChange={(e) => {
                      handleInputsValue(e);
                    }}
                    error={!valueNum}
                    value={valueNum}
                    maxRows={1}
                    id="valueNum"
                    label="New value"
                    variant="standard"
                    helperText={!valueNum ? `empty` : ""}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <DesktopDatePicker
                    label="Date"
                    inputFormat="MM/dd/yyyy"
                    value={NewDataRelease}
                    onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Autocomplete
                    id="userName"
                    // maxRows={1}
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
                </StyledTableCell>
                <StyledTableCell align="center">
                  <TextField
                    error={!comment}
                    helperText={!comment ? `empty` : ""}
                    onChange={(e) => {
                      handleInputsValue(e);
                    }}
                    multiline
                    maxRows={3}
                    value={comment}
                    id="comment"
                    label="Comment"
                    variant="standard"
                  />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box display="flex" justifyContent="flex-end">
          <Button
            onClick={() => {
              handleAdd();
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
      <SimpleBackdrop openLoader={openLoader} />
    </LocalizationProvider>
  );
};
export { ModalTable };
