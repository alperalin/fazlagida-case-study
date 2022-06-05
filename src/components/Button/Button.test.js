import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  test('Renders Button Component With Only Children Prop', () => {
    render(<Button>Press Me!</Button>);

    // Tests the children prop
    expect(screen.getByText('Press Me!')).toBeInTheDocument();

    // Tests the role
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  test('Renders Button Component With Contained Variant', () => {
    render(<Button variant="contained">Press Me!</Button>);

    // Button must have 'button--contained' class when variant is 'contained'.
    expect(screen.getByRole('button')).toHaveClass('button--contained');
  });

  test('Renders Button Component With Outlined Variant', () => {
    render(<Button variant="outlined">Press Me!</Button>);

    // Button must have 'button--outlined' class when variant is 'outlined'.
    expect(screen.getByRole('button')).toHaveClass('button--outlined');
  });

  test('Renders Button Component With alignCenter Prop', () => {
    render(<Button alignCenter={true}>Press Me!</Button>);

    // Button must have 'button--center' class when alignCenter is true.
    expect(screen.getByRole('button')).toHaveClass('button--center');
  });

  test('Renders Button Component When isLoading is true', () => {
    render(<Button isLoading={true}>Press Me!</Button>);

    // When Loading is true, button must be disabled.
    expect(screen.getByRole('button')).toBeDisabled();

    // When Loading is true, "Press Me!" shouldn't be rendered.
    expect(screen.queryByText('Press Me!')).toBeNull();

    // When Loading is true, 'Spinner' should be rendered.
    expect(screen.getByText('Spinner')).toBeInTheDocument();
  });

  test('Renders Button Component With onClick Prop', () => {
    const handleClick = jest.fn();

    // onClick runs the passed function.
    render(<Button onClick={handleClick}>Press Me!</Button>);

    // Click to button
    fireEvent.click(screen.getByText(/Press Me!/i));

    // It should run one time
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
