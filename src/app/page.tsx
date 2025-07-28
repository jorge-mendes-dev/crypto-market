import TopCoins from '@/components/TopCoins';
import { AppConfig } from '@/config/AppConfig';

export default function Home() {
  const { title, description, cardHeaders, tabsTitle, details } =
    AppConfig.topCryptos;
  return (
    <main className="py-10 bg-gray-50 dark:bg-zinc-900">
      <TopCoins
        title={title}
        description={description}
        cardHeaders={cardHeaders}
        tabsTitle={tabsTitle}
        details={details}
      />
    </main>
  );
}
