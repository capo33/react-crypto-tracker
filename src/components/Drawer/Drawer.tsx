import React, { useState } from "react";
// Material UI Components
import {
  Drawer as DrawerCoins,
  Box,
  Button,
  Typography,
  Badge,
} from "@mui/material";
// Material UI Icons
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { ICoin } from "../../interfaces/CoinInterface";
import { useAppDispatch } from "../../redux/app/store";
import { removeFavourite } from "../../redux/features/favouritesSlice";

type DrawerProps = {
  favourites: ICoin[];
};

const Drawer = ({ favourites }: DrawerProps) => {
  const dispatch = useAppDispatch();

  // Drawer State
  type Anchor = "right";
  const [state, setState] = useState({
    right: false,
  });

  // Toggle Drawer
  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // Drawer List
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 350, padding: 2 }}
      role='presentation'
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Typography variant='h6' gutterBottom>
        Favourites
      </Typography>

      {favourites.length === 0 && (
        <Typography variant='body1' gutterBottom>
          You have no favourites yet
        </Typography>
      )}

      {favourites.map((coin) => (
        <Box
          key={coin.uuid}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 1,
            borderBottom: "1px solid #ccc",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src={coin.iconUrl}
              alt={coin.name}
              width='25px'
              height='25px'
              style={{ marginRight: "10px" }}
            />
            <Typography variant='body1'>{coin.name}</Typography>
          </Box>

          <HighlightOffIcon
            color='error'
            sx={{ cursor: "pointer" }}
            fontSize='small'
            onClick={() => dispatch(removeFavourite(coin))}
          />
        </Box>
      ))}
    </Box>
  );

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={toggleDrawer("right", true)}>
          <Badge
            badgeContent={
              favourites && favourites.length === 0 ? "0" : favourites.length
            }
            color={favourites && favourites.length === 0 ? "warning" : "error"}
            sx={{ marginRight: 5 }}
          >
            <AddShoppingCartIcon sx={{ color: "#fff" }} fontSize='medium' />
          </Badge>
        </Button>
      </Box>
      <DrawerCoins
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </DrawerCoins>
    </>
  );
};

export default Drawer;
