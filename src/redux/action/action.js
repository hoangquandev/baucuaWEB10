import * as action from "../content/content";

export const playGameAction = () => {
  return {
    type: action.PLAY_GAME,
  };
};

export const datCuocAction = (datCuoc) => {
  return {
    type: action.DAT_CUOC,
    datCuoc,
  };
};
