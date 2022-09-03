import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

function Footer() {
    return (
        <>
        <section id="contactMeNav">
        <ul>
            <li><a href="mailto:chris.obrien57@gmail.com">chris.obrien57@gmail.com</a></li>
            <li><a href="tel:19145550100">+1 (914) 555-0100</a></li>
            <li><a href="https://github.com/chrispobrien">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Spotify</a></li>
        </ul>
        </section>
        </>
      );
};

export default Footer;
