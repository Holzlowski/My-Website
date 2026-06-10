import React from 'react';
import avatarImage from '../../assets/images/Träumer.png';
import karte1 from '../../assets/images/skillkarten/Wüstensand.jpg';
import karte2 from '../../assets/images/skillkarten/Alchemielabor.jpg';
import karte3 from '../../assets/images/skillkarten/Äpfel3D.jpg';
import karte4 from '../../assets/images/skillkarten/GravityPlanet.jpg';
import karte5 from '../../assets/images/skillkarten/Programmieren.jpg';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section fullscreen-bg">
      {/* Main Content */}
      <div className="rotating-cards loaded">
        <div className='card-orbit'>
          {/* Avatar mit Gegen-Rotation um statisch zu bleiben */}
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
