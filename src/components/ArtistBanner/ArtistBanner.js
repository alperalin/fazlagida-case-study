// Components
import Image from '../Image/Image';

// Style
import './ArtistBanner.scss';

// Element
function ArtistBanner({ img, artistName }) {
  return (
    <div className="artistBanner">
      {/* <Image src={img.src} alt={img.alt} /> */}
      <h3>{artistName}</h3>
    </div>
  );
}

export default ArtistBanner;
