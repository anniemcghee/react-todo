import React from 'react';
import ContentEditable from 'react-sane-contenteditable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons'

class ListItem extends React.Component {
  handleEdit = (event, value) => {
    this.props.editListItem(this.props.listKey, this.props.index, value);
  }

  handleDelete = (event) => {
    this.props.deleteListItem(this.props.listKey, this.props.index);
  }

  markItemComplete = () => {
    this.props.markItemComplete(this.props.listKey, this.props.index);
  }

  render() {
    const status = this.props.status;
    return (
      <li className={`list-group-item ${this.props.status}`}>
        <div className='row'>
        {status === 'todo'  &&
          <button type="button" className="btn btn-link" onClick={this.markItemComplete}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </button>
        }
        <ContentEditable
          tagName="div"
          className="list-content"
          content={this.props.content}
          editable={true}
          maxLength={140}
          multiLine={false}
          onChange={this.handleEdit}
        />
        <button type="button" className="btn btn-link" onClick={this.handleDelete}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        </div>
      </li>
    )
  }
}

export default ListItem;
