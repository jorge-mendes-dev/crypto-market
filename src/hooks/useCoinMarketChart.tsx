import { useQuery } from '@tanstack/react-query';
import { BACKEND_API, TOKEN } from '@/config/constants';

interface CoinMarketChartData {
  prices: [number, number][];
}

export function useCoinMarketChart(coinId: string) {
  return useQuery<CoinMarketChartData>({
    queryKey: ['coin-market-chart', coinId],
    queryFn: async () => {
      const res = await fetch(
        `${BACKEND_API}/coins/${coinId}/market_chart?vs_currency=usd&days=7`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (!res.ok) throw new Error('Failed to fetch market chart');
      return res.json();
    },
    enabled: !!coinId,
  });
}
