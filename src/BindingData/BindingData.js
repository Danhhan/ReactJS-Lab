import React, { Component } from "react";

export default class BindingData extends Component {
  // property
  name = "Danh Han";
  // property object student
  student = {
    name: "Danh Han 1",
    age: 20,
  };
  // Bindging with function (method)
  rederImage = () => {
    return (
      <img src="https://genk.mediacdn.vn/thumb_w/690/2019/12/12/11-1575883882-width650height762-1576168363318789958220.jpg" />
    );
  };
  renderMultiComponent = () => {
    // const virus = {
    //     id: 1,
    //     name: 'Covid-19',
    //     alias: 'chineses virus'
    // }
  };
  render() {
    const school = "CyberLearn";
    return (
      <div>
        <h1>React class componet</h1>
        <hr />
        <h1>
          Hello {this.name} - school: {school}
        </h1>
        <hr />
        <h1>Binding object</h1>
        <h1>
          name {this.student.name} - age: {this.student.age}
        </h1>
        <h3>Binding function </h3>
        {this.rederImage()}
      </div>
    );
  }
}
