import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

/* 
  # Header Test Block
    - [x]  Links (passed)
*/

it('render Header Orders Link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const ordersLink = screen.getByText(/orders/i);
  expect(ordersLink).toBeInTheDocument();
});

it('render Header Visualize Link', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  const visualizeLink = screen.getByText(/visualize/i);
  expect(visualizeLink).toBeInTheDocument();
});
