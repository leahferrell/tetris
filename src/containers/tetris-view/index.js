import React, {useEffect} from "react";
import './index.css';
import Grid from "../../components/grid";
import connect from "react-redux/es/connect/connect";
import ShapeWindow from "../../components/shape-window";
import ResultWindow from "../../components/result-window";
import {selectGrid} from "../../selectors";
import {tick} from "../../actions/game";
import {TICK_DURATION} from "../../config";
import {keydown} from "../../actions/keydown";
import PropTypes from "prop-types";

const TetrisView = ({
    blocks, holdBlock, nextBlock,
    level, lines, score,
    isComplete, isPaused,
    nextTick, onKeyDown
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
      <div className="game-board">
        <Grid blocks={blocks}/>
        <div className="right-window">
          <ShapeWindow block={holdBlock}/>
          <ShapeWindow block={nextBlock}/>
          <ResultWindow
            name="Level"
            value={level}
          />
          <ResultWindow
            name="Lines"
            value={lines}
          />
          <ResultWindow
            name="Score"
            value={score}
          />
        </div>
      </div>
    </div>
  );
};

TetrisView.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number
    ).isRequired
  ).isRequired,
  holdBlock: PropTypes.number.isRequired,
  nextBlock: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  lines: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
  isComplete: PropTypes.bool.isRequired,
  isPaused: PropTypes.bool.isRequired,
  nextTick: PropTypes.func.isRequired,
  onKeyDown: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  blocks: selectGrid(state.shapes.current, state.gutter),
  holdBlock: state.shapes.hold,
  nextBlock: state.shapes.next,
  level: state.results.level,
  lines: state.results.rowsRemaining,
  score: state.results.score,
  isComplete: state.game.isComplete,
  isPaused: state.game.isPaused
});

const mapDispatchToProps = (dispatch) => ({
  nextTick: () => dispatch(tick()),
  onKeyDown: (k) => dispatch(keydown(k))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TetrisView);
