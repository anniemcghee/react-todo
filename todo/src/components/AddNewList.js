import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

class AddNewList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    const key = Date.now()
    this.props.addNewList(key, this.input.current.value);
    this.input.current.value = '';
    event.preventDefault();
  }

// TODO:
  isSubmitButtonDisabled() {
    return this.input.current.value === '' ? `disabled` : '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button className="btn btn-link" type='submit'>
          <FontAwesomeIcon icon={faPlusCircle} />
        </button>
        <input type="text" placeholder='new list name' ref={this.input} />
      </form>
    )
  }
}

export default AddNewList;
