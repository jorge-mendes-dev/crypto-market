import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { Coin } from '@/types/Coin';
import { BACKEND_API, TOKEN } from '@/config/constants';

export function useTopCoins(): UseQueryResult<Coin[]> {
  return useQuery<Coin[]>({
    queryKey: ['top-cryptos'],
    queryFn: async () => {
      const res = await fetch(
        `${BACKEND_API}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error('Failed to fetch');
      }

      return await res.json();
    },
    staleTime: 60_000,
  });
}
