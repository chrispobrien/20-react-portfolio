import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Navigation from './Navigation';
import Project from './Project';
import projects from '../data/projects';

function Header({ page, setPage}) {

    // Add all tags into array, may contain duplicates
    const allTags = projects.reduce((accum, item) => {
        return accum.concat(item.tags);
    },[]);

    // Remove duplicates and sort tags
    const tags = allTags.filter((item, pos) => allTags.indexOf(item) === pos).sort();

    // If this is to show work, displayTag is the tag of projects to show
    const displayTag = page.includes('work') ? page.split('-')[1] : 'all';

    // Filter projects to show only ones with the specified tag
    const displayProjects = displayTag === 'all' ? projects : projects.filter(project => project.tags.includes(displayTag));

    const [errorMessage, setErrorMessage] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForm = function(event) {
        event.preventDefault();
        if (!name) {
            alert('Please provide a name!');
            return;
        }
        if (!email) {
            alert('Please provide an email address!');
            return;
        }
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            alert('Please provide an email address in the correct format!');
            return;
        };
        if (!message) {
            alert('Please provide a message!');
            return;
        }
        alert('Thank you!')
    }

    const handleName = function(event) {
        if (!name) {
            setErrorMessage(`Please provide a value for name!`);
            return;
        };
        setErrorMessage('');
    };
    
    const changeName = function(event) {
        setName(event.target.value);
        if (name) {
            setErrorMessage('');
        }
    };

    const handleEmail = function(event) {
        if (!email) {
            setErrorMessage(`Please provide an email address!`);
            return;
        };
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setErrorMessage(`Please provide a valid email address!`);
            return;
        };
        setErrorMessage('');
    };

    const changeEmail = function(event) {
        setEmail(event.target.value);
        if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
            setErrorMessage('');
        };
    };

    const handleMessage = function(event) {
        if (!message) {
            setErrorMessage(`Please provide a message!`);
            return;
        };
        setErrorMessage('');
    };

    const changeMessage = function(event) {
        setMessage(event.target.value);
        if (message) {
            setErrorMessage('');
        }
    };

    // useEffect(() => {
        
    // }, [errorMessage])

    return (
        <>
        <Navigation page={page} setPage={setPage} tags={tags} />
        <Image className="jumbo" src={`./assets/images/banner.jpg`} />
        {page.includes('work') || page.includes('home') ? <>
        <Container fluid>
            <Row className="align-items-center">
                {displayProjects && displayProjects.map((item, index) => {
                    return (
                        <Col key={index} className="my-2 align-items-center project"><Project project={item} /></Col>
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
        <section id="contactMeForm">
            <form onSubmit={handleForm}>
                <Row className="my-2">
                    <Col>Name:*</Col>
                    <Col><input type="text" id="name" onBlur={handleName} onChange={changeName} /></Col>
                </Row>
                <Row className="my-2">
                    <Col>Email:*</Col>
                    <Col><input type="email" id="email" onBlur={handleEmail} onChange={changeEmail} /></Col>
                </Row>
                <Row className="my-2">
                    <Col>Message:*</Col>
                    <Col><textarea id="message" rows="4" cols="50" onBlur={handleMessage} onChange={changeMessage}></textarea></Col>
                </Row>
                {errorMessage ? <Button type="submit" disabled>Submit</Button> : <Button type="submit">Submit</Button>}
            </form>
                <div className="text-danger">{errorMessage}</div>
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
