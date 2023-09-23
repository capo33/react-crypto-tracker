import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

import { Navbar } from "./components/Index";

import "./App.css";
import { DIV } from "./styles/styles";

function App() {
  return (
    <DIV>
      <Container maxWidth='xl'>
        <Navbar />
        <Outlet />
      </Container>
    </DIV>
  );
}

export default App;
