import React from 'react';
import backgroundImg from '../../assets/images/Wald2.png';
import './BackgroundImage.css';

const BackgroundImage = () => {
  return <div >
    <img className="fullscreen-bg" src={backgroundImg} alt="Hintergrund"></img>
  </div>;
};

export default BackgroundImage;
