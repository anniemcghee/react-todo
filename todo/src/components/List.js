import React from 'react';
import ListTitle from './ListTitle';
import ListItem from './ListItem';
import AddListItem from './AddListItem';
import ListControls from './ListControls';

class List extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          <ListTitle
            listKey={this.props.listKey}
            listTitle={this.props.listTitle}
            editListTitle={this.props.editListTitle}/>
          {this.props.listItems.map((item, index) => (
            <ListItem
              key={ `${this.props.listKey}-${index}`}
              index={index}
              listKey={this.props.listKey}
              content={item.content}
              status={item.status}
              markItemComplete={this.props.markItemComplete}
              editListItem={this.props.editListItem}
              deleteListItem={this.props.deleteListItem}/>
          ))}

          <AddListItem
            listKey={this.props.listKey}
            addNewListItem={this.props.addNewListItem}/>
        </ul>
        <ListControls
          listItems={this.props.listItems}
          listKey={this.props.listKey}
          markAllItemsComplete={this.props.markAllItemsComplete}
          removeAllItemsInList={this.props.removeAllItemsInList}/>
      </React.Fragment>
    )
  }
}

export default List;
