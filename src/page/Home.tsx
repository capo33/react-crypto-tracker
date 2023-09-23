import React from "react";
import { Box, Container } from "@mui/material";

import { HeroBunner } from "../components/Index";

const Home = () => {
  return (
    <Box sx={{ flex: 1 }}>
      <Container sx={{ py: 8 }} maxWidth='xl'>
        <HeroBunner />
      </Container>
    </Box>
  );
};

export default Home;
