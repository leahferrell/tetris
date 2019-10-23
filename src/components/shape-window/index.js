import React from 'react';
import './index.css'
import {NONE, STARTING_ROTATION} from "../../config";
import Block from "../block";
import {SHAPES} from "../../config/shapes";

const ShapeWindow = ({block}) => (
  <div className="shape-window">
    <Block/><Block/><Block/><Block/>
    {
      block === NONE ? "" :
      SHAPES[block].bitmap[STARTING_ROTATION].map((r,x) =>
        r.map((b,y) => {
          const colorIx = (b === NONE ? NONE : block);
          return <Block key={x+'-'+y} color={SHAPES[colorIx].color}/>;
        })
      )
    }
  </div>
);

export default ShapeWindow;
