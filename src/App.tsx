import { Outlet } from "react-router-dom";
import { Container, Box } from "@mui/material";

 import { Navbar } from "./components/Index";

import "./App.css";

function App() {
  return (
    <Container maxWidth='xl'>
      <Box sx={{ my: 15 }}>
        <Navbar />
        <Outlet />
      </Box>
    </Container>
  );
}

export default App;
