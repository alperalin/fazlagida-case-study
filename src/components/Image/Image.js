// Styles
import './Image.scss';

// Element
function Image({ src, alt, size = 'small', ...props }) {
  return (
    <img
      className={`image${size ? ` image-${size}` : ''}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

export default Image;
