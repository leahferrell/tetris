export const INCREMENT_TIME = 'INCREMENT_TIME';
export const SET_HIGH_SCORE = 'SET_HIGH_SCORE';
export const ADD_TO_SCORE = 'ADD_TO_SCORE';
export const DECREMENT_ROWS = 'DECREMENT_ROWS';
export const INCREMENT_LEVEL = 'INCREMENT_LEVEL';

export function incrementTime(){
  return {
    type: INCREMENT_TIME
  };
}

export function setHighScore(highScore){
  return {
    type: SET_HIGH_SCORE,
    highScore: highScore
  };
}

export function addToScore(){
  return {
    type: ADD_TO_SCORE
  };
}

export function decrementRows(){
  return {
    type: DECREMENT_ROWS
  };
}

export function incrementLevel(){
  return {
    type: INCREMENT_LEVEL
  };
}
