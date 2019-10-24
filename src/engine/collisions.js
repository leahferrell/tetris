import {COLLISION_FLAGS, GRID, NONE, X_IX, Y_IX} from "../config";
import {computeShapeCoords} from "./shape";

export const hasCollisionOfType = (collisionMask, ...collisionFlags) => {
  return collisionFlags.findIndex(f => collisionMask & f) !== -1;
};

export const hasCollision = (gutter, coordList) => {
  return computeCollisionsForCoords(coordList, gutter) > COLLISION_FLAGS.NONE;
};

export const didHitBottom = (coords) => {
  return (coords.find(c => c[Y_IX] >= GRID.MAX_Y) !== undefined);
};

export const didHitTop = (coords) => {
  return (coords.find(c => c[Y_IX] <= GRID.MIN_Y) !== undefined);
};

export const didHitSide = (coords) => {
  return (coords.find(c => c[X_IX] >= GRID.MAX_X || c[X_IX] < GRID.MIN_X) !== undefined);
};

export const didHitGutter = (coords, gutter) => {
  return (coords.find(c => gutter[c[Y_IX]][c[X_IX]] !== NONE) !== undefined);
};

export const computeCollisions = (shape, gutter) => {
  let coords = computeShapeCoords(shape.id, shape.location, shape.rotation, shape.shiftAmount);
  return computeCollisionsForCoords(coords,gutter);
};

export const computeCollisionsForCoords = (coords, gutter) => {
  let collisions = didHitBottom(coords) ? COLLISION_FLAGS.BOTTOM : COLLISION_FLAGS.NONE;
  collisions += (didHitSide(coords) ? COLLISION_FLAGS.HORIZONTAL : COLLISION_FLAGS.NONE);
  return (
    collisions > COLLISION_FLAGS.NONE ?
      collisions :
      (didHitGutter(coords,gutter) ?
        COLLISION_FLAGS.GUTTER :
        COLLISION_FLAGS.NONE
      )
  );
};
