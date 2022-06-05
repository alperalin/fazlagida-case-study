// Imports
import PropTypes from 'prop-types';

// Styles
import './ThemeButton.scss';

// Element
function ThemeButton({ theme, onClick }) {
  // Render
  return (
    <button
      type="button"
      title="Light and dark theme changer button"
      className={`themeButton${theme === 'dark' ? ' themeButton--opened' : ''}`}
      onClick={onClick}
    >
      <span className="themeButton__light" aria-label="Light">
        L
      </span>
      <span className="themeButton__dark" aria-label="Dark">
        D
      </span>
      <span className="themeButton__wheel" aria-label="Wheel">
        wheel
      </span>
    </button>
  );
}

ThemeButton.propTypes = {
  theme: PropTypes.oneOf(['light', 'dark']).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ThemeButton;
