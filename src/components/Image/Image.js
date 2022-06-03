// Styles
import './Image.scss';

// Element
function Image({ src, alt, size = 'small', className = '', ...props }) {
  const sizeClassName = size ? `image-${size}` : '';

  return (
    <img
      className={`image ${sizeClassName} ${className}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
}

export default Image;
