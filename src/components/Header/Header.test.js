import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Header from './Header';

describe('Header', () => {
  test('Renders Header Component', () => {
    const handleClick = jest.fn();

    render(
      <MemoryRouter initialEntries={['/']}>
        <Header theme="light" onSetTheme={handleClick} />
      </MemoryRouter>
    );

    // Header must have 'header' class
    expect(screen.getByRole('banner')).toHaveClass('header');

    // Tests the react router's Link component
    // This is the link to homepage in Logo Component
    expect(screen.getByRole('link')).toBeInTheDocument();

    // Site title must be in here
    expect(screen.getByText('Music App')).toBeInTheDocument();

    // onClick function is required by ThemeButton. So, I also tested it in here.
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
