import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Navigation({ page, handlePage , tags}) {

    const handleClick = function(event) {
        console.log(event.target.href);
        handlePage(event.target.href.split('#')[1]);
    }

    return (
        <>
        <Navbar bg="light" expand="md" style={{ width: '100%' }}>
          <Container width="100%">
            <Navbar.Brand onClick={handleClick} href="#about">Christopher P. O'Brien</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto justify-content-end">
                <Nav.Link onClick={handleClick} href="#about" className={page === 'about' ? "text-bg-primary" : null}>About Me</Nav.Link>
                <NavDropdown title="Portfolio" id="basic-nav-dropdown" className={page.includes('work') ? "text-bg-primary text-light" : null}>
                  <NavDropdown.Item onClick={handleClick} href="#work-all" className={page.includes('work') && page.includes('all') ? "text-bg-primary" : null}>All</NavDropdown.Item>
                  {tags && tags.map((item, index) => {
                  return(
                    <NavDropdown.Item key={index} href={`#work-${item}`} onClick={handleClick} className={page.includes('work') && page.includes(item) ? "text-bg-primary" : null}>{item}</NavDropdown.Item>
                  )
                  })}
                </NavDropdown>
                <Nav.Link onClick={handleClick} href="#contact" className={page === 'contact' ? "text-bg-primary" : null}>Contact Me</Nav.Link>
                <Nav.Link onClick={handleClick} href="#resume" className={page === 'resume' ? "text-bg-primary" : null}>Resume</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </>
      );
};

export default Navigation;
