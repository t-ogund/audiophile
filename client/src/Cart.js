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
import CartItem from "./CartItem";

function Cart(props) {
    const [ cartArray, setCartArray ] = useState([])
    console.log('cart props', props)
    console.log('test')

    useEffect(() => {
        setCartArray(
            JSON.parse(localStorage.getItem("cart"))
        )
    }, [ props.cartArray ])
    console.log("CART ARRAY:", cartArray)

    function removeAll() {
        setCartArray(
            localStorage.clear() 
        )
        console.log('remove all cartArray', cartArray)
    }

    
    return(
        // <Container style={{ backgroundColor: 'green'}}>
        <>
            <Row>
                <Col style={{ backgroundColor: 'blue'}} lg={4} md={5} sm={6} xs={8} className="d-flex justify-content-between">
                    <h5>Cart ({props.cartArray.length})</h5>
                    <Button onClick={removeAll}>Remove All</Button>
                </Col>
            </Row>
            <Row>
                <Col lg={4} md={5} sm={6} xs={8}>
                    {
                        cartArray && cartArray.map(item => {
                            return <CartItem cartItemInfo={item.name} cartItemQuantity={item.quantity} cartItemPrice={item.price} slug={item.slug} />
                        })
                    }
                    {/* <CartItem cartItemInfo={props.itemInfo} cartItemQuantity={props.quantity} /> */}
                    {/* <CartItem cartItemInfo={props.itemInfo} />
                    <CartItem cartItemInfo={props.itemInfo} />
                    <CartItem cartItemInfo={props.itemInfo} /> */}
                </Col>
            </Row>
            <Row>
                <Col style={{ backgroundColor: 'red'}} lg={4} md={5} sm={6} xs={8} className="d-flex justify-content-between">
                    <p>
                        Total
                    </p>
                    <p>
                            {/* $5,396 */}
                            {
                                cartArray && cartArray.map(item => {
                                    let totalQuantity = item.quantity
                                    let totalPrice = totalQuantity * item.price
                                        return totalQuantity + totalPrice
                                })
                                .reduce((acc, currentValue) => {
                                    return acc + currentValue
                                }, 0)
                            }
                    </p>
                </Col>
            </Row>
        </>
        // </Container>
    )
}

export default Cart