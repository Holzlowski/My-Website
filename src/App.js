import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import WestriaPage from './pages/Westria/WestriaPage';
import ThreeDPage from './pages/ThreeD/ThreeDPage';
import DigitalArt from './pages/DigitalArt/DigitalArtPage';
import GameDevelopmentPage from './pages/GameDevelopment/GameDevelopmentPage';
import './App.css';

function App() {
  return (
    <>
      <Router>
        {/* Navigation */}
        <NavigationBar className="fixed-navbar" />
        <Routes>
          <Route path="/" element={
            <>
              {/* Hintergrundbild */}
              <BackgroundImage />
              <HeroSection />
              <ContentSection />
            </>
          } />
          <Route path="/Game-Development" element={<GameDevelopmentPage />} />
          <Route path="/DigitalArt" element={<DigitalArt />} />
          <Route path="/3D-Design" element={<ThreeDPage />} />
          <Route path="/westria" element={<WestriaPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;