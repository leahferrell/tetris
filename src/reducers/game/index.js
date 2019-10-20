import {OUT_OF_ROWS} from "../../actions/game";

export const initialState = {
  isPaused: false,
  isStarted: false,
  isComplete: false
};

const game = (state=initialState, action) => {
  switch(action.type){
    case OUT_OF_ROWS:
      return {
        state: {
          isComplete: true
        },
        action: {}
      };
    default:
      return {state, action};
  }
};

export default game;
