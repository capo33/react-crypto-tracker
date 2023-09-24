import * as React from "react";
import { Link } from "react-router-dom";
// Material UI
import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Container,
  Select,
  MenuItem,
} from "@mui/material";
// Material UI Icons
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
// Material UI Styles
import { ThemeProvider, createTheme } from "@mui/material/styles";

import { CryptoContext } from "../../context/cryptoContext";

function Navbar() {
  const { currency, setCurrency } = React.useContext(CryptoContext);

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
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              <Select
                variant='outlined'
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={currency}
                style={{ width: 100, height: 40, marginLeft: 15 }}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"yhjMzLPhuIDl"}>USD</MenuItem>
                <MenuItem value={"5k-_VTxqtCEI"}>EUR</MenuItem>
                <MenuItem value={"Qwsogvtv82FCd"}>BIT</MenuItem>
              </Select>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}
export default Navbar;
