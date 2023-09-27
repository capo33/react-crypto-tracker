import { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  ButtonBase,
  Paper,
  Grid,
  Container,
  Chip,
} from "@mui/material";

 import { Chart, Copy } from "../components";
import { Img } from "../styles/CoinDetailsStyles";
import { getCoinById } from "../redux/features/coinSlice";
import { useAppSelector, useAppDispatch } from "../redux/app/store";

const CoinDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { coin } = useAppSelector((state) => state.coins);

  const dispatch = useAppDispatch();

  const color = coin?.color as string;

  useEffect(() => {
    dispatch(getCoinById(id as string));
  }, [dispatch, id]);

  return (
    <Container maxWidth='lg'>
      <Box>
        <Chart coin={coin} />
        <Paper
          sx={{
            p: 2,
            margin: "2rem auto",
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Grid container spacing={2}>
            <Grid item>
              <ButtonBase sx={{ width: 128, height: 128 }}>
                <Img alt='complex' src={coin?.iconUrl} />
              </ButtonBase>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction='column' spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant='subtitle1' component='div'>
                    {coin?.name}
                  </Typography>
                  <Typography variant='body2' gutterBottom>
                    {coin?.symbol}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    Price: {coin?.price}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    ID: {coin?.uuid}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    24hVolume: {coin?.["24hVolume"]}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant='subtitle1' component='div'>
                  BTC: {coin?.btcPrice}
                </Typography>
                <Typography variant='subtitle1' component='div'>
                  (24h): {coin?.change}%
                </Typography>
                <Typography variant='subtitle1' component='div'>
                  Color:{" "}
                  <Chip
                    label={color}
                    sx={{ backgroundColor: color }}
                    size='small'
                  /> 
                  <Copy color={color} />
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default CoinDetails;
