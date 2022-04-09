import { render, screen } from '@testing-library/react';
import Header from '../components/Header';

/* Header => Links => Orders */
// Header Test Block

it('render app', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Orders/i);
  expect(linkElement).toBeInTheDocument();
});
