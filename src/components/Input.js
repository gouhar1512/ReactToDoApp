import React, { Component } from "react";

export default class Input extends Component {
  state = {
    text: "",
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.text);
    this.setState({
      text: "",
    });
  };

  onChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            placeholder="Enter items"
            className="input"
            value={this.state.text}
            onChange={this.onChange}
          />
          <input className="submit" type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
