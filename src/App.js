import React from 'react'
import "./App.css"
import List from './component/List';
// import {BsTrash} from "react-icons/bs";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItem: {
        text: "",
        key: ""
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.setUpDate = this.setUpDate.bind(this);
  }

  handleInput(e) {
    this.setState({
      currentItem: {
        text: e.target.value,
        key: Date.now()
      }
    })
  }

  addItem(e) {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
      const newItems = [...this.state.items, newItem];
      this.setState({
        items: newItems,
        currentItem: {
          text: "",
          key: ""
        }
      })
    }
  }

  deleteItem(key) {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
      items: filteredItems
    })
  }

  setUpDate(text, key) {
    const items = this.state.items;
    items.map(item => {
      if (item.key===key) {
        item.text = text;
      }
    })
    this.setState({
      items: items
    })
  }
  render() {
    return (
      <div className='App'>
        <header className='input-container'>
          <form id='toDoForm' onSubmit={this.addItem}>
            <input type='text' placeholder='Enter Text' value={this.state.currentItem.text} onChange={this.handleInput} />
            <button type='submit'>Add</button>
          </form>
        </header >
        <List items={this.state.items} deleteItem={this.deleteItem} setUpDate={this.setUpDate} >
        </List>
      </div>
    )
  }
}

export default App;
