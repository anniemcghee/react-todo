import React from 'react';
//stateless functional component instead of full blown component
const ListTitle = (props) => (
  <header className='list-header'>
    <h1>{props.listTitle}</h1>
  </header>
);

export default ListTitle;
