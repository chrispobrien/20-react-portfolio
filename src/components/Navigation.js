import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Navigation() {
    return (
        <>
        <Navbar bg="light" expand="lg" width="100%">
          <Container width="100%">
            <Navbar.Brand href="#home">Christopher P. O'Brien</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="me-auto">
                <Nav.Link href="#about">About Me</Nav.Link>
                <NavDropdown title="Work" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#work/react">React</NavDropdown.Item>
                  <NavDropdown.Item href="#work/node">Node</NavDropdown.Item>
                  <NavDropdown.Item href="#action/mongoDB">MongoDB</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact Me</Nav.Link>
                <Nav.Link href="#resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
};

export default Navigation;
