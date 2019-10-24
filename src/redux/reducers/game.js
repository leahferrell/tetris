import {HIT_TOP, OUT_OF_ROWS} from "../actions/game";
import {PAUSED} from "../actions/keydown";

export const initialState = {
  isPaused: true,
  isComplete: false
};

const game = (state=initialState, action) => {
  switch(action.type){
    case PAUSED:
      return {
        state: {
          ...state,
          isPaused: !state.isPaused
        },
        action: {}
      };
    case OUT_OF_ROWS:
      return {
        state: {
          ...state,
          isComplete: true
        },
        action: {}
      };
    case HIT_TOP:
      return {
        state: {
          ...state,
          isComplete: true
        },
        action: {}
      };
    default:
      return {state, action};
  }
};

export default game;
