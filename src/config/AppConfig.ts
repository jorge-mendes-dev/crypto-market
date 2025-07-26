export const AppConfig = {
  title: 'HUB-XP Coin Market',
  description: 'A Next.js application for HUB-XP Coin Market',
  author: 'Jorge Mendes',
  version: 'version: 1.0.0',
  locale: 'en',
  url: '/',
  bg_color: '#ffffff',
  logo: '/logo.png',
  theme_color: '#4f46e5',
  navigation: [
    { name: 'Home', href: '/' },
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'About', href: '/about' },
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
    title: 'HUB-XP Market',
    description: 'Main crypto currencies in the market with real-time data.',
  },
  error: {
    title: 'Something went wrong.',
    description: 'Please try reloading the page or come back later.',
  },
  topCryptos: {
    title: 'Top 20 Crypto Currencies',
    description: 'List of the top 20 crypto currencies by market cap.',
    cardHeaders: [
      { name: 'Ranking', key: 'ranking' },
      { name: 'Name', key: 'name' },
      { name: 'Price', key: 'price' },
      { name: 'Variation (24h)', key: 'variation' },
    ],
  },
};
