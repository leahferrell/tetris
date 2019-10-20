import {computeShapeCoords} from "../index";
import {
  HORIZONTAL_COLLISION,
  MAX_X,
  MAX_Y,
  MIN_X,
  NO_COLLISIONS,
  NOT_COLORED_BLOCK,
  VERTICAL_COLLISION,
  X_IX,
  Y_IX
} from "../../config";

export const didHitBottom = (coords) => {
  return (coords.find(c => c[Y_IX] >= MAX_Y) !== undefined);
};

export const didHitSide = (coords) => {
  return (coords.find(c => c[X_IX] >= MAX_X || c[X_IX] < MIN_X) !== undefined);
};

export const didHitGutter = (coords, gutter) => {
  return (coords.find(c => gutter[c[X_IX]][c[Y_IX]] !== NOT_COLORED_BLOCK) !== undefined);
};

export const computeCollisions = (shape) => {
  let coords = computeShapeCoords(shape.id, shape.location, shape.rotation, shape.shiftAmount);

  let collisions = didHitBottom(coords) ? VERTICAL_COLLISION : NO_COLLISIONS;
  return collisions + (didHitSide(coords) ? HORIZONTAL_COLLISION : NO_COLLISIONS);
  //didHitGutter(coords);
};
