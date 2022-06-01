import { Outlet } from 'react-router-dom';

// Components
import Image from '../Image/Image';

// Style
import './App.scss';

// Element
function App() {
  return (
    <>
      <header className="app__header">
        <Image size="small" src="./logo192.png" alt="React Logo" />
      </header>
      <main className="app__main">
        <Outlet />
      </main>
      <footer className="app__footer">
        <span>@2022 - Made by Alper ALIN</span>
      </footer>
    </>
  );
}

export default App;
