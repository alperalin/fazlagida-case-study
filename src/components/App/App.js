// Components
import { Outlet } from 'react-router-dom';

// Style
import './App.scss';

// Element
function App() {
  return (
    <>
      <header className="appHeader">
        <img src="./logo192.png" width={50} height={50} alt="React Logo" />
      </header>
      <Outlet />
      <footer className="appFooter">hello</footer>
    </>
  );
}

export default App;
