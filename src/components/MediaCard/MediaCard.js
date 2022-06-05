// Imports
import PropTypes from 'prop-types';

// Components
import Image from '../Image/Image';
import Counts from '../Counts/Counts';

// Style
import './MediaCard.scss';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function MediaCard({
  image,
  mediaName,
  artistName,
  listenersCount,
  playCount,
}) {
  return (
    <div className="mediaCard">
      <div className="mediaCard__info col-md-8 col-xs-6">
        <Image
          className="mediaCard__image"
          size="medium"
          src={image ? image[1]['#text'] : placeholderImage}
          alt={`${artistName} - ${mediaName}`}
        />
        <div className="mediaCard__name-container">
          <h3 className="mediaCard__title">{mediaName}</h3>
          <span className="mediaCard__name">{artistName}</span>
        </div>
      </div>
      <div className="mediaCard__counts col-md-4 col-xs-6">
        {listenersCount && (
          <Counts type="listeners" count={parseInt(listenersCount)} />
        )}
        {playCount && <Counts type="playCount" count={parseInt(playCount)} />}
      </div>
    </div>
  );
}

MediaCard.propTypes = {
  image: PropTypes.array,
  mediaName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  listenersCount: PropTypes.number,
  playCount: PropTypes.number,
};

export default MediaCard;
