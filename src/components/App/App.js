//Components
import List from '../List/List';
import ArtistCard from '../ArtistCard/ArtistCard';
import ArtistBanner from '../ArtistBanner/ArtistBanner';
import MediaCard from '../MediaCard/MediaCard';

// Style
import './App.css';

// Element
function App() {
  return (
    <div className="App">
      <ArtistBanner
        img={{ src: './logo192.png', alt: 'React Logo' }}
        artistName="Kanye West"
      />

      <List>
        <h2>Top Artists List</h2>
        <ArtistCard
          img={{ src: './logo192.png', alt: 'React Logo' }}
          artistName="Kanye West"
          listeners="20000"
          playCount="24444"
        />

        <MediaCard
          image="./logo192.png"
          artistName="Kanye West"
          mediaName="Stronger"
          listeners="20000"
          playCount="24444"
        />
      </List>
    </div>
  );
}

export default App;
