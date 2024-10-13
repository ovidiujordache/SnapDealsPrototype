
import './LayoutStyle.css'

import React from 'react'

const LayoutComponent = ({ children }) => {

  return (
    <div className="Layout">
    
       <div id="main-container">
        {React.Children.map(children, (child) => (
          <div className="layout-item">
            {child} 
          </div>
        ))}
      </div>
    </div>
  );
};

export default LayoutComponent;