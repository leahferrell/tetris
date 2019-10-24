import TetrisView from "../tetris-view";
import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {keydown} from "../../redux/actions/keydown";
import connect from "react-redux/es/connect/connect";
import {TICK_DURATION} from "../../config";
import {TICK_CYCLE} from "../../redux/actions/game";
import PauseView from "../pause-view";
import './index.css';
import FinishView from "../finish-view";

const Screen = ({
                  isPaused, isComplete,
                  onKeyDown, nextTick
}) => {

  useEffect(() => {
    let interval = setInterval(() => {
      if(!isPaused && !isComplete) {
        nextTick();
      }
    }, TICK_DURATION);
    return () => clearInterval(interval);
  });

  return (
    <div
      className="screen-background"
      onKeyDown={(e) => onKeyDown(e.key)}
      tabIndex="0"
    >
      {selectScreen(isPaused,isComplete)}
    </div>
  );
};

Screen.propTypes = {
  isPaused: PropTypes.bool.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  nextTick: PropTypes.func.isRequired
};

const selectScreen = (isPaused, isComplete) => {
  if(isPaused && !isComplete){
    return (<PauseView/>);
  }else if(isComplete){
    return (<FinishView/>);
  }else{
    return (<TetrisView/>);
  }
};

const mapStateToProps = state => ({
  isComplete: state.game.isComplete,
  isPaused: state.game.isPaused
});

const mapDispatchToProps = (dispatch) => ({
  nextTick: () => dispatch({type: TICK_CYCLE}),
  onKeyDown: (k) => dispatch(keydown(k))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
