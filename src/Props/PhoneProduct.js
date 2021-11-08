import React, { Component } from "react";

export default class PhoneProduct extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card text-left text-center">
        <img
          style={{ width: 250, height: 250, marginLeft: 50 }}
          className="card-img-top"
          src={product?.hinhAnh}
          alt={product?.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <p className="card-text">{product?.giaBan.toLocaleString()}</p>
          <button
            onClick={() => this.props.onShowDetail(product)}
            className="btn btn-success"
          >
            Xem chi tiet
          </button>
        </div>
      </div>
    );
  }
}
