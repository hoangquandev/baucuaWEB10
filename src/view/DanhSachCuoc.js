import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../redux/action/action";

class DanhSachCuoc extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", width: "1280px", margin: "0 auto" }}>
          {this.props.danhSachCuocs.map((datCuoc, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => {
                    this.props.datCuoc(datCuoc);
                  }}
                >
                  <img style={{ width: "100%" }} src={datCuoc.hinhAnh} alt="" />
                  {/* <span>{datCuoc.diemCuoc}</span> */}
                </button>
                <br />
                <span>{datCuoc.diemCuoc}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

// lấy dữ liệu từ kho stateInit=100 => stateAfter=90
const mapStateToProps = (state) => {
  return {
    //ten state : du lieu lay duoc tu kho
    //state.bauCuaTomCaReducer.danhSachCuoc,
    danhSachCuocs: state.bauCuaTomCaReducer.danhSachCuoc,
    //xucXac: state.bauCuaTomCaReducer.xucXac
    // tongTien: state.bauCuaTomCaReducer.tongTien
  };
};

// nhận action người dùng khi click (dat cuoc)
const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (datCuoc) => {
      dispatch(actionType.datCuocAction(datCuoc));
    },
    /**
     * playGame: () => {
      dispatch(actionType.playGameAction());
    },
     */
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DanhSachCuoc);
