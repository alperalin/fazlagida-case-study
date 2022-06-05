// Imports
import { useParams, useOutletContext } from 'react-router-dom';
import { useQuery } from 'react-query';

//Components
import List from '../List/List';
import ArtistBanner from '../ArtistBanner/ArtistBanner';
import MediaCard from '../MediaCard/MediaCard';
import Spinner from '../Spinner/Spinner';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

// API
import { getTopAlbums, getTopTracks } from '../../api/endpoints';

// Page
function ArtistDetails() {
  const { artistUrl } = useParams();
  const [currentArtist, setCurrentArtist] = useOutletContext();

  // React Query
  const {
    isLoading: taIsLoading,
    isError: taIsError,
    data: taData,
    error: taError,
  } = useQuery('artistsTopAlbums', () => getTopAlbums(decodeURI(artistUrl)));

  const {
    isLoading: ttIsLoading,
    isError: ttIsError,
    data: ttData,
    error: ttError,
  } = useQuery('artistsTopTracks', () => getTopTracks(decodeURI(artistUrl)));

  if (taIsLoading || ttIsLoading) return <Spinner />;

  return (
    <>
      <div className="col-xs-12">
        <ArtistBanner
          imageSrc={currentArtist && currentArtist?.image[2]['#text']}
          artistName={currentArtist?.artistName || decodeURI(artistUrl)}
        />
      </div>

      <div className="col-md-6 col-xs-12">
        <List title="Top Albums">
          {taIsError ? (
            <ErrorMessage message={taError.message} />
          ) : (
            taData?.data?.topalbums.album.length > 0 &&
            taData.data.topalbums.album.map((album, index) => (
              <MediaCard
                key={index}
                image={album.image}
                mediaName={album.name}
                artistName={album.artist.name}
                playCount={parseInt(album.playcount)}
              />
            ))
          )}
        </List>
      </div>
      <div className="col-md-6 col-xs-12">
        <List title="Top Tracks">
          {ttIsError ? (
            <ErrorMessage message={ttIsError.message} />
          ) : (
            ttData?.data?.toptracks.track.length > 0 &&
            ttData.data.toptracks.track.map((track, index) => (
              <MediaCard
                key={index}
                image={track.image}
                mediaName={track.name}
                artistName={track.artist.name}
                listenersCount={parseInt(track.listeners)}
                playCount={parseInt(track.playcount)}
              />
            ))
          )}
        </List>
      </div>
    </>
  );
}

export default ArtistDetails;
