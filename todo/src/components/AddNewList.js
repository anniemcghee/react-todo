import React from 'react';

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
        <button className="btn btn-link" type='submit'>+</button>
        <input type="text" placeholder='new list name' ref={this.input} />
      </form>
    )
  }
}

export default AddNewList;
