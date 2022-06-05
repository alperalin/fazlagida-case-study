import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('Renders Footer Component', () => {
    render(<Footer text="Made By Me" />);

    // Tests the text prop
    expect(screen.getByText('Made By Me')).toBeInTheDocument();

    // Footer must have 'footer' class
    expect(screen.getByRole('contentinfo')).toHaveClass('footer');
  });
});
