import React from 'react';
import avatarImage from '../../assets/images/Träumer.png';
import karte1 from '../../assets/images/skillkarten/Wüstensand.png';
import karte2 from '../../assets/images/skillkarten/Alchemielabor.png';
import karte3 from '../../assets/images/skillkarten/Äpfel3D.jpg';
import karte4 from '../../assets/images/skillkarten/GravityPlanet.png';
import karte5 from '../../assets/images/skillkarten/Programmieren.png';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section fullscreen-bg">
      <div className="rotating-cards">
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
