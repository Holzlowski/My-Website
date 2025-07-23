import React, { useState, useEffect, useRef } from 'react';
import './ParallaxHeader.css';

const ParallaxHeader = ({ 
  title, 
  backgroundImage, 
  foregroundImage, 
  height = '500px',
  titleStyle = {} 
}) => {
  const [backgroundLoaded, setBackgroundLoaded] = useState(false);
  const [foregroundLoaded, setForegroundLoaded] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    // Preload background image
    if (backgroundImage) {
      const img = new Image();
      img.onload = () => setBackgroundLoaded(true);
      img.src = backgroundImage;
    }

    // Preload foreground image
    if (foregroundImage) {
      const img = new Image();
      img.onload = () => setForegroundLoaded(true);
      img.src = foregroundImage;
    }
  }, [backgroundImage, foregroundImage]);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrolled = window.pageYOffset;
        const background = headerRef.current.querySelector('.parallax-background');
        
        if (background) {
          // Hintergrund scrollt langsam nach unten
          background.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-header" style={{ height }} ref={headerRef}>
      <div 
        className={`parallax-background ${backgroundLoaded ? 'loaded' : ''}`}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {foregroundImage && (
        <div 
          className={`parallax-foreground ${foregroundLoaded ? 'loaded' : ''}`}
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
