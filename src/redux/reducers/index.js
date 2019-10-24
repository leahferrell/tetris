import shapes, {initialState as shapeState} from "./shapes";
import results, {initialState as resultState} from "./results";
import game, {initialState as gameState} from "./game";
import {ADDED_TO_GUTTER, RESTART} from "../actions/game";
import {createBlankRows, fitShapeToGutter} from "../../engine/grid";
import {GRID} from "../../config";

export const initialState = {
  game: gameState,
  gutter: createBlankRows(GRID.MAX_Y),
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

const gameLoop = (state, action) => {
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

const updateLoopReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESTART:
      return initialState;
    default:
      return gameLoop(state, action);
  }
};

export default updateLoopReducer;
