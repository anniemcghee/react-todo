import React from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import AddListItem from './AddListItem';
import ListControls from './ListControls';

class List extends React.Component {
  render() {
    return (
      <div className='container'>
        <ul className="list-group">
          <ListTitle listTitle={this.props.listTitle}/>
          {this.props.listItems.map((item, index) => (
            <ListItem
              key={index}
              index={index}
              listKey={this.props.listKey}
              content={item.content}
              deleteListItem={this.props.deleteListItem}/>
          ))}

          <AddListItem
            listKey={this.props.listKey}
            addNewListItem={this.props.addNewListItem}/>
        </ul>
        <ListControls />
      </div>
    )
  }
}

export default List;
