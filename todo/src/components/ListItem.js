//if the item has focus, render the input version for updating
//if the item does not have focus, render the div
import React from 'react';

class ListItem extends React.Component {
  handleEdit = () => {

  }

  handleDelete = (event) => {
    event.preventDefault();

    this.props.deleteListItem(this.props.listKey, this.props.index);
  }

  render() {
    return (
      <li className="list-group-item">
        <button type="button" className="btn btn-link">Checkmark</button>
        <div className='list-content' contentEditable="true">{this.props.content}</div>
        <button type="button" className="btn btn-link" onClick={this.handleDelete}>X</button>
      </li>
    )
  }
}

export default ListItem;
