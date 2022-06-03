// imports
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

// Components
import Image from '../Image/Image';

// Style
import './ArtistCard.scss';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function ArtistCard({ id, image, artistName, listeners, playCount }) {
  const [currentArtist, setCurrentArtist] = useOutletContext();

  const navigate = useNavigate();

  function handleClick(event, id, artistName, image) {
    event.preventDefault();
    const address = event.currentTarget.pathname;
    setCurrentArtist({ id, artistName, image });
    navigate(address);
  }

  return (
    <div className="artistCard">
      <div className="artistCard__info">
        <Image
          size="medium"
          src={image ? image[1]['#text'] : placeholderImage}
          alt={artistName}
        />
        <span>Artist</span>
        <h3>{artistName}</h3>
      </div>
      <div className="artistCard__counts">
        <span>listeners: {listeners}</span>
        <span>play: {playCount}</span>
      </div>
      <Link
        className="artistCard"
        to={`artists/${encodeURI(artistName)}`}
        onClick={(e) => handleClick(e, id, artistName, image)}
      ></Link>
    </div>
  );
}

export default ArtistCard;
