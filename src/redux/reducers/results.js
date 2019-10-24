import {INIT_RESULTS} from "../../config";
import {OUT_OF_ROWS, REMOVED_ROWS} from "../actions";

export const initialState = {
  highScore: INIT_RESULTS.SCORE,
  score: INIT_RESULTS.SCORE,
  time: INIT_RESULTS.TIME,
  rowsRemaining: INIT_RESULTS.LINES,
  level: INIT_RESULTS.LEVEL
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
