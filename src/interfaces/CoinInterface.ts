export interface ICoin {
  // Old Coin Interface from CoinGecko API
  // name: string;
  // image: string;
  // percentChange: number;
  // current_price: number;
  // id: string;
  // symbol: string;
  // price_change_percentage_24h: number;
  // market_cap: number;
  // total_volume: number;
  // market_cap_rank: number;

  // New Coin Interface from Coinranking API
  btcPrice: string;
  btcVolume: string;
  change: number;
  name: string;
  marketCap: string;
  price: number;
  rank: number;
  iconUrl: string;
  symbol: string;
  uuid: string;
  "24hVolume": number;
}

export interface ICoinState {
  coins: ICoin[];
  coin: ICoin | null;
  trendingCoins: ICoin[];
  marketChart: any;
  isError: boolean;
  isLoading: boolean;
  message: string | null;
}
