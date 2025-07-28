export const AppConfig = {
  title: 'Coin Market',
  description: 'A Next.js application for Coin Market',
  author: 'Jorge Mendes',
  version: 'version: 1.0.0',
  locale: 'en',
  url: '/',
  bg_color: '#ffffff',
  theme_color: '#4f46e5',
  navigation: [
    { name: 'Home', href: '/' }
  ],
  keywords: [
    'Finance',
    'Cryptocurrency',
    'Blockchain',
    'Crypto Market',
    'Trading',
    'Investing',
  ],
  header: {
    title: 'Coin Market',
    description: 'Main crypto currencies in the market with real-time data.',
  },
  error: {
    title: 'Something went wrong.',
    description: 'Please try reloading the page or come back later.',
  },
  topCryptos: {
    title: 'Top 20 Crypto Currencies',
    description: 'List of the top 20 crypto currencies by market cap.',
    details: 'View details',
    cardHeaders: [
      { name: 'Ranking', key: 'ranking' },
      { name: 'Name', key: 'name' },
      { name: 'Price', key: 'price' },
      { name: 'Variation (24h)', key: 'variation' },
      { name: 'Details', key: 'details' },
    ],
    tabsTitle: [
      { name: 'Cards', current: true },
      { name: 'Table', current: false },
    ],
    search: 'Search by coin name...',
    notFound: 'No coins found.',
  },
  seeMore: {
    title: 'See more about',
    lastSevenDays: 'Last 7 days variation',
    backHome: 'Back to Home',
    price: 'Price',
    marketCap: 'Market Cap',
    volume: 'Volume (24h)',
  }
};
