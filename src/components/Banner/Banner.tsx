import React from "react";
import { Box, Typography } from "@mui/material";

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
    //  Gird container
    <Box
      sx={{
        flex: 1,
        height: "60vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: 2,
        my: 6,
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          color: "primary.500",
          fontWeight: 600,
          fontSize: "sm",
          textTransform: "uppercase",
          letterSpacing: 0.5,
        }}
      >
        {decorative}
      </Box>
      <Typography
        variant='h1'
        sx={{
          fontSize: { xs: "4xl", sm: "5xl", md: "6xl" },
          fontWeight: 800,
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "lg",
          color: "gray.500",
          maxWidth: "54ch",
        }}
      >
        {subtitle}
      </Typography>
      <img src={CryptoImage} alt='hero' />
    </Box>
  );
};

export default Banner;
