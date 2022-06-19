import { Box } from "@mui/system";
import { Route, Routes } from "react-router";
import "./App.css";
import { MainTable } from "./components/MainTable";
import { SecondTable } from "./components/SecondTable";
import { useState } from "react";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<MainTable />} />
        <Route path="*" element={<SecondTable />} />
      </Routes>
    </Box>
  );
}

export default App;
