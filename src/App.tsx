import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

 import { Navbar, ScrollToTop } from "./components/Index";

import "./App.css";

function App() {
  return (
    <Container maxWidth='xl'>
      <ScrollToTop />
      <Box sx={{ my: 15 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
