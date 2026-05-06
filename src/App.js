import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {
  NavigationBar,
  SocialSidebar,
  HeroSection,
  ContentSection,
  BackgroundImage
} from './components';
import WestriaPage from './pages/Westria/WestriaPage';
import PortfolioPage from './pages/PortfolioPage';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Router basename="/My-Website">
        <ScrollToTop />

        {/* Navigation */}
        <NavigationBar className="fixed-navbar" />
        
        {/* Social Media Bar - Desktop sidebar, Mobile footer */}
        <SocialSidebar />
        
        <Routes>
          <Route path="/" element={
            <>
              {/* Background Image */}
              <BackgroundImage />
              <HeroSection />
              <ContentSection />
            </>
          } />
          <Route path="/Programming" element={
            <PortfolioPage category="programmingProjects" translationKey="programming" />
          } />
          <Route path="/Game-Development" element={
            <PortfolioPage category="gameDevelopmentProjects" translationKey="gamedev" />
          } />
          <Route path="/DigitalArt" element={
            <PortfolioPage category="designProjects" translationKey="digitalart" />
          } />
          <Route path="/3D-Design" element={
            <PortfolioPage category="threeDProjects" translationKey="3d" />
          } />
          <Route path="/westria" element={<WestriaPage />} />
        </Routes>
        
        {/* Footer for Mobile - after all content */}
        <div className="mobile-footer">
          <SocialSidebar />
        </div>
      </Router>
    </>
  );
}

export default App;
