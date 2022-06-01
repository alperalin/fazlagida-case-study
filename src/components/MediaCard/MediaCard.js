import Image from '../Image/Image';

function MediaCard({ image, mediaName, artistName, listeners, playCount }) {
  return (
    <div className="mediaCard">
      <div className="mediaCard__info">
        <Image src={image} alt={mediaName} />
        <h3>{mediaName}</h3>
        <span>{artistName}</span>
      </div>
      <div className="mediaCard__counts">
        <span>{listeners} listeners</span>
        {playCount && <span>{playCount} play</span>}
      </div>
    </div>
  );
}

export default MediaCard;
