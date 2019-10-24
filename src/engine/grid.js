import {GRID, NONE, X_IX, Y_IX} from "../config";
import {HIT_TOP, REMOVED_ROWS} from "../redux/actions";
import {didHitTop, hasCollision} from "./collisions";
import {computeShapeCoords} from "./shape";
import {shift} from "./transformations";

export const createGrid = (shape, gutter) => {
  let shapeId = shape.id;
  let shapeLoc = shape.location;
  let shapeRotation = shape.rotation;
  let shiftAmount = shape.shiftAmount;

  let coordList = computeShapeCoords(shapeId, shapeLoc, shapeRotation, shiftAmount);
  return addShapeToGutter(gutter, coordList, shapeId);
};

export const addShapeToGutter = (gutter, coordList, shapeId) => {
  return gutter.map((r, y) => (
    r.map((b,x) => (
      coordList.find(c => c[X_IX] === x && c[Y_IX] === y) ? shapeId : b
    ))
  ));
};

export const fitShapeToGutter = (gutter, shape) => {
  let coordinates = bestFitCoordinates(gutter, shape);
  let gutterWithShape = addShapeToGutter(gutter, coordinates, shape.id);
  let gutterWithoutFullRows = removeCompleteRows(gutterWithShape);
  let removedRowsCount = GRID.MAX_Y - gutterWithoutFullRows.length;

  if(removedRowsCount > NONE){
    return {
      state: padGutter(gutterWithoutFullRows,removedRowsCount),
      action: {
        type: REMOVED_ROWS,
        payload: removedRowsCount
      }
    };
  }else if(didHitTop(coordinates)){
    return {
      state: gutter,
      action: {
        type: HIT_TOP
      }
    }
  }else {
    return {
      state: gutterWithShape,
      action: {}
    };
  }
};

//TODO: rewrite without side effects
export const padGutter = (gutter, numRows) => {
  let extraRows = createBlankRows(numRows);
  gutter.unshift(...extraRows);
  return gutter;
};

export const createBlankRows = (rows) => {
  return (Array.from(Array(rows), _ => Array(GRID.MAX_X).fill(NONE)));
};

export const removeCompleteRows = (gutter) => {
  return gutter.filter(row => row.find(b => b === NONE) !== undefined);
};

export const bestFitCoordinates = (gutter, shape) => {
  let possibleCoordinates = computeShapeCoords(shape.id, shape.location, shape.rotation, shape.shiftAmount);

  while (hasCollision(gutter, possibleCoordinates) && !didHitTop(possibleCoordinates)){
    possibleCoordinates = possibleCoordinates.map(_ => shift(-1, _));
  }

  return possibleCoordinates;
};
