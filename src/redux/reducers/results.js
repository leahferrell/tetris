import {STARTING_LEVEL, STARTING_LINES, STARTING_SCORE, STARTING_TIME} from "../../config";
import {REMOVED_ROWS, OUT_OF_ROWS} from "../actions/game";

export const initialState = {
  highScore: STARTING_SCORE,
  score: STARTING_SCORE,
  time: STARTING_TIME,
  rowsRemaining: STARTING_LINES,
  level: STARTING_LEVEL
};

const updateResults = (results, rowsRemoved) => {
  let remainingRows = results.rowsRemaining - rowsRemoved;

  //TODO: compute score logic
  let newScore = results.score + rowsRemoved;

  if(remainingRows <= 0){
    return {
      state: {
        ...results,
        rowsRemaining: 0,
        score: newScore
      },
      action: {
        type: OUT_OF_ROWS,
        payload: results
      }
    }
  }else{
    return {
      state: {
        ...results,
        rowsRemaining: remainingRows,
        score: newScore
      },
      action: {}
    };
  }
};

const results = (state=initialState, action) => {
  switch(action.type){
    case REMOVED_ROWS:
      return updateResults(state, action.payload);
    default:
      return {state, action};
  }
};

export default results;
