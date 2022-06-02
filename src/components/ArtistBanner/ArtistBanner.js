// Components
import Image from '../Image/Image';

// Style
import './ArtistBanner.scss';

// Element
function ArtistBanner({ imageSrc, imageSize, artistName }) {
  return (
    <div className="artistBanner">
      <Image size={imageSize} src={imageSrc} alt={artistName} />
      <h3>{artistName}</h3>
    </div>
  );
}

export default ArtistBanner;
