import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

function App() {
  return (
    <>
      <Router basename="/My-Website">
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