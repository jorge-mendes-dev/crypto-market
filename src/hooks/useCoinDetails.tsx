import { useQuery } from '@tanstack/react-query';
import { BACKEND_API, TOKEN } from '@/config/constants';
import { CoinDetail } from '@/types/CoinDetail';

export function useCoinDetails(coinId: string) {
  return useQuery<CoinDetail>({
    queryKey: ['coin-details', coinId],
    queryFn: async () => {
      const res = await fetch(`${BACKEND_API}/coins/${coinId}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      });

      if (!res.ok) {
        throw new Error('Failed to fetch coin details');
      }

      return res.json();
    },
    enabled: !!coinId,
  });
}
