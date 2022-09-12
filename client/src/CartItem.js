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
                <Image style={{ width: "4rem", height: "4rem" }} src="../assets/cart/image-xx59-headphones.jpg"/>
                <div className="cart-item-name-price">
                    <p className="m-0">{props.cartItemInfo.name}</p>
                    <p className="m-0">{props.cartItemQuantity === 0 ? 0 : props.cartItemInfo.price * props.cartItemQuantity}</p>
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