import React, { Component } from "react";
import ListItem from "./ListItem";

class List extends Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.map((item) => (
          <ListItem
            key={item.id}
            value={item.value}
            removeItem={this.props.removeItem}
            itemkey={item.id}
          />
        ))}
      </div>
    );
  }
}

export default List;
