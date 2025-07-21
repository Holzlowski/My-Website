import { Navbar, Nav, Container } from 'react-bootstrap';
import logoName from '../../assets/images/LogoName.png'; 
import { Link } from 'react-router-dom';


function NavigationBar() {
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
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/westria">Westria</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Kontakt</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;