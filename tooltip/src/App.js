import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Tooltip Example</h1>
      <div className="center-element">
        <div className="central-element">
           Element
          <Tooltip renderTooltip={() => <span className="tooltip-text">Top Tooltip</span>}>
            <button className="element top">button 1</button>
          </Tooltip>
          <Tooltip renderTooltip={() => <span className="tooltip-text">Right Tooltip</span>}>
            <button className="element right">button 2</button>
          </Tooltip>
          <Tooltip renderTooltip={() => <span className="tooltip-text">Bottom Tooltip</span>}>
            <button className="element bottom">button 3</button>
          </Tooltip>
          <Tooltip renderTooltip={() => <span className="tooltip-text">Left Tooltip</span>}>
            <button className="element left">button 4</button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default App;
