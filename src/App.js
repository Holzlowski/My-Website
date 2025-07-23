import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/Navigation/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import ContentSection from './components/ContentSection/ContentSection';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';
import WestriaPage from './pages/Westria/WestriaPage';
import ThreeDPage from './pages/ThreeD/ThreeDPage';
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
          <Route path="/westria" element={<WestriaPage />} />
          <Route path="/3D" element={<ThreeDPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;