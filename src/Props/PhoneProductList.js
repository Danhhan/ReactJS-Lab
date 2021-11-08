import React, { Component } from "react";
import PhoneProduct from "./PhoneProduct";
export default class PhoneProductList extends Component {
  productList = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/applephone.jpg",
    },
  ];
  state = {
    producthetail: {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img/vsphone.jpg",
    },
  };
  renderProduct = () => {
    return this.productList?.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          {/* <div className="card text-left text-center">
            <img
              style={{ width: 250, height: 250, marginLeft: 50 }}
              className="card-img-top"
              src={product?.hinhAnh}
              alt={product?.hinhAnh}
            />
            <div className="card-body">
              <h4 className="card-title">{product?.tenSP}</h4>
              <p className="card-text">{product?.giaBan}</p>
              <button
                onClick={() => {
                  this.showProductDetail(product);
                }}
                className="btn btn-success"
              >
                Xem chi tiet
              </button>
            </div>
          </div> */}
          <PhoneProduct onShowDetail={this.showProductDetail} product={product} />
        </div>
      );
    });
  };
  showProductDetail = (product) => {
    this.setState({
      producthetail: product,
    });
  };
  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">Danh sach san pham</h3>
        <div className="row">{this.renderProduct()}</div>
        <div className="row">
          <div className="col-4">
            <h3>{this.state.producthetail.tenSP}</h3>
            <img
              style={{ width: "100%" }}
              src={this.state.producthetail.hinhAnh}
              alt={this.state.producthetail.hinhAnh}
            />
          </div>
          <div className="col-8">
            <h3>Thong so ky thuat</h3>
            <table class="table">
              <thead>
                <tr>
                  <th>Màn Hình</th>
                  <th>{this.state.producthetail.manHinh}</th>
                </tr>
                <tr>
                  <th>Hệ điều hành</th>
                  <th>{this.state.producthetail.heDieuHanh}</th>
                </tr>
                <tr>
                  <th>Camera trước</th>
                  <th>{this.state.producthetail.cameraTruoc}</th>
                </tr>
                <tr>
                  <th>Camera sau</th>
                  <th>{this.state.producthetail.cameraSau}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{this.state.producthetail.ram}</th>
                </tr>
                <tr>
                  <th>Rom</th>
                  <th>{this.state.producthetail.rom}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
