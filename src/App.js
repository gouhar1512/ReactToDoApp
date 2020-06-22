import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

class App extends Component {
  state = {
    items: [],
  };

  addItem = (item) => {
    let updatedItems = this.state.items;
    let new_value = item;

    updatedItems.push({
      id: Date.now(),
      value: new_value,
    });

    this.setState({
      items: updatedItems,
    });
  };

  removeItem = (e) => {
    let targetItem = e.target.getAttribute("itemkey");
    let updatedItems = this.state.items;
    for (let i = 0; i < updatedItems.length; i++) {
      if (updatedItems[i].id == targetItem) {
        updatedItems.splice(i, 1);
        console.log("removed");
        break;
      }
    }

    this.setState({
      items: updatedItems,
    });
  };

  render() {
    return (
      <div className="App">
        <Input addItem={this.addItem} />
        <List items={this.state.items} removeItem={this.removeItem} />
      </div>
    );
  }
}

export default App;
