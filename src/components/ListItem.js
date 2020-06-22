import React, { Component } from "react";

class ListItem extends Component {
  render() {
    const { value, itemkey } = this.props;
    return (
      <div className="list-item">
        <div className="content">{value}</div>
        <div className="actions">
          <button className="btn edit">Edit</button>
          <button
            className="btn remove"
            itemkey={itemkey}
            onClick={this.props.removeItem}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default ListItem;
