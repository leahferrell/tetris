import React from "react";
import './index.css';
import connect from "react-redux/es/connect/connect";
import PropTypes from "prop-types";
import {RESTART} from "../../redux/actions/game";

const FinishView = ({
  score, time, level, startOver
}) => {
  return (
    <div
      className="start-view"
    >
      <h1>
        Tetris
      </h1>
      <div className="controls">
        <h2>
          Finished Level {level}
        </h2>
        <p>Score: {score}</p>
        <p>Time: {time}</p>
      </div>
      <div>
        <button
          className="start-button"
          onClick={() => startOver()}
        >
          Restart
        </button>
      </div>
    </div>
  );
};

FinishView.propTypes = {
  score: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  startOver: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  score: state.results.score,
  time: state.results.time,
  level: state.results.level
});

const mapDispatchToProps = (dispatch) => ({
  startOver: () => dispatch({type: RESTART})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishView);
