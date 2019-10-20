export const MAX_X = 10;
export const MAX_Y = 18;
export const STARTING_SCORE = 0;
export const STARTING_LINES = 10;
export const STARTING_LEVEL = 1;
export const STARTING_TIME = 0;
export const X_IX = 0;
export const Y_IX = 1;
export const MIN_X = 0;
export const MIN_Y = 0;
export const TICK_DURATION = 500;
export const TICK_INCREMENT = 1;
export const NONE = 0;
export const STARTING_COORD = [3,0];
export const STARTING_ROTATION = 0;
export const COLORED_BLOCK = 1;
export const NOT_COLORED_BLOCK = 0;
export const MAX_SHAPE = 8;
export const NO_COLLISIONS = 0;
export const HORIZONTAL_COLLISION = 1;
export const VERTICAL_COLLISION = 2;
export const BOTH_COLLISIONS = 3;
export const SHAPES = [
  {
    bitmap: [
      [
        [0,0],
        [0,0]
      ]
    ],
    color: "transparent"
  },
  {
    initial: 'i',
    coords: [[3,0],[4,0],[5,0],[6,0]],
    bitmap: [
      [
        [1,1,1,1],
        [0,0,0,0]
      ],
      [
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ],
      [
        [1,1,1,1],
        [0,0,0,0]
      ],
      [
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: "#4eb0d0"
  },
  {
    initial:'o',
    coords: [[4,0],[5,0],[4,1],[5,1]],
    bitmap: [
      [
        [0,1,1,0],
        [0,1,1,0]
      ]
    ],
    color: "#f8cf47"
  },
  {
    initial:'l',
    coords: [[4,0],[4,1],[4,2],[5,2]],
    bitmap: [
      [
        [0,0,1,0],
        [1,1,1,0]
      ],
      [
        [1,0,0,0],
        [1,0,0,0],
        [1,1,0,0]
      ],
      [
        [1,1,1,0],
        [1,0,0,0]
      ],
      [
        [0,1,1,0],
        [0,0,1,0],
        [0,0,1,0]
      ]
    ],
    color: "#ef8232"
  },
  {
    initial:'j',
    coords: [[5,0],[5,1],[4,2],[5,2]],
    bitmap: [
      [
        [1,0,0,0],
        [1,1,1,0]
      ],
      [
        [1,1,0,0],
        [1,0,0,0],
        [1,0,0,0]
      ],
      [
        [1,1,1,0],
        [0,0,1,0]
      ],
      [
        [0,0,1,0],
        [0,0,1,0],
        [0,1,1,0]
      ]
    ],
    color: "#4285F4"
  },
  {
    initial:'t',
    coords: [[3,0],[4,0],[5,0],[4,1]],
    bitmap: [
      [
        [0,1,0,0],
        [1,1,1,0]
      ],
      [
        [0,1,0,0],
        [0,1,1,0],
        [0,1,0,0]
      ],
      [
        [1,1,1,0],
        [0,1,0,0]
      ],
      [
        [0,1,0,0],
        [1,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: "#e23f92"
  },
  {
    initial:'z',
    coords: [[3,0],[4,0],[4,1],[5,1]],
    bitmap: [
      [
        [1,1,0,0],
        [0,1,1,0]
      ],
      [
        [0,0,1,0],
        [0,1,1,0],
        [0,1,0,0]
      ],
      [
        [1,1,0,0],
        [0,1,1,0]
      ],
      [
        [0,1,0,0],
        [1,1,0,0],
        [1,0,0,0]
      ]
    ],
    color: "#eb3d25"
  },
  {
    initial:'s',
    coords: [[5,0],[6,0],[4,1],[5,1]],
    bitmap: [
      [
        [0,1,1,0],
        [1,1,0,0]
      ],
      [
        [0,1,0,0],
        [0,1,1,0],
        [0,0,1,0]
      ],
      [
        [0,1,1,0],
        [1,1,0,0]
      ],
      [
        [1,0,0,0],
        [1,1,0,0],
        [0,1,0,0]
      ]
    ],
    color: "#4ca730"
  },
];
