import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";

import { getCoins } from "../redux/features/coinSlice";
import { CoinsTable, HeroBunner } from "../components/Index";
import { useAppSelector, useAppDispatch } from "../redux/app/store";

const Home = () => {
  const { coins, isLoading } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch action to get coins
    dispatch(getCoins());

    // set interval to get coins every 60 seconds
    const interval = setInterval(() => {
      dispatch(getCoins());
    }, 60 * 1000); // 60 seconds

    // Clean up
    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <Box sx={{ flex: 1 }}>
      <Container sx={{ py: 8 }} maxWidth='xl'>
        <HeroBunner />
        <CoinsTable coins={coins} isLoading={isLoading} />
      </Container>
    </Box>
  );
};

export default Home;
