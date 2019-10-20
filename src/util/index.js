import {COLORED_BLOCK, MAX_SHAPE, SHAPES, X_IX, Y_IX} from "../config";
import {REMOVED_ROWS} from "../actions/game";

export const computeShapeCoords = (shapeId, shapeLoc, shapeRotation, shiftAmount) => {
  let shiftedLoc = [shapeLoc[X_IX]+shiftAmount,shapeLoc[Y_IX]];
  let shapeMap = SHAPES[shapeId].bitmap[shapeRotation];

  let coordList = [];

  shapeMap.forEach((r,y) =>
    r.forEach((b,x) => {
      if (b === COLORED_BLOCK) {
        coordList.push([shiftedLoc[X_IX] + x, shiftedLoc[Y_IX] + y]);
      }
    })
  );

  return coordList;
};

export const addShapeToGutter = (gutter, coordList, shapeId) => {
  return gutter.map((r, y) => (
    r.map((b,x) => (
      coordList.find(c => c[X_IX] === x && c[Y_IX] === y) ? shapeId : b
    ))
  ));
};

export const fitShapeToGutter = (gutter, shape) => {
  //TODO: implement the following logic
  // get correct coordinates
  // add shape to gutter
  // check for complete rows
  //   if complete row:
  //      increment row counter
  //      remove complete row
  //      add blank row at top
  // return new gutter and action (update results, row count)

  let updatedGutter = gutter;
  let removedRowsCount = 0;

  return {
    state: updatedGutter,
    action: {
      type: REMOVED_ROWS,
      payload: removedRowsCount
    }
  };
};

export const determineIfCollision = (gutter, coordList) => {
  return false;
};

export const randomShape = () => {
  return Math.floor((Math.random() * (MAX_SHAPE-1))+1);
};

export const rotateShape = (shape, amount) => {
  let totalRotations = SHAPES[shape.id].bitmap.length;
  return (shape.rotation + amount + totalRotations) % totalRotations;
};
