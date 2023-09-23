import axios from "axios";

// Get All Coins
const getCoins = async (currency: string) => {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
      {
        timeout: 10000,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// Get Coin By Id
const getCoinById = async (id: string) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}`
  );

  return response.data;
};

// Get Coin Market Chart Data
const getCoinMarketChart = async (
  id: string,
  days: string,
  currency: string
) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`
  );
  return response.data;
};

// Get TrendingCoins Data
const getTrendingCoins = async (currency: string) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`
  );
  return response.data;
};

const coinServices = {
  getCoins,
  getCoinById,
  getCoinMarketChart,
  getTrendingCoins,
};

export default coinServices;
