import {addShapeToGutter, computeShapeCoords} from "../util";

export const selectGrid = (shape, gutter) => {
  let shapeId = shape.id;
  let shapeLoc = shape.location;
  let shapeRotation = shape.rotation;
  let shiftAmount = shape.shiftAmount;

  let coordList = computeShapeCoords(shapeId, shapeLoc, shapeRotation, shiftAmount);
  return addShapeToGutter(gutter, coordList, shapeId);
};
