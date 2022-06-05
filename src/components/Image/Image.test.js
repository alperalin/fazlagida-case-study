import { render, screen } from '@testing-library/react';
import Image from './Image';

describe('Image Component', () => {
  test('Renders Image Component', () => {
    render(
      <Image
        size="medium"
        src="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
        alt="Image Test"
      />
    );

    // Tests the image component renders properly
    expect(screen.getByRole('img')).toHaveAccessibleName('Image Test');

    // Image must have the given url
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'
    );

    // Image must have 'image--medium' class when size is 'medium'.
    expect(screen.getByRole('img')).toHaveClass('image--medium');
  });
});
