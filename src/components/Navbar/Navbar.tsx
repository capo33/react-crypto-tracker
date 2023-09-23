import * as React from "react";
// Material UI
import { AppBar, Typography, Toolbar, Box, Container } from "@mui/material";
// Material UI Icons
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
// Material UI Styles
import { ThemeProvider, createTheme } from "@mui/material/styles";

function ResponsiveAppBar() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar component='nav'>
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
            <Typography
              variant='h5'
              noWrap
              component='a'
              href='/'
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
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
    // <ThemeProvider theme={darkTheme}>
    //   <AppBar position='static'>
    //     <Container>
    //       <Toolbar>
    //         <Typography
    //           // onClick={() => history.push(`/`)}
    //           variant='h6'
    //           // className={classes.title}
    //         >
    //           Crypto Hunter
    //         </Typography>
    //         {/* <Button color="inherit">Login</Button> */}
    //         <Select
    //           variant='outlined'
    //           labelId='demo-simple-select-label'
    //           id='demo-simple-select'
    //           value={currency}
    //           style={{ width: 100, height: 40, marginLeft: 15 }}
    //           onChange={(e) => setCurrency(e.target.value)}
    //         >
    //           <MenuItem value={"USD"}>USD</MenuItem>
    //           <MenuItem value={"EUR"}>EUR</MenuItem>
    //         </Select>
    //       </Toolbar>
    //     </Container>
    //   </AppBar>
    // </ThemeProvider>
  );
}
export default ResponsiveAppBar;
