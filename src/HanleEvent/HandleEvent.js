import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = (name) => {
    console.log("Click me", name);
  };
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick("Danh")}>Click me</button>
      </div>
    );
  }
}
