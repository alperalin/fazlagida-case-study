// Imports
import PropTypes from 'prop-types';

// Styles
import './Image.scss';

// Element
function Image({ src, alt, size = 'small', className = '', ...props }) {
  const sizeClassName = size ? `image--${size}` : '';

  return (
    <img
      className={`image ${sizeClassName} ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Image;
