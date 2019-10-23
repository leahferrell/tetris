import {MAX_SHAPE, NONE, X_IX, Y_IX} from "../config";
import {SHAPES} from "../config/shapes";

export const randomShape = () => {
  return Math.floor((Math.random() * (MAX_SHAPE-1))+1);
};

export const computeShapeCoords = (shapeId, shapeLoc, shapeRotation, shiftAmount) => {
  let shiftedLoc = [shapeLoc[X_IX]+shiftAmount,shapeLoc[Y_IX]];
  let shapeMap = SHAPES[shapeId].bitmap[shapeRotation];

  let coordList = [];

  shapeMap.forEach((r,y) =>
    r.forEach((b,x) => {
      if (b !== NONE) {
        coordList.push([shiftedLoc[X_IX] + x, shiftedLoc[Y_IX] + y]);
      }
    })
  );

  return coordList;
};
