import { render, screen } from '@testing-library/react';
import { Coin } from '@/types/Coin';
import Table from './Table';

// Mock next/image for testing
// eslint-disable-next-line react/display-name
jest.mock('next/image', () => (props: React.ComponentProps<'img'>) => {
  // eslint-disable-next-line @next/next/no-img-element
  return <img {...props} alt={props.alt} />;
});

const mockHeaders = [
  { key: 'ranking', name: 'Rank' },
  { key: 'name', name: 'Name' },
  { key: 'price', name: 'Price' },
  { key: 'variation', name: '24h Change' },
  { key: 'details', name: 'Details' },
];

const mockData: Array<Coin> = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'btc',
    image: '/btc.png',
    current_price: 50000,
    price_change_percentage_24h: 2.5,
    market_cap: 0,
    market_cap_rank: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    circulating_supply: 0,
    total_supply: null,
    max_supply: null,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: '',
    atl: 0,
    atl_change_percentage: 0,
    atl_date: '',
    last_updated: '',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'eth',
    image: '/eth.png',
    current_price: 3000,
    price_change_percentage_24h: -1.2,
    market_cap: 0,
    market_cap_rank: 0,
    total_volume: 0,
    high_24h: 0,
    low_24h: 0,
    price_change_24h: 0,
    circulating_supply: 0,
    total_supply: null,
    max_supply: null,
    ath: 0,
    ath_change_percentage: 0,
    ath_date: '',
    atl: 0,
    atl_change_percentage: 0,
    atl_date: '',
    last_updated: '',
  },
];

describe('Table', () => {
  it('renders headers and coin data', () => {
    render(
      <Table data={mockData} cardHeaders={mockHeaders} details="See more" />
    );
    mockHeaders.forEach(header => {
      expect(screen.getByText(header.name)).toBeInTheDocument();
    });
    expect(screen.getByText('Bitcoin')).toBeInTheDocument();
    expect(screen.getByText('Ethereum')).toBeInTheDocument();
    expect(screen.getByText('$50.000')).toBeInTheDocument();
    expect(screen.getByText('$3.000')).toBeInTheDocument();
    expect(screen.getByText('2.50%')).toBeInTheDocument();
    expect(screen.getByText('-1.20%')).toBeInTheDocument();
    expect(screen.getAllByText('See more')).toHaveLength(2);
  });
});
