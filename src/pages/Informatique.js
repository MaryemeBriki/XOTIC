// MyComponent.js

import React from 'react';
import './globals.css'; // Assuming you have the CSS files in the same directory as this component
import './style.css';

const MyComponent = () => {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="frame"></div>
          <div className="div"></div>
          <div className="frame-2"></div>
          <div className="frame-3"></div>
          <div className="text-wrapper">Informatique</div>
          <div className="text-wrapper-2">Physique</div>
          <div className="text-wrapper-3">Physique</div>
          <div className="text-wrapper-4">Physique</div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
