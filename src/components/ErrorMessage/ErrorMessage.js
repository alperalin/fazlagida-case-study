// Imports
import PropTypes from 'prop-types';

// Styles
import './ErrorMessage.scss';

// Element
function ErrorMessage({ message }) {
  return (
    <div
      className="errorMessage"
      title="Error Message"
      data-testid="error-message"
    >
      <span className="errorMessage__text">
        Something went wrong: {message}
      </span>
    </div>
  );
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorMessage;
