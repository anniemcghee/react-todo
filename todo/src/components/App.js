import React, { Component } from 'react';
import '../App.css';
import base from '../base';
import AddNewList from './AddNewList'
import List from './List'

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

    lists[listKey].items.push({ key: key, content: content});

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

//get new list title from add list and create an obj in stateless
//lists div will loop over the lists state obj and render a list for whatever is in there

  render() {
    return (
      <React.Fragment>
        <div className="container sidebar">
          <AddNewList addNewList={this.addNewList}/>
        </div>

        <div className="container lists-container">
        {Object.keys(this.state.lists).map(key => (
          <List
            key={key}
            listKey={key}
            listTitle={this.state.lists[key].title}
            listItems={this.state.lists[key].items}
            addNewListItem={this.addNewListItem}
            deleteListItem={this.deleteListItem}
          />
            ))}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
