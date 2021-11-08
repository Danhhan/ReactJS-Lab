import React, { Component } from "react";
// import Child from "./Child";
import ChildFunctional from "./ChildFunctional";

export default class Parent extends Component {
  //   src =
  //     "https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png";
  product = {
    id: 1,
    name: "Bitis hunter x2",
    src: "https://www.freecodecamp.org/news/content/images/2019/07/panel-1-1.png",
    desc: "Bla, Bla ...."
  };
  render() {
    return (
      <div>
        <ChildFunctional product={this.product} />
      </div>
    );
  }
}
