import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import { createStyles, styled } from "@mui/material/styles";

import { Navbar } from "./components/Index";

import "./App.css";

function App() {
  const DIV = styled("div")(() =>
    createStyles({
      // backgroundColor: "#000",
      minHeight: "100vh",
    })
  );
  return (
    <DIV>
      <Container maxWidth='xl'>
        <Navbar />
        <>
          <Outlet />
        </>
      </Container>
    </DIV>
  );
}

export default App;
