import React from 'react';
import './ParallaxHeader.css';

const ParallaxHeader = ({ 
  title, 
  backgroundImage, 
  foregroundImage, 
  height = '500px',
  titleStyle = {} 
}) => {
  return (
    <div className="parallax-header" style={{ height }}>
      <div 
        className="parallax-background"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {foregroundImage && (
        <div 
          className="parallax-foreground"
          style={{ backgroundImage: `url(${foregroundImage})` }}
        ></div>
      )}
      <div className="parallax-title" style={titleStyle}>
        {title}
      </div>
    </div>
  );
};

export default ParallaxHeader;
