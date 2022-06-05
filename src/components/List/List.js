// Imports
import PropTypes from 'prop-types';

// Style
import './List.scss';

// Element
function List({ title, children }) {
  return (
    <div className="list">
      <h2 className="list__title">{title}</h2>
      <div className="list__items">{children}</div>
    </div>
  );
}

Image.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default List;
