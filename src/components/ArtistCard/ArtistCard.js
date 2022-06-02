// imports
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

// Components
import Image from '../Image/Image';

// Style
import './ArtistCard.scss';

// Element
function ArtistCard({ id, image, artistName, listeners, playCount }) {
  const { dispatches } = useAppContext();
  const navigate = useNavigate();

  function handleClick(event, id, artistName, image) {
    event.preventDefault();
    const address = event.currentTarget.pathname;
    dispatches.setCurrentArtist({ id, artistName, image });
    navigate(address);
  }

  return (
    <Link
      className="artistCard"
      onClick={(e) => handleClick(e, id, artistName, image)}
      to={`artists/${id}`}
    >
      <div className="artistCard__info">
        <Image
          size={image[1]['size']}
          src={image[1]['#text']}
          alt={artistName}
        />
        <span>Artist</span>
        <h3>{artistName}</h3>
      </div>
      <div className="artistCard__counts">
        <span>listeners: {listeners}</span>
        <span>play: {playCount}</span>
      </div>
    </Link>
  );
}

export default ArtistCard;
