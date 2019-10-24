import {HARD_DROPPED, IGNORED, MOVED_HORIZONTAL, PAUSED, ROTATED, SOFT_DROPPED, SWAPPED_HOLD} from "./index";

export const ARROW_DOWN = 'ArrowDown';
export const ARROW_UP = 'ArrowUp';
export const ARROW_LEFT = 'ArrowLeft';
export const ARROW_RIGHT = 'ArrowRight';
export const SPACE = ' ';
export const ESC = 'Escape';
export const LC_Z = 'z';
export const UC_Z = 'Z';
export const LC_C = 'c';
export const UC_C = 'C';
export const LC_P = 'p';
export const UC_P = 'P';

export function keydown(key) {
  switch (key) {
    case ARROW_DOWN:
      return {
        type: SOFT_DROPPED
      };
    case ARROW_UP:
      return {
        type: ROTATED,
        payload: 1
      };
    case ARROW_LEFT:
      return {
        type: MOVED_HORIZONTAL,
        payload: -1
      };
    case ARROW_RIGHT:
      return {
        type: MOVED_HORIZONTAL,
        payload: 1
      };
    case SPACE:
      return {
        type: HARD_DROPPED
      };
    case ESC: case UC_P: case LC_P:
      return {
        type: PAUSED
      };
    case LC_Z: case UC_Z:
      return {
        type: ROTATED,
        payload: -1
      };
    case LC_C: case UC_C:
      return {
        type: SWAPPED_HOLD
      };
    default:
      return {
        type: IGNORED
      };
  }
}
