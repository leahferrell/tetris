import React from 'react';
import './index.css'

const ResultWindow = ({name, value}) => (
  <div className="result-window">
    {name + ": " + value}
  </div>
);

export default ResultWindow;
