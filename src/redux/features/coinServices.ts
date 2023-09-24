import axios from "axios";

import { option } from "../../utils/Index";

const getCoins = async (currency: string) => {
  const response = await axios.get(
    `https://api.coinranking.com/v2/coins?referenceCurrencyUuid=${currency}&limit=100`,
    option
  );

  return response.data.data.coins;
};

// Get Coin By Id
const getCoinById = async (id: string) => {
  const response = await axios.get(
    `https://api.coinranking.com/v2/coin/${id}`,
    option
  );

  return response.data.data.coin;
};

// Get Coin history
const getCoinMarketChart = async (id: string) => {
  const response = await axios.get(
    `https://api.coinranking.com/v2/coin/${id}/history?timePeriod=1y`,
    option
  );

  return response.data.data.history;
};

const coinServices = {
  getCoins,
  getCoinById,
  getCoinMarketChart,
};

export default coinServices;
