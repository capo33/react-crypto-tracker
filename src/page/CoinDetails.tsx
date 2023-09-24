import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Chart } from "../components/Index";
import { getCoinById } from "../redux/features/coinSlice";
import { useAppSelector, useAppDispatch } from "../redux/app/store";

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { coin } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCoinById(id as string));
  }, [dispatch, id]);

  return (
    <Box sx={{ my: 15 }}>
      <Chart coin={coin} />
    </Box>
  );
};

export default CoinDetails;
