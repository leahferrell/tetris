import React from 'react';
import Block from "../block";
import {SHAPES} from "../../config";
import './index.css'
import PropTypes from "prop-types";

const Grid = ({blocks}) => (
    <div className="grid">
      {
        blocks.map((r,x) =>
          r.map( (b,y) =>
            <Block key={x+'-'+y} color={SHAPES[b].color}/>
          )
        )
      }
    </div>
  );

Grid.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.number
    ).isRequired
  ).isRequired
};

export default Grid;
