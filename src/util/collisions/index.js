import {computeShapeCoords} from "../index";
import {
  GUTTER_COLLISION,
  HORIZONTAL_COLLISION,
  MAX_X,
  MAX_Y,
  MIN_X, MIN_Y,
  NO_COLLISIONS,
  NOT_COLORED_BLOCK,
  VERTICAL_COLLISION,
  X_IX,
  Y_IX
} from "../../config";

export const didHitBottom = (coords) => {
  return (coords.find(c => c[Y_IX] >= MAX_Y) !== undefined);
};

export const didHitTop = (coords) => {
  return (coords.find(c => c[Y_IX] <= MIN_Y) !== undefined);
};

export const didHitSide = (coords) => {
  return (coords.find(c => c[X_IX] >= MAX_X || c[X_IX] < MIN_X) !== undefined);
};

export const didHitGutter = (coords, gutter) => {
  return (coords.find(c => gutter[c[Y_IX]][c[X_IX]] !== NOT_COLORED_BLOCK) !== undefined);
};

export const computeCollisions = (shape, gutter) => {
  let coords = computeShapeCoords(shape.id, shape.location, shape.rotation, shape.shiftAmount);
  return computeCollisionsForCoords(coords,gutter);
};

export const computeCollisionsForCoords = (coords, gutter) => {
  let collisions = didHitBottom(coords) ? VERTICAL_COLLISION : NO_COLLISIONS;
  collisions += (didHitSide(coords) ? HORIZONTAL_COLLISION : NO_COLLISIONS);
  return (
    collisions > NO_COLLISIONS ?
      collisions :
      (didHitGutter(coords,gutter) ?
        GUTTER_COLLISION :
        NO_COLLISIONS
      )
  );
};
