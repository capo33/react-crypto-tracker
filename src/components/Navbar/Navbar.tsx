import * as React from "react";
import { Link } from "react-router-dom";
// Material UI
import { AppBar, Typography, Toolbar, Box, Container } from "@mui/material";
// Material UI Icons

import { Drawer } from "../Index";
import { useAppSelector } from "../../redux/app/store";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Navbar() {
  const { favourites } = useAppSelector((state) => state.cart);

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar component='nav' sx={{ background: "#213555" }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Crypto Tricker App
            </Typography>

            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "space-between" }}
            >
              <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                <Typography
                  variant='h5'
                  noWrap
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                    flexGrow: 1,
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Crypto Tricker App
                </Typography>
              </Link>
              <Drawer favourites={favourites} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
