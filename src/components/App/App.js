import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

// Components
import Header from '../Header/Header';

// Style
import './App.scss';

// Element
function App() {
  // States
  const prefersLightMQ = '(prefers-color-scheme: light)';

  const [theme, setTheme] = useState(
    window.matchMedia(prefersLightMQ).matches
      ? 'light'
      : 'dark' || window.localStorage.getItem('theme') || 'light'
  );

  const [currentArtist, setCurrentArtist] = useState(
    () => JSON.parse(window.localStorage.getItem('currentArtist')) || ''
  );

  // Use Effect
  // Keeps track of OS theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia(prefersLightMQ);
    const handleChange = () => {
      setTheme(mediaQuery.matches ? 'light' : 'dark');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // When theme state changes
  // It sets theme value to localStorage
  // And changes body element's class
  useEffect(() => {
    window.localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  // Sets clicked artist to localStorage
  useEffect(() => {
    window.localStorage.setItem('currentArtist', JSON.stringify(currentArtist));
  }, [currentArtist]);

  // APP
  return (
    <section className="app">
      <Header onSetTheme={setTheme} />
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
