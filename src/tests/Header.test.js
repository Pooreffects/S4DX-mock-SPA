import '@testing-library/jest-dom';
import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

it('Should render Header Links', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  expect(screen.getAllByRole('link').length).toBe(3);
  expect(screen.getByText(/orders/i)).toBeInTheDocument();
  expect(screen.getByText(/visualize/i)).toBeInTheDocument();
  expect(screen.getByText(/s4dx/i)).toBeInTheDocument();
});

afterEach(cleanup);
