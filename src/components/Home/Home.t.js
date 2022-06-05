import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Home from './Home';

const queryClient = new QueryClient();

describe('Home', () => {
  test('Renders Home Component', async () => {
    render(
      <QueryClientProvider client={queryClient}>
        {/* MemoryRouter is for react router useHref error. */}
        <MemoryRouter initialEntries={['/']}>
          <Home />
        </MemoryRouter>
      </QueryClientProvider>
    );

    // Tests the first render
    expect(screen.queryByText(/Top Artists List/)).toBeNull();

    // Tests after API request
    expect(await screen.findByText(/Top Artists List/)).toBeInTheDocument();
  });
});
