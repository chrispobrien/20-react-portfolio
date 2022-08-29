import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Navigation from './Navigation';

function Header() {
    return (
        <>
        <Navigation />
        <Image src="/assets/images/banner.jpg" />
        </>
      );
};

export default Header;
