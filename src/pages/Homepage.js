// Imports
import { useQuery } from 'react-query';

//Components
import List from '../components/List/List';
import ArtistCard from '../components/ArtistCard/ArtistCard';

// API
import { getTopArtists } from '../api/endpoints';

// Page
function Homepage() {
  const { isLoading, isError, data, error } = useQuery('topArtists', () =>
    getTopArtists(1).then((res) => res.data)
  );

  if (isLoading) return <span>Loading...</span>;

  if (isError) return <span>{`An error has occurred: ${error.message}`}</span>;

  return (
    <List title="Top Artists List">
      {data.artists.artist.length > 0 &&
        data.artists.artist.map((artist) => (
          <ArtistCard
            key={artist.mbid}
            id={artist.mbid}
            image={artist.image}
            artistName={artist.name}
            listeners={artist.listeners}
            playCount={artist.playcount}
          />
        ))}
    </List>
  );
}

export default Homepage;
