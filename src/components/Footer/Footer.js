// Imports
import PropTypes from 'prop-types';

// Style
import './Footer.scss';

// Element
function Footer({ text }) {
  return (
    <footer className="footer col-xs-12">
      <span>{text}</span>
    </footer>
  );
}

Footer.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Footer;
