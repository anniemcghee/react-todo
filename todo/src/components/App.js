import React, { Component } from 'react';
import '../App.css';
import base from '../base';
import AddNewList from './AddNewList'
import List from './List'
import { observer } from "mobx-react";
import { observable } from "mobx";

@observer
class App extends Component {
  @observable lists = {};

  addNewList = (key, title) => {
    this.lists[key] = { title: title, items: [] };
  }

  addNewListItem = (key, listKey, content) => {
    this.lists[listKey].items.push({ key: key, content: content, status: 'todo'});
  }

  editListTitle = (listKey, title) => {
    this.lists[listKey].title = title;
  }

  editListItem = (listKey, index, content) => {
    this.lists[listKey].items[index].content = content;
  }

  markItemComplete = (listKey, index) => {
    this.lists[listKey].items[index].status = 'complete';
  }

  deleteListItem = (listKey, index) => {
    this.lists[listKey].items.splice(index, 1);
  }

  markAllItemsComplete = (listKey) => {
    this.lists[listKey].items.map(item => (
      item.status = 'complete'
    ));
  }

  removeAllItemsInList = (listKey) => {
    const itemsArray = this.lists[listKey].items;

    itemsArray.splice(0, itemsArray.length);
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
          {Object.keys(this.lists).map(key => (
            <div className='col-sm-4'>
              <List
                key={key}
                listKey={key}
                listTitle={this.lists[key].title}
                listItems={this.lists[key].items}
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
