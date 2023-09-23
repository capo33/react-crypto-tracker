import * as React from "react";
import { Link } from "react-router-dom";
// Material UI
import { AppBar, Typography, Toolbar, Box, Container } from "@mui/material";
// Material UI Icons
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
// Material UI Styles
import { ThemeProvider, createTheme } from "@mui/material/styles";

function Navbar() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar component='nav' sx={{ background: "#213555" }}>
        <Container maxWidth='xl'>
          <Toolbar disableGutters>
            <CurrencyBitcoinIcon
              sx={{ fontSize: 40, display: { xs: "none", md: "flex" }, mr: 1 }}
              color='warning'
            />
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
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            ></Box>
            <CurrencyBitcoinIcon
              sx={{ fontSize: 40, display: { xs: "flex", md: "none" }, mr: 1 }}
              color='warning'
            />
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
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
