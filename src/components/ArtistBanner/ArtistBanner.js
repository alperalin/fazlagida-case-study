// Imports
import PropTypes from 'prop-types';

// Components
import Image from '../Image/Image';

// Style
import './ArtistBanner.scss';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function ArtistBanner({ imageSrc, artistName }) {
  return (
    <div className="artistBanner">
      <Image
        size="large"
        className="artistBanner__image"
        src={imageSrc ? imageSrc : placeholderImage}
        alt={artistName}
      />
      <h2 className="artistBanner__name">{artistName}</h2>
    </div>
  );
}

ArtistBanner.propTypes = {
  imageSrc: PropTypes.string,
  artistName: PropTypes.string.isRequired,
};

export default ArtistBanner;
