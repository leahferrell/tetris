export const TICK_DURATION = 500;
export const TICK_INCREMENT = 1;

export const STARTING_ROTATION = 0;
export const MAX_SHAPE = 8;

export const NONE = 0;
export const X_IX = 0;
export const Y_IX = 1;

export const INIT_RESULTS = {
  SCORE: 0,
  LINES: 10,
  LEVEL: 1,
  TIME: 0
};

export const GRID = {
  MAX_X: 10,
  MAX_Y: 18,
  MIN_X: 0,
  MIN_Y: 0,
  STARTING_COORD: [3,0]
};

export const COLLISION_FLAGS = {
  NONE: 0, // 0000
  HORIZONTAL: 1, // 0001
  BOTTOM: 2, // 0010
  GUTTER: 4, // 0100
  TOP: 8, // 1000
};
