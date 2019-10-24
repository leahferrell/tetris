import React from "react";
import './index.css';
import Grid from "../../components/grid";
import connect from "react-redux/es/connect/connect";
import ShapeWindow from "../../components/shape-window";
import ResultWindow from "../../components/result-window";
import PropTypes from "prop-types";
import {createGrid} from "../../engine/grid";

const TetrisView = ({
    blocks, holdBlock, nextBlock,
    level, lines, score
  }) => {

  return (
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
  score: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  blocks: createGrid(state.shapes.current, state.gutter),
  holdBlock: state.shapes.hold,
  nextBlock: state.shapes.next,
  level: state.results.level,
  lines: state.results.rowsRemaining,
  score: state.results.score
});

export default connect(
  mapStateToProps
)(TetrisView);
