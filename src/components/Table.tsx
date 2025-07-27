import Image from 'next/image';
import { Coin } from '@/types/Coin';
import Link from 'next/link';

interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Array<Coin>;
  cardHeaders?: { name: string; key: string }[];
  details?: string;
}

export default function Table({
  data,
  cardHeaders,
  details,
}: TableProps): React.JSX.Element {
  return (
    <table className="min-w-full border-collapse transform cursor-pointer overflow-hidden rounded-lg bg-white shadow-lg transition duration-300 ease-in-out dark:bg-zinc-800">
      <thead className="bg-indigo-100 text-left text-indigo-600 dark:bg-indigo-700 dark:text-zinc-300">
        <tr>
          {cardHeaders?.map(header => (
            <th key={header.key} className="px-4 py-4">
              {header.name}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((coin, index) => (
          <tr
            key={coin.id}
            className="border-t border-zinc-200 transition hover:bg-zinc-50 dark:border-zinc-600 dark:hover:bg-zinc-700"
          >
            <td className="px-4 py-3 text-sm dark:text-zinc-100">
              {index + 1}
            </td>
            <td className="flex items-center gap-2 px-4 py-3">
              <Image
                src={coin.image}
                alt={coin.name}
                className="h-5 w-5"
                width={20}
                height={20}
                loading="lazy"
              />
              <span className="text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {coin.name}{' '}
                <span className="uppercase text-zinc-500">({coin.symbol})</span>
              </span>
            </td>
            <td className="px-4 py-3 text-sm text-zinc-800 dark:text-zinc-100">
              ${coin.current_price.toLocaleString()}
            </td>
            <td
              className={`px-4 py-3 text-sm font-medium ${
                coin.price_change_percentage_24h >= 0
                  ? 'text-green-600'
                  : 'text-red-500'
              }`}
            >
              {coin.price_change_percentage_24h.toFixed(2)}%
            </td>
            <td className="px-4 py-3 text-sm">
              <Link
                href={`/coin/${coin.id}`}
                className="text-indigo-400 hover:text-indigo-300"
              >
                {details || 'View Details'}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
