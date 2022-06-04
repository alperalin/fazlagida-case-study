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

export default Footer;
