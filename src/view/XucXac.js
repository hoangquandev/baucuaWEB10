import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionType from "../redux/action/action";

class XucXac extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {this.props.xucXac.map((item, key) => {
            return (
              <div style={{ width: "100px", border: "1px solid" }} key={key}>
                <img key={key} src={item.hinhAnh} style={{ width: "100%" }} />
              </div>
            );
          })}
        </div>
        <button
          onClick={() => {
            this.props.playGame();
          }}
        >
          Play Game
        </button>
        <div>Tai Khoan:{this.props.tongTien}</div>
      </div>
    );
  }
}

// lấy dữ liệu từ kho stateInit=100 => stateAfter=90
const mapStateToProps = (state) => {
  return {
    //ten state : du lieu lay duoc tu kho
    xucXac: state.bauCuaTomCaReducer.xucXac,
    tongTien: state.bauCuaTomCaReducer.tongTien,
  };
};

// nhận action người dùng khi click (play game)
const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      dispatch(actionType.playGameAction());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(XucXac);
