import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navigation from './Navigation';
import Project from './Project';

function Header({ page, setPage}) {

    const projects = [
        {
            week: 2,
            tags: ['HTML', 'CSS'],
            name: 'Advanced CSS: Portfolio',
            description: 'Week 2 of Coding Bootcamp, a portfolio created with HTML and CSS',
            deployed: 'https://chrispobrien.github.io/02-Advanced-CSS-Portfolio/',
            github: 'https://github.com/chrispobrien/02-Advanced-CSS-Portfolio'
        },
        {
            week: 3,
            tags: ['JS'],
            name: 'JavaScript',
            description: 'JavaScript Password Generator',
            deployed: 'https://chrispobrien.github.io/03-JavaScript/',
            github: 'https://github.com/chrispobrien/03-JavaScript'
        },
        {
            week: 4,
            tags: ['JS'],
            name: 'Web APIs',
            description: 'Use of localstorage API to implement a timed test',
            deployed: 'https://chrispobrien.github.io/04-Web-APIs/',
            github: 'https://github.com/chrispobrien/04-Web-APIs'
        },
        {
            week: 5,
            tags: ['JS', 'jQuery'],
            name: 'Third Party APIs',
            description: 'A simple calendar application',
            deployed: 'https://chrispobrien.github.io/05-Third-Party-APIs/',
            github: 'https://github.com/chrispobrien/05-Third-Party-APIs'
        },
        {
            week: 6,
            tags: ['JS'],
            name: 'Server Side APIs',
            description: 'A weather dashboard',
            deployed: 'https://chrispobrien.github.io/06-Server-Side-APIs/',
            github: 'https://github.com/chrispobrien/06-Server-Side-APIs'
        },
        {
            week: 8,
            tags: ['JS'],
            name: 'Project 1: Books',
            description: 'Book Bestseller Lists',
            deployed: 'https://chrispobrien.github.io/project-1/',
            github: 'https://github.com/chrispobrien/project-1'
        },

    ];

    const allTags = projects.reduce((accum, item) => {
        return accum.concat(item.tags);
    },[]);

    const tags = allTags.filter((item, pos) => allTags.indexOf(item) === pos).sort();

    return (
        <>
        <Navigation page={page} setPage={setPage} tags={tags} />
        <Image className="jumbo" src="/assets/images/banner.jpg" />
        <Container fluid>
            <Row>
            {/* <Stack direction="horizontal" gap={3}> */}
                {projects && projects.map((item, index) => {
                    return (
                        <Col key={index} className="my-2"><Project project={item} /></Col>
                        )
                })}
            </Row>
            {/* </Stack> */}
        </Container>
        </>
      );
};

export default Header;
