// imports
import { Link } from 'react-router-dom';

// Components
import Image from '../Image/Image';

// Style
import './ArtistCard.scss';

// Element
function ArtistCard({ id, image, artistName, listeners, playCount }) {
  return (
    <Link className="artistCard" to={`artists/${id}`}>
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
