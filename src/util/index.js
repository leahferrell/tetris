import {
  COLORED_BLOCK,
  MAX_SHAPE,
  MAX_X,
  MAX_Y,
  NO_COLLISIONS,
  NONE,
  NOT_COLORED_BLOCK,
  SHAPES,
  X_IX,
  Y_IX
} from "../config";
import {HIT_TOP, REMOVED_ROWS} from "../actions/game";
import {computeCollisionsForCoords, didHitTop} from "./collisions";

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
  let coordinates = bestFitCoordinates(gutter, shape);
  let gutterWithShape = addShapeToGutter(gutter, coordinates, shape.id);
  let gutterWithoutFullRows = removeCompleteRows(gutterWithShape);
  let removedRowsCount = MAX_Y - gutterWithoutFullRows.length;

  if(removedRowsCount > NONE){
    let extraRows = (Array.from(Array(removedRowsCount), _ => Array(MAX_X).fill(NONE)));

    gutterWithoutFullRows.unshift(...extraRows);
    return {
      state: gutterWithoutFullRows,
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

export const removeCompleteRows = (gutter) => {
  return gutter.filter(row => row.find(b => b === NOT_COLORED_BLOCK) !== undefined);
};

export const isCollision = (gutter, coordList) => {
  return computeCollisionsForCoords(coordList, gutter) > NO_COLLISIONS;
};

export const bestFitCoordinates = (gutter, shape) => {
  let possibleCoordinates = computeShapeCoords(shape.id, shape.location, shape.rotation, shape.shiftAmount);

  while (isCollision(gutter, possibleCoordinates) && !didHitTop(possibleCoordinates)){
    possibleCoordinates = possibleCoordinates.map(c => [c[X_IX],c[Y_IX]-1]);
  }

  return possibleCoordinates;
};

export const randomShape = () => {
  return Math.floor((Math.random() * (MAX_SHAPE-1))+1);
};

export const rotateShape = (shape, amount) => {
  let totalRotations = SHAPES[shape.id].bitmap.length;
  return (shape.rotation + amount + totalRotations) % totalRotations;
};
