// Imports
import { Outlet } from 'react-router-dom';

// Components
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Element
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
