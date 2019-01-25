import React from 'react';

class ListControls extends React.Component {
  render() {
    return (
      <div className='container'>
      <button type="button" className="btn btn-link">Mark All Done</button>
      <button type="button" className="btn btn-link">Remove All</button>
      </div>
    )
  }
}

export default ListControls;
