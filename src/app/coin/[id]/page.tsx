'use client';

import { useParams } from 'next/navigation';
import { useCoinDetails } from '@/hooks/useCoinDetails';
import { useCoinMarketChart } from '@/hooks/useCoinMarketChart';
import CoinChart from '@/components/CoinChart';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import Skeleton from '@/components/Skeleton';
import Image from 'next/image';
import Link from 'next/link';

export default function CoinDetailPage() {
  const params = useParams();
  const idParam = params && params['id'];
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const { data: coin, isLoading } = useCoinDetails(id as string);
  const { data: chartData, isLoading: loadingChart } = useCoinMarketChart(
    id as string
  );

  if (isLoading || loadingChart) return <Skeleton type="card" />;
  if (!coin) return <div className="p-6 text-white">Coin data not found.</div>;

  return (
    <main>
      <div className="bg-white px-6 py-32 dark:bg-zinc-900 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-gray-700 dark:text-gray-400">
          <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
            See more about
          </p>
          <h1 className="mt-2 flex items-center gap-4 text-pretty text-4xl font-semibold tracking-tight text-gray-900 dark:text-indigo-600 sm:text-5xl">
            {coin.name} ({coin.symbol.toUpperCase()}){' '}
            <Image
              src={coin.image.large}
              alt={coin.name}
              width={64}
              height={64}
            />
          </h1>

          <div className="mt-10">
            {coin.description.en
              .split('. ')
              .filter(sentence => sentence.trim().length > 0)
              .map((sentence, idx) => (
                <p
                  key={idx}
                  className="mt-1 whitespace-pre-line break-words text-xl/8 font-thin leading-9"
                >
                  {sentence.trim() + '.'}
                </p>
              ))}
          </div>

          <div className="mt-10 max-w-2xl text-xl/8 font-thin leading-9 text-gray-600 dark:text-gray-300">
            <p className="font-semibold">
              Price: ${coin.market_data.current_price.usd.toLocaleString()}
            </p>
            <ul
              role="list"
              className="mt-8 max-w-xl space-y-8 text-gray-600 dark:text-gray-300"
            >
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    Market Cap:
                  </strong>{' '}
                  ${coin.market_data.market_cap.usd.toLocaleString()}
                </span>
              </li>
              <li className="flex gap-x-3">
                <CheckCircleIcon
                  aria-hidden="true"
                  className="mt-1 size-5 flex-none text-indigo-600"
                />
                <span>
                  <strong className="font-semibold text-gray-900 dark:text-gray-100">
                    24h:
                  </strong>{' '}
                  {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                </span>
              </li>
            </ul>
          </div>

          <h2 className="mb-6 mt-16 text-pretty text-3xl font-semibold tracking-tight text-gray-900 dark:text-indigo-600 sm:text-4xl">
            Last 7 days variation
          </h2>
          <CoinChart prices={chartData ? chartData.prices : []} />

          <Link
            href="/"
            className="mt-4 inline-block text-indigo-400 hover:underline"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
