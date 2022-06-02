// Imports
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useAppContext } from '../context/AppContext';

//Components
import List from '../components/List/List';
import ArtistBanner from '../components/ArtistBanner/ArtistBanner';
import MediaCard from '../components/MediaCard/MediaCard';

// API
import { getTopAlbums, getTopTracks } from '../api/endpoints';

// Page
function ArtistDetailPage() {
  const { artistId } = useParams();
  const { state } = useAppContext();

  const {
    isLoading: taIsLoading,
    isError: taIsError,
    data: taData,
    error: taError,
  } = useQuery('artistsTopAlbums', () => getTopAlbums(artistId));

  const {
    isLoading: ttIsLoading,
    isError: ttIsError,
    data: ttData,
    error: ttError,
  } = useQuery('artistsTopTracks', () => getTopTracks(artistId));

  if (taIsLoading || ttIsLoading) return <span>Loading...</span>;

  if (taIsError || ttIsError)
    return (
      <span>{`An error has occurred: ${
        taError.message || ttError.message
      }`}</span>
    );

  return (
    <div>
      <ArtistBanner
        imageSize={state?.currentArtist?.image[2]['size']}
        imageSrc={state?.currentArtist?.image[2]['#text']}
        artistName={state?.currentArtist?.artistName}
      />

      <List title="Top Albums">
        {taData?.data?.topalbums.album.length > 0 &&
          taData.data.topalbums.album.map((album, index) => (
            <MediaCard
              key={index}
              image={album.image}
              mediaName={album.name}
              artistName={album.artist.name}
              playCount={album.playcount}
            />
          ))}
      </List>

      <List title="Top Tracks">
        {ttData?.data?.toptracks.track.length > 0 &&
          ttData.data.toptracks.track.map((track) => (
            <MediaCard
              key={track.mbid}
              image={track.image}
              mediaName={track.name}
              artistName={track.artist.name}
              listeners={track.listeners}
              playCount={track.playcount}
            />
          ))}
      </List>
    </div>
  );
}

export default ArtistDetailPage;
