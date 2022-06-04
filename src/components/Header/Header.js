// Imports
import PropTypes from 'prop-types';

// Components
import Logo from '../Logo/Logo';
import ThemeButton from '../ThemeButton/ThemeButton';

// Styles
import './Header.scss';

// Element
function Header({ theme, onSetTheme }) {
  // Functions
  function handleThemeChange() {
    onSetTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }

  // Return
  return (
    <header className="header">
      <div className="container">
        <div className="row middle-xs">
          <div className="header__left col-xs-6">
            <Logo />
          </div>
          <div className="header__right col-xs-6">
            <ThemeButton theme={theme} onClick={handleThemeChange} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  onSetTheme: PropTypes.func.isRequired,
};

export default Header;
