import { Navbar, Nav, Container } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import logoName from '../../assets/images/LogoName.png'; 
import { Link } from 'react-router-dom';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';


function NavigationBar() {
    const { t } = useTranslation();
    
    return (
        <Navbar bg="dark" variant="dark" expand="lg" fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img 
                        src={logoName} 
                        alt="Baum Logo" 
                        style={{ width: '45px', height: 'auto', marginRight: '10px' }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav"> 
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">{t('navigation.home')}</Nav.Link>
                        <Nav.Link as={Link} to="/Programming">{t('navigation.programming')}</Nav.Link>
                        <Nav.Link as={Link} to="/Game-Development">{t('navigation.gamedev')}</Nav.Link>
                        <Nav.Link as={Link} to="/DigitalArt">{t('navigation.digitalart')}</Nav.Link>
                        <Nav.Link as={Link} to="/3D-Design">{t('navigation.3ddesign')}</Nav.Link>
                        <Nav.Link as={Link} to="/Westria">{t('navigation.westria')}</Nav.Link>
                    </Nav>
                    <LanguageSwitcher />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;