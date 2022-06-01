// Imports
import { useQuery } from 'react-query';

//Components
import List from '../List/List';
import ArtistCard from '../ArtistCard/ArtistCard';

// API
import { getTopArtists } from '../../api/endpoints';

function Homepage() {
  const { isLoading, error, data } = useQuery('topArtists', () =>
    getTopArtists(1).then((res) => res.data)
  );

  if (isLoading) return 'Loading...';

  if (error) return `An error has occurred: ${error.message}`;

  return (
    <List>
      <h2>Top Artists List</h2>
      {data.artists.artist.length > 0 &&
        data.artists.artist.map((artist) => (
          <ArtistCard
            key={artist.mbid}
            image={artist.image[1]}
            artistName={artist.name}
            listeners={artist.listeners}
            playCount={artist.playcount}
          />
        ))}
    </List>
  );
}

export default Homepage;
