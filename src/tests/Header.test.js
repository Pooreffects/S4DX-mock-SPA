import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

/* 
  # Header Test Block
    - [x]  Are the navigation links rendered? (passed)
*/

it('renders the Header Links', async () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  expect(screen.getByText(/orders/i)).toBeInTheDocument();
  expect(screen.getByText(/visualize/i)).toBeInTheDocument();
});
