'use client';

import { useTopCoins } from '@/hooks/useTopCoins';
import Skeleton from '@/components/Skeleton';
import Card from '@/components/Card';
import Table from '@/components/Table';
import Tabs from '@/components/Tabs';
import { useState } from 'react';

interface TopCoinsProps {
  title: string;
  description: string;
  cardHeaders?: { name: string; key: string }[];
  tabsTitle: { name: string; current: boolean }[];
  details?: string;
  searchTitle?: string;
  notFound?: string;
}

export default function TopCoins({
  title,
  description,
  cardHeaders,
  tabsTitle,
  details,
  searchTitle,
  notFound,
}: TopCoinsProps) {
  const { data, isLoading } = useTopCoins();
  const [tabs, setTab] = useState(tabsTitle);
  const [search, setSearch] = useState('');

  const filtered = data
    ? data.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <Skeleton type="grid" />;
  }

  const updateTabs = (tab: { name: string; current: boolean }) => {
    const updatedTabs = tabs.map(t =>
      t.name === tab.name ? { ...t, current: true } : { ...t, current: false }
    );

    setTab(updatedTabs);
  };

  return (
    <section className="container mx-auto px-4 py-6 md:px-8">
      <div className="rounded bg-indigo-100 dark:bg-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-indigo-700 dark:text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-700 dark:text-indigo-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <Tabs tabs={tabs} setTab={updateTabs} />
        <input
          type="text"
          className="w-full max-w-xs rounded-2xl border border-gray-300 bg-white px-3 py-2 text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:bg-zinc-800 dark:text-white"
          placeholder={searchTitle}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      <div className="overflow-x-auto">
        {filtered.length === 0 && (
          <div className="mt-8 text-center text-lg text-gray-500 dark:text-gray-400">
            {notFound}
          </div>
        )}

        {tabs.find(tab => tab.current)?.name === 'Cards' ? (
          <div
            className={`mt-4 grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4`}
          >
            {filtered?.map((coin, index) => (
              <Card
                key={coin.id}
                id={coin.id}
                name={coin.name}
                symbol={coin.symbol}
                image={coin.image}
                price={coin.current_price}
                priceChangePercentage24h={coin.price_change_percentage_24h}
                rank={index + 1}
                cardHeaders={cardHeaders}
                details={details}
              />
            ))}
          </div>
        ) : (
          <div className="container mx-auto mt-6 px-6">
            <Table
              data={filtered ? filtered : []}
              cardHeaders={cardHeaders}
              details={details}
            />
          </div>
        )}
      </div>
    </section>
  );
}
