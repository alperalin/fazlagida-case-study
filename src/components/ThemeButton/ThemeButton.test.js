import { render, screen, fireEvent } from '@testing-library/react';
import ThemeButton from './ThemeButton';

describe('Theme Button', () => {
  test('Renders Button Component With theme prop is dark', () => {
    const handleClick = jest.fn();

    render(<ThemeButton theme="dark" onClick={handleClick} />);

    // Tests the button renders properly
    expect(screen.getByRole('button')).toHaveAccessibleDescription(
      'Light and dark theme changer button'
    );

    // Button must have 'button--opened' class when theme value is dark.
    expect(screen.getByRole('button')).toHaveClass('themeButton--opened');

    // onClick function is required. So, I tested it in here.
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('Renders Button Component With theme prop is light', () => {
    const handleClick = jest.fn();

    render(<ThemeButton theme="light" onClick={handleClick} />);

    // Tests the button renders properly
    expect(screen.getByRole('button')).toHaveAccessibleDescription(
      'Light and dark theme changer button'
    );

    // Button must have 'button--opened' class when theme value is dark.
    expect(screen.getByRole('button')).not.toHaveClass('themeButton--opened');

    // onClick function is required. So, I tested it in here.
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
