export interface ICoin {
  name: string;
  image: string;
  percentChange: number;
  current_price: number;
  id: string;
  symbol: string;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
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
