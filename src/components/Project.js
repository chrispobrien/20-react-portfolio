import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Card, Button } from 'react-bootstrap';

function Project({ project }) {
    const { week, tags, name, description, deployed, github } = project;

    return (
        <>
        <Card className="my-card">
            <Card.ImgOverlay>
                <Card.Title className="my-card-text">{name}</Card.Title>
                <Card.Text className="my-card-text">
                    {tags && tags.map((tag, index) => {
                    return tag+" ";
                    })}
                </Card.Text>
                <div className="my-card-button">
                <Card.Link href={deployed}><Button>Deployed</Button></Card.Link>
                <Card.Link href={github}><Button>Github</Button></Card.Link>
                </div>
            </Card.ImgOverlay>
            <Card.Img variant="bottom" src={require(`../assets/images/${week}.png`)} />
        </Card>
        </>
      );
};

export default Project;
