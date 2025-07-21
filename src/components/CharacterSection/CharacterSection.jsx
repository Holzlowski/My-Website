import React from 'react';
import './CharacterSection.css';

const CharacterSection = ({ 
  title, 
  description, 
  backgroundColor, 
  theme = 'gray',
  images = [],
  className = '' 
}) => {
  return (
    <div 
      className={`character-section theme-${theme} ${className}`}
      style={{ backgroundColor }}
    >
      <h3 className="character-title">{title}</h3>
      <p className="character-description">{description}</p>
      
      {images.length > 0 && (
        <div className="character-images">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img 
                src={image.src} 
                alt={image.alt} 
                className={`character-image ${image.zoomClass || ''}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CharacterSection;
