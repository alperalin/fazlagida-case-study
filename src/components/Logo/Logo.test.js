import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo', () => {
  test('Renders Logo Component', () => {
    render(
      // MemoryRouter is for react router useHref error.
      <MemoryRouter initialEntries={['/']}>
        <Logo text="Music App" />
      </MemoryRouter>
    );

    // Logo svg should be rendered.
    expect(screen.getByTestId('logo-icon')).toBeInTheDocument();

    // Tests the text prop
    expect(screen.getByText('Music App')).toBeInTheDocument();

    // Tests the react router's Link component
    expect(screen.getByRole('link')).toBeInTheDocument();
  });
});
