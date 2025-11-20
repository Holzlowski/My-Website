import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import logoName from '../../assets/images/LogoName.png'; 
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


function NavigationBar() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = useState(false);
    
    const handleNavClick = () => {
        setExpanded(false);
    };
    
    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            expand="lg" 
            fixed='top'
            expanded={expanded}
            onToggle={setExpanded}
        >
            <Container>
                <Navbar.Brand as={Link} to="/" onClick={handleNavClick}>
                    <img 
                        src={logoName} 
                        alt="Baum Logo" 
                        style={{ width: '45px', height: 'auto', marginRight: '10px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/" onClick={handleNavClick}>{t('navigation.home')}</Nav.Link>
                        <Nav.Link as={Link} to="/Programming" onClick={handleNavClick}>{t('navigation.programming')}</Nav.Link>
                        <Nav.Link as={Link} to="/Game-Development" onClick={handleNavClick}>{t('navigation.gamedev')}</Nav.Link>
                        <Nav.Link as={Link} to="/DigitalArt" onClick={handleNavClick}>{t('navigation.digitalart')}</Nav.Link>
                        <Nav.Link as={Link} to="/3D-Design" onClick={handleNavClick}>{t('navigation.3ddesign')}</Nav.Link>
                        <Nav.Link as={Link} to="/Westria" onClick={handleNavClick}>{t('navigation.westria')}</Nav.Link>
                    </Nav>
                    <LanguageSwitcher />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;