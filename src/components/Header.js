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
        {
            week: 11,
            tags: ['JS','Express'],
            name: 'Note Taker',
            description: 'Online Note Taker',
            deployed: 'https://c-11-note-taker.herokuapp.com/',
            github: 'https://github.com/chrispobrien/11-Note-Taker'
        },
        {
            week: 12,
            tags: ['JS','MySQL'],
            name: 'Employee Tracker',
            description: 'Book Bestseller Lists',
            deployed: 'https://drive.google.com/file/d/1ocHnMhIyZPv9_-tdEOI_C7fgV9EeeDq5/view',
            github: 'https://github.com/chrispobrien/12-Employee-Tracker'
        },
        {
            week: 13,
            tags: ['JS','Express', 'MySQL', 'ORM'],
            name: 'E-Commerce Back End',
            description: 'API Back End for E-Commerce',
            deployed: 'https://drive.google.com/file/d/1R-ovtczJKdkk_L6K5wMXAHUE6vV76Oej/view',
            github: 'https://github.com/chrispobrien/13-e-commerce-back-end'
        },
        {
            week: 14,
            tags: ['JS','MySQL','Express'],
            name: 'Tech Blog',
            description: 'A simple tech blog using MySQL as the data store',
            deployed: 'https://sheltered-wave-14149.herokuapp.com/',
            github: 'https://github.com/chrispobrien/14-tech-blog'
        },
        {
            week: 16,
            tags: ['JS','Express', 'MySQL', 'ORM'],
            name: 'Project 2: E-Commerce',
            description: 'Front and back-end for a sample e-commerce site, team project',
            deployed: 'https://beauty-ecommerce.herokuapp.com/',
            github: 'https://github.com/BenYeung4/Beauty-Ecommerce'
        },
        {
            week: 18,
            tags: ['JS','MongoDB','Express', 'ORM'],
            name: 'Social Network API',
            description: 'An API suitable for a social network',
            deployed: 'https://drive.google.com/file/d/1K5ouux3G9ZHYhFVqBiVGku_0wvHT423M/view',
            github: 'https://github.com/chrispobrien/18-social-network-api'
        },
        {
            week: 19,
            tags: ['JS','Express', 'MongoDB', 'ORM'],
            name: 'Budget Tracker',
            description: 'Progressive Web App (PWA)',
            deployed: 'https://agile-bastion-33942.herokuapp.com/',
            github: 'https://github.com/chrispobrien/19-budget-radium'
        },
    ];

    const allTags = projects.reduce((accum, item) => {
        return accum.concat(item.tags);
    },[]);

    const tags = allTags.filter((item, pos) => allTags.indexOf(item) === pos).sort();

    const displayTag = page.includes('work') ? page.split('-')[1] : 'all';

    const displayProjects = displayTag === 'all' ? projects : projects.filter(project => project.tags.includes(displayTag));

    return (
        <>
        <Navigation page={page} setPage={setPage} tags={tags} />
        <Image className="jumbo" src="/assets/images/banner.jpg" />
        {page.includes('work') || page.includes('home') ? <>
        <Container fluid>
            <Row className="align-items-center">
                {displayProjects && displayProjects.map((item, index) => {
                    return (
                        <Col key={index} className="my-2 align-items-center"><Project project={item} /></Col>
                        )
                })}
            </Row>
        </Container>
        </> : null}
        {page.includes('about') ? <>
        <div className="badge">About Me</div>
        <section id="aboutMeText">
      <article>
        <p>
          In my 30-year career in I.T., about 20% of my work has been coding in a variety of languages and on different platforms. From BASIC on a TRS-80 and IBM Series/1, to Pascal on the Apple IIe, to C, C++ and C#. RPG III/IV/ILE and CL on an IBM AS/400 (now eServer iSeries), DB/2 DB/400, as well as Microsoft SQL Server T-SQL, and various scripting languages.
        </p>
        <p>
          Today I am taking a course in full-stack coding, including Node and React, and more RDBMS and NoSQL back-end databases. In my career as a systems admin, I have seen the industry change to browser-based, cloud, responsive applications that are easier to use, easier to support, and multi-platform. My goal is to transition to a developer within this environment.
        </p>
      </article>

    </section>
        </> : null }
        {page.includes('contact') ? <>
        <div className="badge">Contact Me</div>
        <section id="contactMeNav">
        <ul>
            <li><a href="mailto:chris.obrien57@gmail.com">chris.obrien57@gmail.com</a></li>
            <li><a href="tel:19145550100">+1 (914) 555-0100</a></li>
            <li><a href="https://github.com/chrispobrien">GitHub</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Spotify</a></li>
        </ul>
        </section>
        </> : null}
        {page.includes('resume') ? <>
        <div className="badge">Resume</div>
        <section>
            TBD
        </section>
        </> : null}
        </>
      );
};

export default Header;
