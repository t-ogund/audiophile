import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation() {
    return(
        <Container fluid>
            <Row className="justify-content-space-between">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">
                            <h3>Audiophile</h3>
                        </Navbar.Brand>
                    </Container>
                    <Nav>
                        <Link to="/">
                            <Nav.Link  className="nav-text-color" href="home">Home</Nav.Link>
                        </Link>
                        <Link to="/headphones">
                            <Nav.Link  className="nav-text-color" href="headphones">Headphones</Nav.Link>
                        </Link>
                        <Link to="/speakers">
                            <Nav.Link  className="nav-text-color" href="speakers">Speakers</Nav.Link>
                        </Link>
                        <Link to="/earphones">
                            <Nav.Link  className="nav-text-color" href="earphones">Earphones</Nav.Link>
                        </Link>
                    </Nav>
                    <Container className="justify-content-end align-items-center">
                        <h6 className="nav-text-color">Cart</h6>
                    </Container>
                </Navbar>
            </Row>
        </Container>
    )
}

export default Navigation;