import shapes, {initialState as shapeState} from "./shapes";
import results, {initialState as resultState} from "./results";
import game, {initialState as gameState} from "./game";
import {ADDED_TO_GUTTER} from "../actions/game";
import {createBlankRows, fitShapeToGutter} from "../../engine/grid";
import {MAX_Y} from "../../config/grid";

export const initialState = {
  game: gameState,
  gutter: createBlankRows(MAX_Y),
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

const updateLoopReducer = (state = initialState, action) => {
  action.gutter = state.gutter;
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

export default updateLoopReducer;
