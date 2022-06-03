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
        src={image ? image[2]['#text'] : placeholderImage}
        alt={artistName}
      />
      <h3>{artistName}</h3>
    </div>
  );
}

export default ArtistBanner;
