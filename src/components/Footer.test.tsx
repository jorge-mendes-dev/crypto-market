import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the title and copyright year', () => {
    const title = 'Crypto Market';
    const year = new Date().getFullYear();

    render(<Footer title={title} />);

    expect(screen.getByText(`${title}`)).toBeInTheDocument();
    expect(screen.getByText(new RegExp(`${year}.*${title}.*All rights reserved.`, 'i'))).toBeInTheDocument();
  });
});
