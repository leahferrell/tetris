import {SHAPES} from "../config/shapes";
import {X_IX, Y_IX} from "../config";

export const rotateShape = (shape, amount) => {
  let totalRotations = SHAPES[shape.id].bitmap.length;
  return (shape.rotation + amount + totalRotations) % totalRotations;
};

export const shift = (shiftAmt, coord) => ([coord[X_IX], coord[Y_IX] + shiftAmt]);
