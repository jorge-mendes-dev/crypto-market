import { render, screen } from '@testing-library/react';
import Card from './Card';

const mockProps = {
  id: 'bitcoin',
  name: 'Bitcoin',
  symbol: 'btc',
  image: '/btc.png',
  price: 50000,
  priceChangePercentage24h: 2.5,
  rank: 1,
  cardHeaders: [
    { key: 'ranking', name: 'Rank' },
    { key: 'name', name: 'Name' },
    { key: 'price', name: 'Price' },
    { key: 'variation', name: '24h Change' },
  ],
  details: 'See more',
};

describe('Card', () => {
  it('renders card with correct data', () => {
    render(<Card {...mockProps} />);
    expect(screen.getByText(/Rank:/i)).toBeInTheDocument();
    expect(screen.getByText(/1/)).toBeInTheDocument();
    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
    expect(screen.getByText(/Bitcoin/i)).toBeInTheDocument();
    expect(screen.getByText(/Price:/i)).toBeInTheDocument();
    expect(screen.getByText(/\$50.000/)).toBeInTheDocument();
    expect(screen.getByText(/24h Change:/i)).toBeInTheDocument();
    expect(screen.getByText(/2.50%/)).toBeInTheDocument();
    expect(screen.getByText(/See more/i)).toBeInTheDocument();
  });

  it('renders link to coin details', () => {
    render(<Card {...mockProps} />);
    const link = screen.getByRole('link', { name: /see more/i });
    expect(link).toHaveAttribute('href', '/coin/bitcoin');
  });
});
