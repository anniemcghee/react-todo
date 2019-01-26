import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

class ListControls extends React.Component {
  removeAllItemsInList = () => {
    this.props.removeAllItemsInList(this.props.listKey);
  }

  markAllItemsComplete = () => {
    this.props.markAllItemsComplete(this.props.listKey);
  }

  render() {
    const listItems = this.props.listItems;
    return (
      <React.Fragment>
        {listItems.length > 1 &&
          <div className='container'>
            <button type="button" className="btn btn-link" onClick={this.markAllItemsComplete}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </button>
            <button type="button" className="btn btn-link" onClick={this.removeAllItemsInList}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        }
      </React.Fragment>
    )
  }
}

export default ListControls;
