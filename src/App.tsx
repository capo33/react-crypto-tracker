import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, ScrollToTop } from "./components/Index";

import "./App.css";

function App() {
  return (
    <Box sx={{ flex: 1 }}>
      <ScrollToTop />
      <Box sx={{ my: 15 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
