const stateInit = {
  tongTien: 100,
  danhSachCuoc: [
    { ma: "bau", hinhAnh: "./bauCua/bau.PNG", diemCuoc: 0 },
    { ma: "cua", hinhAnh: "./bauCua/cua.PNG", diemCuoc: 0 },
    { ma: "tom", hinhAnh: "./bauCua/tom.PNG", diemCuoc: 0 },
    { ma: "ca", hinhAnh: "./bauCua/ca.PNG", diemCuoc: 0 },
    { ma: "nai", hinhAnh: "./bauCua/nai.PNG", diemCuoc: 0 },
    { ma: "ga", hinhAnh: "./bauCua/ga.PNG", diemCuoc: 0 },
  ],
  xucXac: [
    { ma: "bau", hinhAnh: "./bauCua/bau.PNG", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.PNG", diemCuoc: 0 },
    { ma: "bau", hinhAnh: "./bauCua/bau.PNG", diemCuoc: 0 },
  ],
};

const bauCuaTomCaReducer = (state = stateInit, action) => {
  switch (action.type) {
    case "DAT_CUOC":
      let danhSachCuocUpdate = [...state.danhSachCuoc];
      let index = danhSachCuocUpdate.findIndex(
        (datCuoc) => datCuoc.ma === action.datCuoc.ma
      );
      if (index !== -1) {
        if (state.tongTien > 0) {
          danhSachCuocUpdate[index].diemCuoc += 10;
          console.log(danhSachCuocUpdate[index].diemCuoc);
          state.tongTien -= 10;
        }
      }
      return { ...state, danhSachCuoc: danhSachCuocUpdate };
    case "PLAY_GAME":
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        let soNgauNhien = Math.floor(Math.random() * 6);
        let xucXacNgauNhien = {
          ma: state.danhSachCuoc[soNgauNhien].ma,
          hinhAnh: state.danhSachCuoc[soNgauNhien].hinhAnh,
        };
        mangXucXacNgauNhien.push(xucXacNgauNhien);
      }
      //   tăng tiền
      mangXucXacNgauNhien.forEach((xucXac, index) => {
        let indexDatCuoc = state.danhSachCuoc.findIndex(
          (datCuoc) => datCuoc.ma === xucXac.ma
        );
        if (indexDatCuoc !== -1) {
          state.tongTien += state.danhSachCuoc[indexDatCuoc].diemCuoc;
        }
      });
      //   hoàn tiền
      state.danhSachCuoc.forEach((datCuoc, index) => {
        let indexXucXac = mangXucXacNgauNhien.findIndex(
          (xucXacNN) => xucXacNN.ma === datCuoc.ma
        );
        if (indexXucXac !== -1) {
          state.tongTien += datCuoc.diemCuoc;
        }
      });
      // reset mảng
      let resetMangCuoc = state.danhSachCuoc.map((datCuoc, index) => {
        return { ...datCuoc, diemCuoc: 0 };
      });
      return {
        ...state,
        xucXac: mangXucXacNgauNhien,
        danhSachCuoc: resetMangCuoc,
      };
    default:
      return { ...state };
  }
};

export default bauCuaTomCaReducer;
