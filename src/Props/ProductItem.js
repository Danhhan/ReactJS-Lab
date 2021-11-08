import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    return (
      <div className="card text-left" style={{ width: "300px" }}>
        <img className="card-img-top" src={this.props.item.image} alt={this.props.item.image} />
        <div className="card-body">
          <h4 className="card-title">{this.props.item.name}</h4>
          <p className="card-text">{this.props.item.price}</p>
          <button className="text-white w3-button w3-black">
            Add to cart <i class="fa fa-cart-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}
