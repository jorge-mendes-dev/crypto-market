export interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
  ath: number; // all time high
  ath_change_percentage: number;
  ath_date: string;
  atl: number; // all time low
  atl_change_percentage: number;
  atl_date: string;
  last_updated: string;
}
