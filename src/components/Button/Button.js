// Imports
import { forwardRef } from 'react';
import PropTypes from 'prop-types';

// Components
import Spinner from '../Spinner/Spinner';

// Styles
import './Button.scss';

// Element
const Button = forwardRef(
  (
    {
      children,
      variant = 'contained',
      alignCenter = false,
      isLoading = false,
      onClick,
    },
    ref
  ) => (
    <button
      ref={ref}
      className={`button button--${variant} ${
        alignCenter ? 'button--center' : ''
      }`}
      disabled={isLoading}
      onClick={onClick}
    >
      {isLoading ? <Spinner /> : children}
    </button>
  )
);

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['contained', 'outlined']),
  alignCenter: PropTypes.bool,
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
