import {MAX_X, MAX_Y, NONE} from "../config";
import shapes, {initialState as shapeState} from "./shapes";
import results, {initialState as resultState} from "./results";
import game, {initialState as gameState} from "./game";
import {ADDED_TO_GUTTER} from "../actions/game";
import {fitShapeToGutter} from "../util";

export const initialState = {
  game: gameState,
  gutter: Array.from(Array(MAX_Y), _ => Array(MAX_X).fill(NONE)),
  results: resultState,
  shapes: shapeState
};

const gutter = (state = initialState.gutter, action) => {
  switch(action.type){
    case ADDED_TO_GUTTER:
      return fitShapeToGutter(state, action.payload);
    default:
      return {state, action};
  }
};

const rootReducer = (state = initialState, action) => {
  let newShapes = shapes(state.shapes, action);
  let newGutter = gutter(state.gutter, newShapes.action);
  let newResults = results(state.results, newGutter.action);
  let newGame = game(state.game, newResults.action);

  return {
    shapes: newShapes.state,
    gutter: newGutter.state,
    results: newResults.state,
    game: newGame.state
  };
};

export default rootReducer;
