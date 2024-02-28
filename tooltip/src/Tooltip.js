import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ children, renderTooltip, position }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div className={`tooltip-container ${position}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      {isVisible && (
        <div className={`tooltip ${position}`}>
          {renderTooltip()}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
