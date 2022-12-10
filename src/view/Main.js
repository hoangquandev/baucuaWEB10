import React, { Component } from "react";
import DanhSachCuoc from "./DanhSachCuoc";
import XucXac from "./XucXac";

export default class Main extends Component {
  render() {
    return (
      <div>
        <DanhSachCuoc />
        <XucXac />
      </div>
    );
  }
}
