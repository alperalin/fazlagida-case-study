import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  test('Renders ErrorMessage Component', () => {
    render(<ErrorMessage message="Error Error Error" />);

    // Tests the text
    expect(
      screen.getByText('Something went wrong: Error Error Error')
    ).toBeInTheDocument();

    // Tests the accessibility
    expect(screen.getByTestId('error-message')).toHaveAccessibleDescription(
      'Error Message'
    );
  });
});
