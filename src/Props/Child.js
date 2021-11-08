import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <img style={{ width: 500, height: 500 }} src={this.props.src} alt="" />
      </div>
    );
  }
}
