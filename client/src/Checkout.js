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
import Form from 'react-bootstrap/Form';
import SummaryItem from "./SummaryItem";

function Checkout(props) {
    console.log('checkout props', props);
    const [ cart, setCart ] = useState([]);
    const [ summaryItem, setSummaryItem ] = useState([]);
    let [ totalAmount, setTotalAmount ] = useState(null);
    let [ vat, setVat ] = useState(null);
    let [ grandTotal, setGrandTotal ] = useState(null);
    let [ shipping, setShipping ] = useState(0);
    console.log('checkout cart', cart)
    
    useEffect(() => {
        let items = JSON.parse(localStorage.getItem("cart"))
     if (items) {
        setCart(items)
     }
    }, [ props.cart ])

    useEffect(() => {
        setTotalAmount(
            cart.map(item => item.price * item.quantity).reduce((acc, currentValue) => {
                return acc + currentValue
            }, 0)
        )

        setVat(
            totalAmount / 5
        )

        setGrandTotal(
            totalAmount + shipping
        )

        setShipping(
            totalAmount > 0 ?
            50
            :
            0
        )
    }, [ totalAmount, vat, grandTotal, shipping, props.cart ])
   console.log('checkout cart', cart)
    return(
        <>
            {/* <Navigation /> */}
            <Container style={{ backgroundColor: "#CFCFCF"}}>
                <Row className="mt-5">
                    <Link to="/">
                        Go Back
                    </Link>
                </Row>
                <Container className="p-5" style={{ backgroundColor: "purple" }}>
                    <Row>
                        <h1>CHECKOUT</h1>
                    </Row>
                    {/* <Row>
                        <h6>BILLING DETAILS</h6>
                    </Row> */}
                    {/* Billing Details */}
                    <Row className="mt-5 gx-5">
                        <Col style={{ backgroundColor: "blue"}} lg={8}>
                            <h6>BILLING DETAILS</h6>
                            <Form>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Alexei Ward" />
                                        </Form.Group>
                                    </Col>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="email" placeholder="alexei@mail.com" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control type="text" placeholder="+1 202-555-0136" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <h6>SHIPPING INFO</h6>
                                   <Col lg={12}>
                                        <Form.Group>
                                            <Form.Label>Address</Form.Label>
                                            <Form.Control type="text" placeholder="1137 Williams Avenue" />
                                        </Form.Group>
                                   </Col> 
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Zip Code</Form.Label>
                                            <Form.Control type="text" placeholder="10001" />
                                        </Form.Group>
                                   </Col>
                                   <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="New York" />
                                        </Form.Group>
                                   </Col> 
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>Country</Form.Label>
                                            <Form.Control type="text" placeholder="United States" />
                                        </Form.Group>
                                   </Col> 
                                </Row>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Check label="E-Money" type={"radio"} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                    </Col>
                                    <Col>
                                        <Form.Group>
                                            <Form.Check style={{ border: "1px solid orange", borderRadius: "5px" }} label="Cash on Delivery" type={"radio"} />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>e-Money Number</Form.Label>
                                            <Form.Control type="text" placeholder="238521993" />
                                        </Form.Group>
                                   </Col>
                                   <Col lg={6}>
                                        <Form.Group>
                                            <Form.Label>e-Money PIN</Form.Label>
                                            <Form.Control type="text" placeholder="6891" />
                                        </Form.Group>
                                   </Col> 
                                </Row>
                            </Form>
                        </Col>
                        <Col style={{ backgroundColor: "green"}} lg={4}>
                            <Row>
                                <Col>
                                    <h4>Summary</h4>
                                </Col>
                            </Row>
                            {/* <SummaryItem title="XX99 MK II" price="$5000" quantity="x5" />
                            <SummaryItem /> */}
                            {
                                props.cart && props.cart.map(item => {
                                    return <SummaryItem src={`assets/cart/image-${item.slug}.jpg`} title={item.name} price={item.price} quantity={item.quantity} />
                                })
                            }
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <p>TOTAL</p>
                                    <p>${totalAmount}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <p>SHIPPING</p>
                                    <p>${shipping}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <p>VAT (INCLUDED)</p>
                                    <p>${vat}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-between">
                                    <p>GRAND TOTAL</p>
                                    <p>${grandTotal}</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="d-flex justify-content-center">
                                    <Button>CONTINUE & PAY</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
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

export default Checkout