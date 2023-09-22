import React from "react";
import { Box, Grid, Typography } from "@mui/material";

import CryptoImage from "../../assets/hero-img.png";
const Banner = ({
  decorative = "Crypto Tracker",
  title = "Built for the future",
  subtitle = "Crypto Tracker app is a web application that allows users to track the prices of cryptocurrencies in real-time.",
}: {
  decorative?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}) => {
  return (
    <Box sx={{ my: 15 }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
              my: 6,
            }}
          >
            <Typography variant='h1' sx={{ fontWeight: 800 }}>
              {title}
            </Typography>
            <Typography variant='subtitle1' sx={{ width: "80%", m: "0 auto" }}>
              {subtitle}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={CryptoImage} alt='hero' style={{ width: "100%" }} />
        </Grid>
      </Grid>
    </Box>
  );
  //   <Box
  //     sx={{
  //       color: "primary.500",
  //       fontWeight: 600,
  //       fontSize: "sm",
  //       textTransform: "uppercase",
  //       letterSpacing: 0.5,
  //     }}
  //   >
  //     {decorative}
  //   </Box>
  //   <Typography
  //     variant='h1'
  //     sx={{
  //       fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
  //       fontWeight: 800,
  //     }}
  //   >
  //     {title}
  //   </Typography>
  //   <Typography
  //     sx={{
  //       fontSize: "lg",
  //       color: "gray.500",
  //       maxWidth: "54ch",
  //     }}
  //   >
  //     {subtitle}
  //   </Typography>
  //   <img src={CryptoImage} alt='hero' />
  // </Box>
  // );
};

export default Banner;
