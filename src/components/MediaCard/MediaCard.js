// Components
import Image from '../Image/Image';

// Placeholder image
import placeholderImage from '../../utils/images/placeholder.png';

// Element
function MediaCard({ image, mediaName, artistName, listeners, playCount }) {
  return (
    <div className="mediaCard">
      <div className="mediaCard__info">
        <Image
          size="medium"
          src={image ? image[1]['#text'] : placeholderImage}
          alt={mediaName}
        />
        <h3>{mediaName}</h3>
        <span>{artistName}</span>
      </div>
      <div className="mediaCard__counts">
        {listeners && <span>{listeners} listeners</span>}
        {playCount && <span>{playCount} play</span>}
      </div>
    </div>
  );
}

export default MediaCard;
