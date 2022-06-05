import { render, screen } from '@testing-library/react';

import MediaCard from './MediaCard';

describe('MediaCard', () => {
  test('Renders MediaCard Component', () => {
    render(
      <MediaCard
        image={[
          '1',
          {
            '#text':
              'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
            size: 'medium',
          },
        ]}
        mediaName="DAMN."
        artistName="Kendrick Lamar"
        listenersCount={500000}
        playCount={200000}
      />
    );

    // Artist Name must be in here
    expect(screen.getByText('Kendrick Lamar')).toBeInTheDocument();

    // Media Name must be in here
    expect(screen.getByText('DAMN.')).toBeInTheDocument();

    // Image must have the given url
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'
    );

    // Image should have 'Kendrick Lamar - DAMN.' alt text
    expect(screen.getByRole('img')).toHaveAccessibleName(
      'Kendrick Lamar - DAMN.'
    );

    // Image must have 'image--medium' class when size is 'medium'.
    expect(screen.getByRole('img')).toHaveClass('image--medium');

    // Tests the listenersCount prop. It must be converted to Turkish number format
    expect(screen.getByText('500.000')).toBeInTheDocument();

    // Tests the playCount prop. It must be converted to Turkish number format
    expect(screen.getByText('200.000')).toBeInTheDocument();
  });

  test('Renders MediaCard Component Without Image, ListenersCount and PlayCount', () => {
    render(<MediaCard id="1" mediaName="DAMN." artistName="Kendrick Lamar" />);

    // Artist Name must be in here
    expect(screen.getByText('Kendrick Lamar')).toBeInTheDocument();

    // Media Name must be in here
    expect(screen.getByText('DAMN.')).toBeInTheDocument();

    // Image will be in the content but It should contain placeholder image url.
    expect(screen.getByRole('img')).toHaveAttribute('src', 'placeholder.png');

    // Image should have 'Kendrick Lamar - DAMN.' alt text
    expect(screen.getByRole('img')).toHaveAccessibleName(
      'Kendrick Lamar - DAMN.'
    );

    // Image must have 'image--medium' class when size is 'medium'.
    expect(screen.getByRole('img')).toHaveClass('image--medium');

    // There shouldn't be any Count component.
    expect(screen.queryByTestId('counts')).not.toBeInTheDocument();
  });
});
