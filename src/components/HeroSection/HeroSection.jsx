import React from 'react';
import avatarImage from '../../assets/images/Träumer.png';
import karte1 from '../../assets/images/skillkarten/Wüstensand.png';
import karte2 from '../../assets/images/skillkarten/Alchemielabor.png';
import karte3 from '../../assets/images/skillkarten/Äpfel3D.jpg';
import karte4 from '../../assets/images/skillkarten/GravityPlanet.png';
import karte5 from '../../assets/images/skillkarten/Programmieren.png';
import { useImagePreloader } from '../../hooks/useImagePreloader';
import './HeroSection.css';

const HeroSection = () => {
  const imageUrls = [avatarImage, karte1, karte2, karte3, karte4, karte5];
  
  // Verwende den neuen Hook
  const { imagesLoaded, loadedImages, loadingProgress, totalImages } = useImagePreloader(imageUrls, {
    timeout: 6000,
    priority: 'high'
  });

  return (
    <section className="hero-section fullscreen-bg">
      {/* Loading Indicator */}
      {!imagesLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Bilder laden... ({loadedImages}/{totalImages})</p>
          <div className="loading-progress-bar">
            <div 
              className="loading-progress-fill" 
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`rotating-cards ${imagesLoaded ? 'loaded' : 'loading'}`}>
        <div className='card-orbit'>
          <div className="avatar-wrapper">
            <img 
              src={avatarImage} 
              alt="Mein Avatar" 
              className='avatar-center'
              fetchPriority="high"
              loading="eager" 
            />
          </div>
          <div className="card-item card-1">
            <img src={karte1} alt="Karte1" fetchPriority="high" loading="eager" />
          </div>
          <div className="card-item card-2">
            <img src={karte2} alt="Karte2" fetchPriority="high" loading="eager" />
          </div>
          <div className="card-item card-3">
            <img src={karte3} alt="Karte3" fetchPriority="high" loading="eager" />
          </div>
          <div className="card-item card-4">
            <img src={karte4} alt="Karte4" fetchPriority="high" loading="eager" />
          </div>
          <div className="card-item card-5">
            <img src={karte5} alt="Karte5" fetchPriority="high" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
