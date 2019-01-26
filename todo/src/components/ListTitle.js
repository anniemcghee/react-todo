import React from 'react';
import ContentEditable from 'react-sane-contenteditable';

class ListTitle extends React.Component {
  handleEdit = (event, title) => {
    this.props.editListTitle(this.props.listKey, title);
  }

  render() {
    return (
      <header className='list-header'>
        <ContentEditable
          tagName="h1"
          className="list-title"
          content={this.props.listTitle}
          editable={true}
          maxLength={40}
          multiLine={false}
          onChange={this.handleEdit}
        />
      </header>
    )
  }
}

export default ListTitle;
