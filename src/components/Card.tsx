import Image from 'next/image';
import Link from 'next/link';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  priceChangePercentage24h: number;
  rank: number;
  cardHeaders?: { name: string; key: string }[];
  details?: string;
}

export default function Card({
  id,
  name,
  symbol,
  image,
  price,
  priceChangePercentage24h,
  rank,
  cardHeaders,
  details,
}: CardProps): React.JSX.Element {
  const isPositive = priceChangePercentage24h >= 0;

  function formatHeader(key: string): string {
    return cardHeaders?.find(header => header.key === key)?.name || '';
  }

  return (
    <div
      className={`flex transform cursor-pointer flex-col gap-2 rounded-2xl bg-indigo-100 dark:bg-zinc-800 p-6 text-white shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:bg-indigo-200 dark:hover:bg-zinc-700 hover:shadow-lg`}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-indigo-900 dark:text-indigo-100">
          <b>{formatHeader('ranking')}:</b> {rank}
        </span>
        <Image
          src={image}
          alt={name}
          width={35}
          height={35}
          className="rounded-full"
        />
      </div>

      <div className="text-normal text-gray-700 dark:text-zinc-300">
        <b>{formatHeader('name')}:</b> {name}{' '}
        <span className="ml-1 text-sm text-gray-700 dark:text-zinc-300">
          ({symbol.toUpperCase()})
        </span>
      </div>

      <div className="text-normal text-gray-700 dark:text-zinc-300">
        <b>{formatHeader('price')}:</b> ${price.toLocaleString()}
      </div>

      <div className='text-gray-700 dark:text-zinc-300'>
        <b>{formatHeader('variation')}:</b>{' '}
        <span className={isPositive ? 'text-green-500' : 'text-red-500'}>
          {priceChangePercentage24h.toFixed(2)}%
        </span>
      </div>
      <div className="mt-2 text-right text-sm">
        <Link
          href={`/coin/${id}`}
          className="text-indigo-700 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          {details || 'View Details'}
        </Link>
      </div>
    </div>
  );
}
