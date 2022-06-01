// Style
import './List.scss';

// Element
function List({ title, children }) {
  return (
    <div className="list">
      {title && <h2 className="list__title">{title}</h2>}
      <div className="list__items">{children}</div>
    </div>
  );
}

export default List;
