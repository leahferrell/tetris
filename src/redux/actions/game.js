export const PAUSE = 'PAUSE';
export const FINISH = 'FINISH';
export const RESTART = 'RESTART';
export const TICK_CYCLE = 'TICK_CYCLE';
export const ADDED_TO_GUTTER = 'ADDED_TO_GUTTER';
export const REMOVED_ROWS = 'REMOVED_ROWS';
export const OUT_OF_ROWS = 'OUT_OF_ROWS';
export const HIT_TOP = 'HIT_TOP';

export function tick(){
  return {
    type: TICK_CYCLE
  }
}

export function pause(){
  return {
    type: PAUSE,
    isPaused: true
  }
}

export function resume(){
  return {
    type: PAUSE,
    isPaused: false
  }
}

export function finish(){
  return {
    type: FINISH
  }
}

export function restart(){
  return {
    type: RESTART
  }
}
