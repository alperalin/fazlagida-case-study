import PropTypes from 'prop-types';

// Components
import Image from '../Image/Image';

// Styles
import './Header.scss';

// Element
function Header({ onSetTheme }) {
  // Functions
  function handleThemeChange() {
    onSetTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  // Return
  return (
    <header className="header">
      <Image size="small" src="./logo192.png" alt="React Logo" />
      <button type="button" onClick={handleThemeChange}>
        Change Theme
      </button>
    </header>
  );
}

Header.propTypes = {
  onSetTheme: PropTypes.func.isRequired,
};

export default Header;
