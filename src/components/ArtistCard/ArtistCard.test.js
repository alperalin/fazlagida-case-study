import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import ArtistCard from './ArtistCard';

describe('ArtistCard', () => {
  test('Renders ArtistCard Component', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArtistCard
          id="1"
          image={[
            '1',
            {
              '#text':
                'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png',
              size: 'medium',
            },
          ]}
          artistName="Kendrick Lamar"
          listenersCount={500000}
          playCount={200000}
        />
      </MemoryRouter>
    );

    // Artist Name must be in here
    expect(screen.getByText('Kendrick Lamar')).toBeInTheDocument();

    // Image must have the given url
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://lastfm.freetls.fastly.net/i/u/64s/2a96cbd8b46e442fc41c2b86b821562f.png'
    );

    // Image should have 'Kendrick Lamar' alt text
    expect(screen.getByRole('img')).toHaveAccessibleName('Kendrick Lamar');

    // Image must have 'image--medium' class when size is 'medium'.
    expect(screen.getByRole('img')).toHaveClass('image--medium');

    // Tests the listenersCount prop. It must be converted to Turkish number format
    expect(screen.getByText('500.000')).toBeInTheDocument();

    // Tests the playCount prop. It must be converted to Turkish number format
    expect(screen.getByText('200.000')).toBeInTheDocument();

    // Tests the react router's Link component
    expect(screen.getByRole('link')).toBeInTheDocument();

    // Link's href should be encodedURI of Artist Name
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/artists/${encodeURI('Kendrick Lamar')}`
    );

    // Link should contain 'Go To Artist Details' text
    expect(screen.getByRole('link')).toContainHTML('Go To Artist Details');
  });

  test('Renders ArtistCard Component Without Image, ListenersCount and PlayCount', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <ArtistCard id="1" artistName="Kendrick Lamar" />
      </MemoryRouter>
    );

    // Artist Name must be in here
    expect(screen.getByText('Kendrick Lamar')).toBeInTheDocument();

    // Image will be in the content but It should contain placeholder image url.
    expect(screen.getByRole('img')).toHaveAttribute('src', 'placeholder.png');

    // Image should have 'Kendrick Lamar' alt text
    expect(screen.getByRole('img')).toHaveAccessibleName('Kendrick Lamar');

    // Image must have 'image--medium' class when size is 'medium'.
    expect(screen.getByRole('img')).toHaveClass('image--medium');

    // There shouldn't be any Count component.
    expect(screen.queryByTestId('counts')).not.toBeInTheDocument();

    // Tests the react router's Link component
    expect(screen.getByRole('link')).toBeInTheDocument();

    // Link's href should be encodedURI of Artist Name
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/artists/${encodeURI('Kendrick Lamar')}`
    );

    // Link should contain 'Go To Artist Details' text
    expect(screen.getByRole('link')).toContainHTML('Go To Artist Details');
  });
});
