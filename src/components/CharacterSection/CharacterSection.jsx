import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import '../../styles/ScrollAnimations.css';
import './CharacterSection.css';

const CharacterSection = ({ 
  title, 
  description, 
  backgroundColor, 
  theme = 'gray',
  images = [],
  className = '' 
}) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imagesRef, imagesVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <div 
      className={`character-section theme-${theme} ${className}`}
      style={{ backgroundColor }}
    >
      <div ref={titleRef} className={`scroll-fade-up ${titleVisible ? 'visible' : ''}`}>
        <h3 className="character-title">{title}</h3>
        <p className="character-description">{description}</p>
      </div>
      
      {images.length > 0 && (
        <div ref={imagesRef} className="character-images">
          {images.map((image, index) => (
            <div 
              key={index} 
              className={`image-container scroll-fade-up-stagger ${imagesVisible ? 'visible' : ''}`}
            >
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
