// Imports
import PropTypes from 'prop-types';
import numberFormatter from '../../utils/scripts/numberFormatter';

// Styles
import './Counts.scss';

// Element
function Counts({ type, count = 0 }) {
  return (
    <div
      className="counts"
      data-testid="counts"
      title={`${type === 'listeners' ? 'listener count' : 'play count'}`}
    >
      <span className="counts__icon" data-testid="counts-icon">
        {type === 'listeners' ? (
          <svg aria-label="listener count icon" viewBox="0 0 96 96">
            <path d="M84,43.1052V42a36,36,0,0,0-72,0v1.1052A17.971,17.971,0,0,0,0,60V72A18.02,18.02,0,0,0,18,90a5.9966,5.9966,0,0,0,6-6V42a24,24,0,0,1,48,0V84a5.9966,5.9966,0,0,0,6,6A18.02,18.02,0,0,0,96,72V60A17.971,17.971,0,0,0,84,43.1052Z" />
          </svg>
        ) : (
          <svg aria-label="play count icon" viewBox="0 0 512 512">
            <path d="M405.2,232.9L126.8,67.2c-3.4-2-6.9-3.2-10.9-3.2c-10.9,0-19.8,9-19.8,20H96v344h0.1c0,11,8.9,20,19.8,20  c4.1,0,7.5-1.4,11.2-3.4l278.1-165.5c6.6-5.5,10.8-13.8,10.8-23.1C416,246.7,411.8,238.5,405.2,232.9z" />
          </svg>
        )}
      </span>
      <span className="counts__text">{numberFormatter(count)}</span>
    </div>
  );
}

Counts.propTypes = {
  type: PropTypes.oneOf(['listeners', 'playCount']).isRequired,
  count: PropTypes.number.isRequired,
};

export default Counts;
