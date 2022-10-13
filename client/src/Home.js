import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
import Modal from 'react-bootstrap/Modal';
import Cart from "./Cart";
import Footer from "./Footer";

function Home(props) {
    const [ show, setShow ] = useState(false);
    let [ cartArray, setCartArray ] = useState([]);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("cart"))
        if (items) {
            setCartArray(items)
        }
    }, [])
    console.log('home props', props)

    return(
        <>
            {/* <Navigation clickCart={handleShow} /> */}
            <Container fluid>
            {/* <Cart /> */}
                <Row>
                    <Col className="hero-image">
                        <Row className="mt-5 p-5 justify-content-center justify-content-md-start text-center text-md-start">
                            <Col className="white-text" lg={6} sm={6}>
                                <h5>NEW PRODUCT</h5>
                                <h2>XX99 MARK II HEADPHONES</h2>
                                <p>
                                    Experience natural, lifelike audio and exceptional 
                                    build quality made for the passionate music enthusiast.
                                </p>
                                <Link to={`/headphones/xx99-mark-two-headphones`}>
                                    <Button>SEE PRODUCT</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row style={{ marginTop: "10rem", marginBottom: "10rem" }} className="text-center">
                    <Col lg={4} md={4} sm={12}>
                        <Card className="mb-5" style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="assets\shared\desktop\image-category-thumbnail-headphones.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Headphones
                                </Card.Title>
                                <Link to="/headphones">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card className="mb-5 mt-5 mt-md-0" style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="assets\shared\desktop\image-category-thumbnail-speakers.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Speakers
                                </Card.Title>
                                <Link to="/speakers">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={12}>
                        <Card className="mb-5 mt-5 mt-md-0" style={{ height: '15rem' }}>
                        <Image className="home-card-images" src="assets\shared\desktop\image-category-thumbnail-earphones.png" />
                            <Card.Body className="d-flex flex-column justify-content-end">
                                <Card.Title>
                                    Earphones
                                </Card.Title>
                                <Link to="/earphones">
                                    Shop >
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="zx9-background-color mb-5">
                    {/* <Image className="background-circles" src="assets/home/desktop/pattern-circles.svg" /> */}
                    <Col className="zx9-background" md={6}>

                    </Col>
                    <Col className="zx9-text" md={6}>
                        <h2>ZX9 SPEAKER</h2>
                        <p>Upgrade to premium speakers that are phenomenally built to discover 
                        truly remarkable sound.</p>
                        <Link to={`speakers/zx9-speaker`}>
                            <Button>SEE PRODUCT</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="mb-5">
                   <Col className="zx7-background">
                        <Row className="zx7-col">
                            <Col className="text-center zx7-text" xs={6}>
                                <h3>ZX7 SPEAKERS</h3>
                                <Link to={`speakers/zx7-speaker`}>
                            <Button>SEE PRODUCT</Button>
                        </Link>
                            </Col>
                        </Row>
                   </Col>        
                </Row>
                <Row className="mb-5 d-flex">
                    <Col className="p-0" sm={6}>
                        {/* <Image fluid src="assets/home/desktop/image-earphones-yx1.jpg" /> */}
                        <picture>
                            <source media="(max-width: 2500px)" srcset="assets/home/desktop/image-earphones-yx1.jpg" />
                            <source media="(max-width: 768px)" srcset="assets/home/tablet/image-earphones-yx1.jpg" />
                            <source media="(max-width: 375px)" srcset="assets/home/mobile/image-earphones-yx1.jpg" />
                            <Image rounded fluid src="assets/home/mobile/image-earphones-yx1.jpg" width="100%" />
                        </picture>
                    </Col>
                    <Col sm={6} className="yx1-text p-5">
                        <h3>YX1 EARPHONES</h3>
                        <Link to={`earphones/yx1-earphones`}>
                            <Button>SEE PRODUCT</Button>
                        </Link>
                    </Col>
                </Row>
                <Row className="d-flex mb-5">
                    <Col className="best-audio-text order-sm-last order-md-last order-lg-first align-self-center text-sm-center text-lg-start" xs={12} lg={6}>
                        <h3>BRINGING YOU THE BEST AUDIO GEAR</h3>
                        <p>
                            Located at the heart of New York City, Audiophile is the premier 
                            store for high end headphones, earphones, speakers, and audio accessories. 
                            We have a large showroom and luxury demonstration rooms available for you 
                            to browse and experience a wide range of our products. Stop by our store to 
                            meet some of the fantastic people who make Audiophile the best place to buy 
                            your portable audio equipment.
                        </p>
                    </Col>
                    <Col className="headphone-profile order-sm-first order-md-first order-lg-last" xs={12} lg={6}>
                        <picture>
                            <source media="(max-width: 2500px)" srcset="assets/shared/desktop/image-best-gear.jpg" />
                            <source media="(max-width: 768px)" srcset="assets/shared/tablet/image-best-gear.jpg" />
                            <source media="(max-width: 375px)" srcset="assets/shared/mobile/image-best-gear.jpg" />
                            <Image rounded fluid src="assets/home/mobile/image-earphones-yx1.jpg" width="100%" />
                        </picture>
                    </Col>
                </Row>    
            </Container>
            <Footer />

            {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
{/* 
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
            <Cart />
        </Modal.Body>
        <Modal.Footer>
          <Button className="flex" variant="primary">
            Checkout
          </Button>
        </Modal.Footer>
      </Modal> */}
        </>
    )
}

export default Home