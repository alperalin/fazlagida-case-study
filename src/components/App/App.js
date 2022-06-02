import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

// Components
import Image from '../Image/Image';

// Style
import './App.scss';

// Element
function App() {
  // context
  const { dispatches } = useAppContext();

  function handleThemeChange() {
    dispatches.setTheme();
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
        <Outlet />
      </main>
      {/* <footer className="app__footer">
        <span>@2022 - Made by Alper ALIN</span>
      </footer> */}
    </section>
  );
}

export default App;
