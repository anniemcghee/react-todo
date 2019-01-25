import React from 'react';

class AddListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    //console.log(this.props.listKey);
    const key = Date.now()
    this.props.addNewListItem(key, this.props.listKey, this.input.current.value);
    this.input.current.value = '';
  }


  render() {
    return (
      <li className="list-group-item">
        <form onSubmit={this.handleSubmit}>
          <button type='submit' className="btn btn-link">+</button>
          <input className='content-to-add' ref={this.input} />
        </form>
      </li>
    )
  }
}

export default AddListItem;
