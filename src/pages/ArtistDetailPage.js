import { useParams } from 'react-router-dom';

function ArtistDetailPage() {
  const { artistId } = useParams();

  return <div>{artistId}</div>;
}

export default ArtistDetailPage;
