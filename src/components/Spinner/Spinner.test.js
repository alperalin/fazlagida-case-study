import { render, screen } from '@testing-library/react';
import Spinner from './Spinner';

describe('Spinner', () => {
  test('Renders Spinner Component', () => {
    render(<Spinner />);

    // Tests the children prop
    expect(screen.getByText('Spinner')).toBeInTheDocument();

    // Tests the button renders properly
    expect(screen.getByTestId('spinner')).toHaveAccessibleDescription(
      'Loading animation'
    );

    // Button must have 'button--opened' class when theme value is dark.
    expect(screen.getByTestId('spinner')).toHaveClass('spinner');
  });
});
