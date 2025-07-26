import TopCryptos from '@/components/TopCryptos';
import { AppConfig } from '@/config/AppConfig';

export default function Home() {
  const { title, description, cardHeaders } = AppConfig.topCryptos;
  return (
    <main className="py-10">
      <TopCryptos
        title={title}
        description={description}
        cardHeaders={cardHeaders}
      />
    </main>
  );
}
