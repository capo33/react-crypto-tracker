import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";

import CryptoImage from "../../assets/crypto.png";

const HeroBunner = ({
  decorative = "Crypto Tracker",
  title = "Built for the future",
  subtitle = "Track the prices of cryptocurrencies in real-time.",
}: {
  decorative?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}) => {
  return (
    <Container maxWidth='xl'>
      <Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              justifyContent: "center",
              textAlign: "center",
              gap: 2,
             }}
          >
            <Typography variant='h1' sx={{ fontWeight: 800 }}>
              {decorative}
            </Typography>
            <Typography variant='h2' sx={{ fontWeight: 800 }}>
              {title}
            </Typography>
            <Typography variant='h3' sx={{ width: "80%", m: "0 auto" }}>
              {subtitle}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction='row'
              spacing={2}
              justifyContent='center'
            >
              <Button variant='contained'>dummy button</Button>
              <Button variant='outlined'>dummy button</Button>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              m: "0 auto",
              width: { xs: "100%", md: "80%" },
            }}
          >
            <img src={CryptoImage} alt='hero' style={{ width: "100%" }} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HeroBunner;
