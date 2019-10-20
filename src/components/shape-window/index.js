import React from 'react';
import './index.css'
import {NONE, NOT_COLORED_BLOCK, SHAPES, STARTING_ROTATION} from "../../config";
import Block from "../block";

const ShapeWindow = ({block}) => (
  <div className="shape-window">
    <Block/><Block/><Block/><Block/>
    {
      block === NONE ? "" :
      SHAPES[block].bitmap[STARTING_ROTATION].map((r,x) =>
        r.map((b,y) => {
          const colorIx = (b === NOT_COLORED_BLOCK ? NOT_COLORED_BLOCK : block);
          return <Block key={x+'-'+y} color={SHAPES[colorIx].color}/>;
        })
      )
    }
  </div>
);

export default ShapeWindow;
