// Imports
import PropTypes from 'prop-types';

// Components
import Logo from '../Logo/Logo';
import ThemeButton from '../ThemeButton/ThemeButton';

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
      <div className="container">
        <div className="row middle-xs">
          <div className="header__left col-md-5 col-md-offset-1 col-xs-6">
            <Logo />
          </div>
          <div className="header__right col-md-5 col-xs-6">
            {/* <button type="button" onClick={handleThemeChange}>
              Change Theme
            </button> */}
            <ThemeButton onClick={handleThemeChange} />
          </div>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  onSetTheme: PropTypes.func.isRequired,
};

export default Header;
