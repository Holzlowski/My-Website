import React from 'react';
import backgroundImg from '../../assets/images/Wald2.png';
import './BackgroundImage.css';

const BackgroundImage = () => {
  return (
    <div 
      className="fullscreen-bg" 
      style={{ backgroundImage: `url(${backgroundImg})` }}
    ></div>
  );
};

export default BackgroundImage;
