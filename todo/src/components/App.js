import React, { Component } from 'react';
import '../App.css';
import base from '../base';
import AddNewList from './AddNewList'
import List from './List'


//NEXT THINGS:
// fix the delete bug splicing out the wrong thing eek
// add validations for not adding empty list item or lists
// -firebase sync


class App extends Component {
  state = {
    lists: {}
  }

  addNewList = (key, title) => {
    const lists = {...this.state.lists};

    lists[key] = { title: title, items: [] };

    this.setState({
      lists: lists
    })
  }

  addNewListItem = (key, listKey, content) => {
    const lists = {...this.state.lists};

    lists[listKey].items.push({ key: key, content: content, status: 'todo'});

    this.setState({
      lists: lists
    })
  }

  editListTitle = (listKey, title) => {
    const lists = {...this.state.lists};

    lists[listKey].title = title;

    this.setState({
      lists: lists
    })
  }

  editListItem = (listKey, index, content) => {
    const lists = {...this.state.lists};

    lists[listKey].items[index].content = content;

    this.setState({
      lists: lists
    })
  }

  markItemComplete = (listKey, index) => {
    const lists = {...this.state.lists};

    lists[listKey].items[index].status = 'complete';

    this.setState({
      lists: lists
    })
  }

  deleteListItem = (listKey, index) => {
    const lists = {...this.state.lists};

    lists[listKey].items.splice(index, 1);

    this.setState({
      lists: lists
    })
  }

  markAllItemsComplete = (listKey) => {
    const lists = {...this.state.lists};

    lists[listKey].items.map(item => (
      item.status = 'complete'
    ));

    this.setState({
      lists: lists
    })
  }

  removeAllItemsInList = (listKey) => {
    const lists = {...this.state.lists};
    const itemsArray = lists[listKey].items;

    itemsArray.splice(0, itemsArray.length);

    this.setState({
      lists: lists
    })
  }

  // componentDidMount() {
  //   console.log('mounted');
  //   this.ref = base.syncState('lists', {
  //     context: this,
  //     state: 'lists'
  //   });
  // }
  //
  // componentWillUnmount() {
  //   base.removeBinding(this.ref);
  // }

  render() {
    return (
      <React.Fragment>
        <div className="container sidebar">
          <AddNewList addNewList={this.addNewList}/>
        </div>


        <div className="container">
          <div className='row'>
          {Object.keys(this.state.lists).map(key => (
            <div className='col-sm-4'>
              <List
                key={key}
                listKey={key}
                listTitle={this.state.lists[key].title}
                listItems={this.state.lists[key].items}
                editListTitle={this.editListTitle}
                editListItem={this.editListItem}
                addNewListItem={this.addNewListItem}
                markItemComplete={this.markItemComplete}
                deleteListItem={this.deleteListItem}
                markAllItemsComplete={this.markAllItemsComplete}
                removeAllItemsInList={this.removeAllItemsInList}
              />
            </div>
          ))}
        </div>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
