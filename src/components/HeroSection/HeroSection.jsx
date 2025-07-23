import React, { useState, useEffect } from 'react';
import avatarImage from '../../assets/images/Träumer.png';
import karte1 from '../../assets/images/skillkarten/Wüstensand.png';
import karte2 from '../../assets/images/skillkarten/Alchemielabor.png';
import karte3 from '../../assets/images/skillkarten/Äpfel3D.jpg';
import karte4 from '../../assets/images/skillkarten/GravityPlanet.png';
import karte5 from '../../assets/images/skillkarten/Programmieren.png';
import './HeroSection.css';

const HeroSection = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState(0);
  
  const totalImages = 6; // Avatar + 5 Karten
  
  useEffect(() => {
    const imageUrls = [avatarImage, karte1, karte2, karte3, karte4, karte5];
    let loadedCount = 0;
    
    imageUrls.forEach((src) => {
      const img = new Image();
      img.onload = () => {
        loadedCount++;
        setLoadedImages(loadedCount);
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        setLoadedImages(loadedCount);
        if (loadedCount === totalImages) {
          setImagesLoaded(true);
        }
      };
      img.src = src;
    });
  }, []);
  return (
    <section className="hero-section fullscreen-bg">
      {/* Loading Indicator */}
      {!imagesLoaded && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p>Bilder laden... ({loadedImages}/{totalImages})</p>
        </div>
      )}
      
      {/* Main Content */}
      <div className={`rotating-cards ${imagesLoaded ? 'loaded' : 'loading'}`}>
        <div className='card-orbit'>
          <div className="avatar-wrapper">
            <img src={avatarImage} alt="Mein Avatar" className='avatar-center' />
          </div>
          <div className="card-item card-1"><img src={karte1} alt="Karte1" /></div>
          <div className="card-item card-2"><img src={karte2} alt="Karte2" /></div>
          <div className="card-item card-3"><img src={karte3} alt="Karte3" /></div>
          <div className="card-item card-4"><img src={karte4} alt="Karte4" /></div>
          <div className="card-item card-5"><img src={karte5} alt="Karte5" /></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
