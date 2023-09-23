import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar } from "./components/Index";

import "./App.css";

function App() {
  return (
    <Container maxWidth='xl'>
      <Navbar />
      <>
        <Outlet />
      </>
    </Container>
  );
}

export default App;
