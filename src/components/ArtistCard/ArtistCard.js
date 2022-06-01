import Image from '../Image/Image';

function ArtistCard({ image, artistName, listeners, playCount }) {
  return (
    <div className="artistCard">
      <div className="artistCard__info">
        <Image src={image['#text']} alt={artistName} />
        <h3>{artistName}</h3>
      </div>
      <div className="artistCard__counts">
        <span>{listeners} listeners</span>
        <span>{playCount} play</span>
      </div>
    </div>
  );
}

export default ArtistCard;
