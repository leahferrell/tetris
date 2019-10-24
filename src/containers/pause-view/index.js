import React from "react";
import './index.css';
import {PAUSED} from "../../redux/actions";
import connect from "react-redux/es/connect/connect";

const PauseView = ({start}) => {
  return (
    <div
      className="start-view"
    >
      <h1>
        Tetris
      </h1>
      <div className="controls">
        <h2>
          Controls
        </h2>
        <table className="controls-table">
          <tbody>
            <tr>
              <td>P / Esc</td>
              <td>Pause</td>
            </tr>
            <tr>
              <td>Up</td>
              <td>Rotate Right</td>
            </tr>
            <tr>
              <td>Left / Right</td>
              <td>Move Left / Right</td>
            </tr>
            <tr>
              <td>Down</td>
              <td>Soft Drop</td>
            </tr>
            <tr>
              <td>Z</td>
              <td>Rotate Left</td>
            </tr>
            <tr>
              <td>C</td>
              <td>Hold</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button
          className="start-button"
          onClick={() => start()}
        >
          Start
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => ({
  start: () => dispatch({type: PAUSED})
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PauseView);
