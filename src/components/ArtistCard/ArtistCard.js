// imports
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

// Components
import Image from '../Image/Image';
import Counts from '../Counts/Counts';

// Style
import './ArtistCard.scss';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function ArtistCard({ id, image, artistName, listenersCount, playCount }) {
  // State And Router
  const [currentArtist, setCurrentArtist] = useOutletContext();
  const navigate = useNavigate();

  // Function
  function handleClick(event, id, artistName, image) {
    event.preventDefault();
    const address = event.currentTarget.pathname;
    setCurrentArtist({ id, artistName, image });
    navigate(address);
  }

  // Element
  return (
    <div className="artistCard">
      <div className="artistCard__info col-xs-6">
        <Image
          className="artistCard__image"
          size="medium"
          src={image ? image[1]['#text'] : placeholderImage}
          alt={artistName}
        />
        <div className="artistCard__name-container">
          <span className="artistCard__title">Artist</span>
          <h3 className="artistCard__name">{artistName}</h3>
        </div>
      </div>
      <div className="artistCard__counts col-xs-6">
        {listenersCount && (
          <Counts type="listeners" count={parseInt(listenersCount)} />
        )}
        {playCount && <Counts type="playCount" count={parseInt(playCount)} />}
      </div>
      <Link
        className="artistCard__link"
        to={`artists/${encodeURI(artistName)}`}
        onClick={(e) => handleClick(e, id, artistName, image)}
      >
        Go To Artist Details
      </Link>
    </div>
  );
}

export default ArtistCard;
