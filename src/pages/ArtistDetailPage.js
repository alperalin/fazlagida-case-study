import { useParams } from 'react-router-dom';

function ArtistDetailPage() {
  const { artistName } = useParams();

  return <div>{artistName}</div>;
}

export default ArtistDetailPage;
