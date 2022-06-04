// Imports
import { useState } from 'react';
import PropTypes from 'prop-types';

// Styles
import './ThemeButton.scss';

// Element
function ThemeButton({ theme, onClick }) {
  // const [status, setStatus] = useState(false);

  function handleClick() {
    // setStatus((prev) => !prev);
    onClick();
  }

  return (
    <button
      type="button"
      className={`themeButton${theme === 'dark' ? ' themeButton--opened' : ''}`}
      onClick={handleClick}
    >
      <span className="themeButton__light">L</span>
      <span className="themeButton__dark">D</span>
      <span className="themeButton__wheel">wheel</span>
    </button>
  );
}

ThemeButton.propTypes = {
  theme: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
