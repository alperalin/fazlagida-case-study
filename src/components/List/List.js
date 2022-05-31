import React from 'react';

function List({ children }) {
  return (
    <div style={{ maxWidth: 500, border: '1px solid black', margin: '0 auto' }}>
      {children}
    </div>
  );
}

export default List;
