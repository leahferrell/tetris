import {randomShape, rotateShape} from "../../util";
import {
  BOTH_COLLISIONS,
  HORIZONTAL_COLLISION, MAX_Y,
  NONE,
  STARTING_COORD,
  STARTING_ROTATION,
  TICK_INCREMENT,
  VERTICAL_COLLISION,
  X_IX,
  Y_IX
} from "../../config";
import {computeCollisions} from "../../util/collisions";
import {ADDED_TO_GUTTER, TICK_CYCLE} from "../../actions/game";
import {HARD_DROPPED, MOVED_HORIZONTAL, ROTATED, SOFT_DROPPED, SWAPPED_HOLD} from "../../actions/keydown";

export const initialState = {
  hold: NONE,
    next: randomShape(),
    current: {
    id: NONE,
      location: STARTING_COORD,
      shiftAmount: NONE,
      rotation: STARTING_ROTATION
  }
};

const next = (state) => {
  return {
    ...state,
    current: {
      ...initialState.current,
      id: state.next
    },
    next: randomShape()
  };
};

const swap = (state) => {
  return {
    state: {
      hold: state.current.id,
      current: {
        ...state.current,
        id: state.hold === NONE ? state.next : state.hold,
      },
      next: state.hold === NONE ? randomShape() : state.next
    },
    action: {}
  };
};

const rotate = (shape, rotation) => ({
  ...shape,
  rotation: rotateShape(shape, rotation)
});

const translate = (shape, xShift, yShift) => ({
  ...shape,
  location: [shape.location[X_IX]+xShift, shape.location[Y_IX]+yShift]
});

const moved = (state, transformation) => {
  if(state.current.id === NONE){
    return {state: next(state), action: {}};
  }

  let transformedShape = transformation(state.current);

  let collisions = computeCollisions(transformedShape);

  if(collisions === HORIZONTAL_COLLISION){
    return {state, action: {}};
  }else if(collisions === VERTICAL_COLLISION || collisions === BOTH_COLLISIONS){
    return {
      state: next(state),
      action: {
        type: ADDED_TO_GUTTER,
        payload: transformedShape
      }
    };
  }else{
    return {
      state: {
        ...state,
        current: transformedShape
      },
      action: {}
    };
  }
};

const shapes = (state = initialState, action) => {
  switch (action.type) {
    case TICK_CYCLE: case SOFT_DROPPED:
      return moved(state, (shape) => translate(shape, NONE, TICK_INCREMENT));
    case SWAPPED_HOLD:
      return swap(state);
    case ROTATED:
      return moved(state, (shape) => rotate(shape, action.payload));
    case HARD_DROPPED:
      return {
        state: next(state),
        action: {
          type: ADDED_TO_GUTTER,
          payload: translate(state.current, NONE, MAX_Y)
        }
      };
    case MOVED_HORIZONTAL:
      return moved(state, (shape) => translate(shape, action.payload, NONE));
    default:
      return {state, action};
  }
};

export default shapes;
