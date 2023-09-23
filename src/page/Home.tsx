import React, { useContext, useEffect } from "react";
import { Box, Container } from "@mui/material";

import { useAppSelector, useAppDispatch } from "../redux/app/store";
import { CoinsTable, HeroBunner } from "../components/Index";
import { CryptoContext } from "../context/cryptoContext";
import { getCoins } from "../redux/features/coinSlice";

const Home = () => {
  const { coins, isLoading } = useAppSelector((state) => state.coins);

  const { currency } = useContext(CryptoContext);
  const dispatch = useAppDispatch();

  console.log("coins", coins);

  useEffect(() => {
    dispatch(getCoins(currency));
  }, [dispatch, currency]);

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
