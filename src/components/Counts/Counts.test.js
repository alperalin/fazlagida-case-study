import { render, screen } from '@testing-library/react';
import Counts from './Counts';

describe('Counts', () => {
  test('Renders Counts Component With Type listeners', () => {
    render(<Counts type="listeners" count={100000} />);

    // Tests the count prop. It must be converted to Turkish number format
    expect(screen.getByText('100.000')).toBeInTheDocument();

    // Tests the title property for accessibility
    expect(screen.getByTestId('counts')).toHaveAccessibleDescription(
      'listener count'
    );

    // Tests icon child elements
    expect(screen.getByTestId('counts')).toContainElement(
      screen.getByTestId('counts-icon')
    );
  });

  test('Renders Counts Component With Type playCount', () => {
    render(<Counts type="playCount" count={1000000} />);

    // Tests the count prop. It must be converted to Turkish number format
    expect(screen.getByText('1.000.000')).toBeInTheDocument();

    // Tests the title property for accessibility
    expect(screen.getByTestId('counts')).toHaveAccessibleDescription(
      'play count'
    );

    // Tests icon child element
    expect(screen.getByTestId('counts')).toContainElement(
      screen.getByTestId('counts-icon')
    );
  });
});
