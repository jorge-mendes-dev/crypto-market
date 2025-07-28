import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mock lottie-react for testing
jest.mock('lottie-react', () => {
  const MockLottie = () => <div data-testid="lottie-animation" />;
  MockLottie.displayName = 'MockLottie';
  return MockLottie;
});

describe('Header', () => {
  it('renders title, description, and badge', () => {
    render(
      <Header
        title="Crypto Dashboard"
        description="Track your favorite cryptocurrencies in real time."
        badge="v1.0"
      />
    );

    expect(screen.getByText('Crypto Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Track your favorite cryptocurrencies in real time.')).toBeInTheDocument();
    expect(screen.getByText('v1.0')).toBeInTheDocument();
    expect(screen.getByTestId('lottie-animation')).toBeInTheDocument();
  });
});
