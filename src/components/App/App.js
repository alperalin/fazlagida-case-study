import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Image from '../Image/Image';

// Style
import './App.scss';

// Element
function App() {
  // States
  const [theme, setTheme] = useState(
    window.localStorage.getItem('theme') || 'light'
  );

  const [currentArtist, setCurrentArtist] = useState(
    () => JSON.parse(window.localStorage.getItem('currentArtist')) || ''
  );

  useEffect(() => {
    window.localStorage.setItem('currentArtist', JSON.stringify(currentArtist));
  }, [currentArtist]);

  useEffect(() => {
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function handleThemeChange() {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  return (
    <section className="app">
      <header className="app__header">
        <Image size="small" src="./logo192.png" alt="React Logo" />
        <button type="button" onClick={handleThemeChange}>
          Change Theme
        </button>
      </header>
      <main className="app__main">
        <Outlet context={[currentArtist, setCurrentArtist]} />
      </main>
      {/* <footer className="app__footer">
        <span>@2022 - Made by Alper ALIN</span>
      </footer> */}
    </section>
  );
}

export default App;
