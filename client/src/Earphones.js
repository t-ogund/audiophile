import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import EarphoneComponent from "./EarphoneComponent";
import { Link } from "react-router-dom";

function Earphones() {

    let [ earphoneData, setEarphoneData ] = useState([]);

    useEffect(() => {
        fetch('/headphone-data')
          .then(res => res.json())
          .then(data => setEarphoneData(data.data.filter(item => item.category === "earphones")))
      }, [])

      const earphoneComponents = earphoneData.map((item, index) => {
        return <EarphoneComponent
        mapKey={index} 
        name={ item.name } 
        description={ item.description } 
        desktopImage={ item.image.desktop } 
        tabletImage={ item.image.tablet} 
        mobileImage={ item.image.mobile }
        new={ item.new }
        slug={ item.slug } 
        />
      })


    return(
        <>
            {/* <Navigation /> */}
            <Container fluid style={{ backgroundColor: "#000000"}}>
                <Row className="mb-5">
                    <Col style={{ color: "#fff", padding: "4rem" }} className="d-flex justify-content-center">
                        <h1>Earphones</h1>
                    </Col>
                </Row>
            </Container>
            <Container>
            {earphoneComponents}
                <Row style={{ marginTop: "10rem", marginBottom: "10rem" }} className="text-center">
                    <Col lg={4} md={4} sm={12}>
                        <Card style={{ height: '15rem' }}>
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
                        <Card style={{ height: '15rem' }}>
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
                        <Card style={{ height: '15rem' }}>
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
                            <li>HOME</li>
                            <li>HEADPHONES</li>
                            <li>SPEAKERS</li>
                            <li>EARPHONES</li>
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
            </Container>
        </>
    )
}

export default Earphones