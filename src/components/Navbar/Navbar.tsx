import { Link } from "react-router-dom";
// Material UI
import { AppBar, Typography, Toolbar, Box, Container } from "@mui/material";
// Material UI Icons

import {Drawer} from "../index";
import { useAppSelector } from "../../redux/app/store";

function Navbar() {
  const { favourites } = useAppSelector((state) => state.cart);

  return (
    <AppBar
      component='nav'
      sx={{
        background: "#4F709C",
        boxShadow: "none",
      }}
    >
      <Container maxWidth='xl'>
        <Toolbar
          disableGutters
          sx={{
            background: "#4F709C",
            boxShadow: "none",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant='h6'
              noWrap
              sx={{
                fontWeight: 700,
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
                Crypto Tricker App
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1 }}>
              <Drawer favourites={favourites} />
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
