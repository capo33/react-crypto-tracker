import axios from "axios";

import { options } from "../../utils/Index";

 
const getCoins = async () => {
  const response = await axios.request(
    options("https://coinranking1.p.rapidapi.com/coins")
  );
  return response.data.data.coins;
};

// Get Coin By Id
const getCoinById = async (id: string) => {
  const response = await axios.request(
    options(`https://coinranking1.p.rapidapi.com/coin/${id}`)
  );

  return response.data.data.coin;
};
// Get Coin history
const getCoinMarketChart = async (id: string) => {
  const response = await axios.request(
    options(`https://coinranking1.p.rapidapi.com/coin/${id}/history`)
  );

  return response.data.data.history;
};

// Get TrendingCoins Data
const getTrendingCoins = async () => {
  const response = await axios.request(
    options("https://coinranking1.p.rapidapi.com/coins")
  );
  return response.data.data.coins;
};

const coinServices = {
  getCoins,
  getCoinById,
  getCoinMarketChart,
  getTrendingCoins,
};

export default coinServices;
