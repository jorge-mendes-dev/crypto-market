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
}

export default function TopCoins({
  title,
  description,
  cardHeaders,
  tabsTitle,
  details,
}: TopCoinsProps) {
  const { data, isLoading } = useTopCoins();
  const [tabs, setTab] = useState(tabsTitle);

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
      <div className="bg-white dark:bg-zinc-900">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg/8 text-gray-600 dark:text-indigo-400">
              {description}
            </p>
          </div>
        </div>
      </div>

      <Tabs tabs={tabs} setTab={updateTabs} />

      <div className="overflow-x-auto">
        {tabs.find(tab => tab.current)?.name === 'Cards' ? (
          <div
            className={`mt-4 grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-3 lg:grid-cols-4`}
          >
            {data?.map((coin, index) => (
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
              data={data ? data : []}
              cardHeaders={cardHeaders}
              details={details}
            />
          </div>
        )}
      </div>
    </section>
  );
}
