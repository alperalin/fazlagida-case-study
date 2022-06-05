import { render, screen } from '@testing-library/react';
import ArtistBanner from './ArtistBanner';

describe('ArtistBanner', () => {
  test('Renders ArtistBanner Component', () => {
    render(
      <ArtistBanner
        imageSrc="https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png"
        artistName="Metallica"
      />
    );

    // Tests the artist name title
    expect(screen.getByText('Metallica')).toBeInTheDocument();

    // Image must have the given url
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'
    );

    // Tests the image component renders properly
    expect(screen.getByRole('img')).toHaveAccessibleName('Metallica');

    // Image must have 'image--large' class.
    expect(screen.getByRole('img')).toHaveClass('image--large');
  });

  test('Renders ArtistBanner Component Without Image Src', () => {
    render(<ArtistBanner artistName="Metallica" />);

    // Tests the artist name title
    expect(screen.getByText('Metallica')).toBeInTheDocument();

    // Image will be in the content but It should contain placeholder image url.
    expect(screen.getByRole('img')).toHaveAttribute('src', 'placeholder.png');

    // Tests the image component renders properly
    expect(screen.getByRole('img')).toHaveAccessibleName('Metallica');

    // Image must have 'image--large' class.
    expect(screen.getByRole('img')).toHaveClass('image--large');
  });
});
