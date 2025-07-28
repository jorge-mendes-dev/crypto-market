import { render } from '@testing-library/react';
import Skeleton from './Skeleton';

describe('Skeleton', () => {
  it('renders a single card by default', () => {
    const { container } = render(<Skeleton />);
    expect(container.getElementsByClassName('animate-pulse').length).toBe(1);
  });

  it('renders a single card when type is "card"', () => {
    const { container } = render(<Skeleton type="card" />);
    expect(container.getElementsByClassName('animate-pulse').length).toBe(1);
  });

  it('renders multiple cards when type is "grid" and items is set', () => {
    const { container } = render(<Skeleton type="grid" items={3} />);
    expect(container.getElementsByClassName('animate-pulse').length).toBe(3);
  });

  it('renders 4 cards by default when type is "grid" and items is not set', () => {
    const { container } = render(<Skeleton type="grid" />);
    expect(container.getElementsByClassName('animate-pulse').length).toBe(4);
  });
});
