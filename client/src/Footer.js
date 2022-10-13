import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Link } from "react-router-dom";

function Footer() {
    return(
        <Container fluid>
                <Row style={{ backgroundColor: "#101010" }} className="mt-5 d-flex justify-content-between p-5" lg={6} sm={12}>
                    <Col style={{ color: "#fff" }}>
                        <h3>audiophile</h3>

                        {/* <p>
                            Audiophile is an all in one stop to fulfill your audio needs. 
                            We're a small team of music lovers and sound specialists who are 
                            devoted to helping you get the most out of personal audio. Come and 
                            visit our demo facility - we're open 7 days a week.
                        </p>

                        <p>Copyright 2021. All Rights Reserved</p> */}
                        
                    </Col>
                    <Col style={{ color: "#fff" }} lg={6} sm={12}>
                        <ul className="footer-menu">
                            <Link to="/">
                                <li>HOME</li>
                            </Link>
                            <Link to="/headphones">
                                <li>HEADPHONES</li>
                            </Link>
                            <Link to="/speakers">
                                <li>SPEAKERS</li>
                            </Link>
                            <Link to="/earphones">
                                <li>EARPHONES</li>
                            </Link>
                        </ul>
                    </Col>
                </Row>
                <Row className="pl-5" style={{ backgroundColor: "#101010", color: "#fff" }}>
                    <Col lg={6} sm={12}>
                         <p>
                            Audiophile is an all in one stop to fulfill your audio needs. 
                            We're a small team of music lovers and sound specialists who are 
                            devoted to helping you get the most out of personal audio. Come and 
                            visit our demo facility - we're open 7 days a week.
                        </p>
                    </Col>
                    <Col className="d-flex align-items-start justify-content-end">
                        <Image className="social-icons" src="../assets/shared/desktop/icon-facebook.svg" />
                        <Image className="social-icons" src="../assets/shared/desktop/icon-twitter.svg" />
                        <Image className="social-icons" src="../assets/shared/desktop/icon-instagram.svg" />
                    </Col>
                </Row>
                <Row className="pl-5" style={{ backgroundColor: "#101010", color: "#fff" }}>
                    <Col>
                        <p>Copyright 2021. All Rights Reserved</p>
                    </Col>
                </Row>
                {/* <Footer /> */}
            </Container>
    )
}

export default Footer