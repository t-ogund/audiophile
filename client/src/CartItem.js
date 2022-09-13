import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from "react-router-dom";

function CartItem(props) {
    console.log('cart item prop', props)
    return(
        <Row>
            <Col className="d-flex mb-3 justify-content-between">
                <Image style={{ width: "4rem", height: "4rem" }} src={`../assets/cart/image-${props.slug}.jpg`} />
                <div className="cart-item-name-price">
                    <p className="m-0">{props.cartItemInfo}</p>
                    <p className="m-0">{props.cartItemQuantity * props.cartItemPrice}</p>
                </div>
                <div className="d-flex">
                    <Button className="align-self-start">-</Button>
                        <Form style={{ width: "3rem"}}>
                            <Form.Control type="text" value={props.cartItemQuantity} />
                        </Form>
                    <Button className="align-self-start">+</Button>
                </div>
            </Col>
        </Row>
    )
}

export default CartItem;