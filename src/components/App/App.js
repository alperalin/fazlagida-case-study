//Components
import List from '../List/List';
import ArtistCard from '../ArtistCard/ArtistCard';
import Image from '../Image/Image';
import ArtistName from '../ArtistName/ArtistName';
import Listeners from '../Listeners/Listeners';
import PlayCount from '../PlayCount/PlayCount';
import ArtistBanner from '../ArtistBanner/ArtistBanner';
import MediaCard from '../MediaCard/MediaCard';

// Style
import './App.css';

// Element
function App() {
  return (
    <div className="App">
      <ArtistBanner>
        <Image src="./logo192.png" alt="React Logo" />
        <ArtistName />
      </ArtistBanner>

      <List>
        <h2>Top Artists List</h2>
        <ArtistCard>
          <Image src="./logo192.png" alt="React Logo" />
          <ArtistName />
          <Listeners />
          <PlayCount />
        </ArtistCard>

        <MediaCard>
          <Image src="./logo192.png" alt="React Logo" />
          <ArtistName />
          <Listeners />
          <PlayCount />
        </MediaCard>
      </List>
    </div>
  );
}

export default App;
