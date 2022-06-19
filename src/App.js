import { Box } from "@mui/system";
import { Route, Routes } from "react-router";
import "./App.css";
import { SecondTable } from "./components/SecondTable";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/secondtable" element={<SecondTable />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
}

export default App;
