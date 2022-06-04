// Components
import Image from '../Image/Image';

// Style
import './ArtistBanner.scss';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function ArtistBanner({ image, artistName = '' }) {
  return (
    <div className="artistBanner">
      <Image
        size="large"
        className="artistBanner__image"
        src={image ? image[2]['#text'] : placeholderImage}
        alt={artistName}
      />
      <h2 className="artistBanner__name">{artistName}</h2>
    </div>
  );
}

export default ArtistBanner;
