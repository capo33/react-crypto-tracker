import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";

import { getCoins } from "../redux/features/coinSlice";
import { CryptoContext } from "../context/cryptoContext";
import { CoinsTable, HeroBunner } from "../components/Index";
import { useAppSelector, useAppDispatch } from "../redux/app/store";


const Home = () => {
  const { currency } = React.useContext(CryptoContext);
  const { coins, isLoading } = useAppSelector((state) => state.coins);
 
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoins(currency));

    const interval = setInterval(() => {
      dispatch(getCoins(currency));
    }, 60 * 1000);

    return () => clearInterval(interval);
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
