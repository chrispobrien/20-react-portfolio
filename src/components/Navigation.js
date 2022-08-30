import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Navigation({ page, setPage , tags}) {

    const handleClick = function(event) {
        console.log(event.target.href);
        setPage(event.target.href.split('#')[1]);
    }

    return (
        <>
        <Navbar bg="light" expand="md" style={{ width: '100%' }}>
          <Container width="100%">
            <Navbar.Brand onClick={handleClick} href="#home">Christopher P. O'Brien</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end">
                <Nav.Link onClick={handleClick} href="#about">About Me</Nav.Link>
                <NavDropdown title="Work" id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={handleClick} href="#work-all">All</NavDropdown.Item>
                  {tags && tags.map((item, index) => {
                  return(
                    <NavDropdown.Item key={index} href={`#work-${item}`} onClick={handleClick}>{item}</NavDropdown.Item>
                  )
                  })}
                </NavDropdown>
                <Nav.Link onClick={handleClick} href="#contact">Contact Me</Nav.Link>
                <Nav.Link onClick={handleClick} href="#resume">Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
};

export default Navigation;
