import git from '@/assets/images/git.jpg';
import jorge from '@/assets/images/jorge_mendes.png';
import notebook from '@/assets/images/notebook.jpg';
import code from '@/assets/images/code.jpg';
import Crypto from '@/app/Crypto.svg';

export const AppConfig = {
  title: 'Coin Market',
  description: 'A Next.js application for Coin Market',
  author: 'Jorge Mendes',
  version: 'version: 1.0.0',
  locale: 'en',
  url: '/',
  bg_color: '#ffffff',
  theme_color: '#4f46e5',
  logo: Crypto,
  navigation: [
    { name: 'Home', href: '/' },
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
  },
  about: {
    title: 'About Me',
    subtitle: 'Discover My Journey',
    paragraphs: [
      'Senior Software Engineer with 9 years of experience, developing applications or helping growing existing projects, using mainly with JavaScript, React, Zustand, TypeScript.',
    ],
    action: {
      name: 'Know more',
      href: 'https://www.jorgemendes.com.br/',
    },
    list: [
      'Experience maintaining legacy web applications,',
      'Experience in architecture and building and documenting web applications,',
      'Experience with modern frontend technologies',
      'Aptitude to quickly learn new languages and technologies,',
      'Strong ability to work independently and self-guided,',
    ],
    socialMedia: [
      {
        name: 'Linkedin',
        href: 'https://www.linkedin.com/in/jorge-mendes-dev/',
      },
      {
        name: 'Github',
        href: 'https://github.com/jorge-mendes-dev',
      },
      {
        name: 'Gmail',
        href: 'mailto:jorge.mendesx@gmail.com',
      },
    ],
    pictures: [
      {
        src: jorge,
        alt: 'Jorge Mendes',
      },
      {
        src: git,
        alt: 'Git',
      },
      {
        src: code,
        alt: 'Code',
      },
      {
        src: notebook,
        alt: 'Notebook',
      },
    ],
  },
};
