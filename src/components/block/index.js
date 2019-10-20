import React from 'react';
import './index.css'

const Block = ({color="transparent"}) => (
  <div className="block" style={{background: color}}/>
  );

export default Block;
